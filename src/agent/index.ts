import { WebAPI, APIError } from "../internal";
import { TokenGetter } from "../authorization";
import type {
  ListChatsResponse,
  ListChatParameters,
  EmptyResponse,
  ListThreadsParameters,
  ListThreadsResponse,
  GetChatResponse,
  ListArchivesParameters,
  ListArchivesResponse,
  StartChatParameters,
  StartChatResponse,
  ActivateChatParameters,
  ActivateChatResponse,
  TransferChatParameters,
  SendEventResponse,
  SendRichMessagePostbackParameters,
  GetCustomerResponse,
  ListCustomersParameters,
  ListCustomersResponse,
  CustomerParameters,
  CreateCustomerResponse,
  MulticastRecipients,
  AgentForTransfer,
  UploadFileResponse,
} from "./structures";
import { ChatAccess, Event, Properties, RoutingStatus } from "../objects";
import { promises as fs } from "fs";
import axios from "axios";
import FormData from "form-data";

export class AgentAPI extends WebAPI {
  constructor(clientID: string, tokenGetter: TokenGetter) {
    super(clientID, tokenGetter, "agent");
  }

  /**
   * It returns summaries of the chats an Agent has access to.
   * @param opts - set of filters and pagination to limit returned entries
   */
  async listChats(opts?: ListChatParameters): Promise<ListChatsResponse> {
    return this.handleAction("list_chats", opts || {});
  }

  /**
   * Returns threads that the current Agent has access to in a given chat.
   * @param chat_id - chat ID to get threads from
   * @param opts - additional options like pagination and sorting
   */
  async listThreads(
    chat_id: string,
    opts?: ListThreadsParameters
  ): Promise<ListThreadsResponse> {
    return this.handleAction("list_threads", { chat_id, ...opts });
  }

  /**
   * It returns a thread that the current Agent has access to in a given chat.
   * @param chat_id - ID of a chat to get
   * @param thread_id - thread ID to get (if not provided, last thread is returned)
   */
  async getChat(chat_id: string, thread_id?: string): Promise<GetChatResponse> {
    return this.handleAction("get_chat", { chat_id, thread_id });
  }
  /**
   * It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.
   *
   * The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
   * but each time with a different thread. The returned chat is a complete object, not only a chat summary.
   * @param opts - options like filters or pagination
   */
  async listArchives(
    opts?: ListArchivesParameters
  ): Promise<ListArchivesResponse> {
    return this.handleAction("list_archives", opts || {});
  }

  /**
   * Starts a chat
   * @param opts - options like initial chat data or continuous switch
   */
  async startChat(opts?: StartChatParameters): Promise<StartChatResponse> {
    return this.handleAction("start_chat", opts || {});
  }

  /**
   * Restarts an archived chat
   * @param param - either string ID of a chat to activate or full initial chat object
   */
  async activateChat(
    param: string | ActivateChatParameters
  ): Promise<ActivateChatResponse> {
    if (typeof param === "string")
      return this.handleAction("activate_chat", { chat: { id: param } });
    return this.handleAction("activate_chat", param || {});
  }

  /**
   * Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.
   * @param chat_id - chat ID to deactivate
   */
  async deactivateChat(chat_id: string): Promise<EmptyResponse> {
    return this.handleAction("deactivate_chat", { chat_id });
  }

  /**
   * Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
   * Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.
   * @param chat_id - chat ID to follow
   */
  async followChat(chat_id: string): Promise<EmptyResponse> {
    return this.handleAction("follow_chat", { chat_id });
  }

  /**
   * Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
   * will be sent to the requester. Chat members cannot unfollow the chat.
   * @param chat_id - chat ID to unfollow
   */
  async unfollowChat(chat_id: string): Promise<EmptyResponse> {
    return this.handleAction("unfollow_chat", { chat_id });
  }

  /**
   * Grants access to a new chat without overwriting the existing ones.
   * @param chat_id - chat ID to grant access to
   * @param access - access to grant
   */
  async grantChatAccess(
    chat_id: string,
    access: ChatAccess
  ): Promise<EmptyResponse> {
    return this.handleAction("grant_chat_access", { chat_id, access });
  }

  /**
   * Revokes access to chat
   * @param chat_id - chat ID to grant access to
   * @param access - access to revoke
   */
  async revokeChatAccess(
    chat_id: string,
    access: ChatAccess
  ): Promise<EmptyResponse> {
    return this.handleAction("revoke_chat_access", { chat_id, access });
  }

  /**
   * Grants access to a new chat overwriting the existing ones.
   * @param chat_id - chat ID to grant access to
   * @param access - access to set
   */
  async setChatAccess(
    chat_id: string,
    access: ChatAccess
  ): Promise<EmptyResponse> {
    return this.handleAction("set_chat_access", { chat_id, access });
  }

  /**
   * Transfers a chat to an Agent or a group.
   * @param chat_id - chat to transfer
   * @param opts - specific target or force flag
   */
  async transferChat(
    chat_id: string,
    opts?: TransferChatParameters
  ): Promise<EmptyResponse> {
    return this.handleAction("transfer_chat", { chat_id, ...opts });
  }

  /**
   * Adds a user to the chat. You can't add more than one customer user type to the chat.
   * @param chat_id - chat to add user to
   * @param user_id - user to add
   * @param user_type - customer or agent
   * @param require_active_thread - if true, adds user only if chat has an active thread
   */
  async addUserToChat(
    chat_id: string,
    user_id: string,
    user_type: string,
    require_active_thread?: boolean
  ): Promise<EmptyResponse> {
    return this.handleAction("add_user_to_chat", {
      chat_id,
      user_id,
      user_type,
      require_active_thread,
    });
  }
  /**
   * Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.
   * @param chat_id - chat to remove user from
   * @param user_id - user to remove
   */
  async removeUserFromChat(
    chat_id: string,
    user_id: string
  ): Promise<EmptyResponse> {
    return this.handleAction("remove_user_from_chat", {
      chat_id,
      user_id,
      user_type: "agent",
    });
  }
  /**
   * Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
   * It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
   * with the present parameter set to false.
   * @param chat_id - chat to send event to
   * @param event - Event object
   * @param attach_to_last_thread - if true, adds event to last inactive thread
   */
  async sendEvent(
    chat_id: string,
    event: Event,
    attach_to_last_thread?: boolean
  ): Promise<SendEventResponse> {
    return this.handleAction("send_event", {
      chat_id,
      event,
      attach_to_last_thread,
    });
  }

  /**
   * Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.
   * @param filePath - path of file to upload
   */
  async uploadFile(filePath: string): Promise<UploadFileResponse> {
    const file = await fs.readFile(filePath, "binary");
    const url = `${this.APIURL}/${this.version}/${this.type}/action/upload_file`;
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(url, formData.getBuffer(), formData.getHeaders());
  }

  /**
   * Sends postback for rich message
   * @param opts - postback data
   */
  async sendRichMessagePostback(
    opts: SendRichMessagePostbackParameters
  ): Promise<EmptyResponse> {
    return this.handleAction("send_rich_message_postback", opts);
  }

  /**
   * Updates chat properties
   * @param chat_id - chat to update properties
   * @param properties - properties to update
   */
  async updateChatProperties(
    chat_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_chat_properties", { chat_id, properties });
  }

  /**
   * Deletes chat properties
   * @param chat_id - chat to delete properties
   * @param properties - properties to delete
   */
  async deleteChatProperties(
    chat_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_chat_properties", { chat_id, properties });
  }

  /**
   * Updates thread properties
   * @param chat_id - chat ID of thread to update
   * @param thread_id - thread to update properties
   * @param properties - properties to update
   */
  async updateThreadProperties(
    chat_id: string,
    thread_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_thread_properties", {
      chat_id,
      thread_id,
      properties,
    });
  }

  /**
   * Deletes thread properties
   * @param chat_id - chat ID of thread to delete
   * @param thread_id - thread to delete properties
   * @param properties - properties to delete
   */
  async deleteThreadProperties(
    chat_id: string,
    thread_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_thread_properties", {
      chat_id,
      thread_id,
      properties,
    });
  }

  /**
   * Updates event properties
   * @param chat_id - chat ID of event to update
   * @param thread_id - thread ID of event to update
   * @param event_id - event to update properties
   * @param properties - properties to update
   */
  async updateEventProperties(
    chat_id: string,
    thread_id: string,
    event_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_event_properties", {
      chat_id,
      thread_id,
      event_id,
      properties,
    });
  }

  /**
   * Deletes event properties
   * @param chat_id - chat ID of event to delete
   * @param thread_id - thread ID of event to delete
   * @param event_id - event to delete properties
   * @param properties - properties to delete
   */
  async deleteEventProperties(
    chat_id: string,
    thread_id: string,
    event_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_event_properties", {
      chat_id,
      thread_id,
      event_id,
      properties,
    });
  }

  /**
   * Tags thread with given tag
   * @param chat_id - chat ID of thread to tag
   * @param thread_id - thread to tag
   * @param tag - tag to add
   */
  async tagThread(
    chat_id: string,
    thread_id: string,
    tag: string
  ): Promise<EmptyResponse> {
    return this.handleAction("tag_thread", { chat_id, thread_id, tag });
  }

  /**
   * Removes tag from thread
   * @param chat_id - chat ID of thread to untag
   * @param thread_id - thread to untag
   * @param tag - tag to remove
   */
  async untagThread(
    chat_id: string,
    thread_id: string,
    tag: string
  ): Promise<EmptyResponse> {
    return this.handleAction("untag_thread", { chat_id, thread_id, tag });
  }

  /**
   * Returns the info about the Customer with a given customer_id.
   * @param customer_id - customer ID to teg
   */
  async getCustomer(customer_id: string): Promise<GetCustomerResponse> {
    return this.handleAction("get_customer", { customer_id });
  }

  /**
   * It returns the list of Customers.
   * @param opts - options like filters or pagination
   */
  async listCustomers(
    opts?: ListCustomersParameters
  ): Promise<ListCustomersResponse> {
    return this.handleAction("list_customers", opts || {});
  }

  /**
   * Creates a new Customer user type.
   * @param opts - customer data
   */
  async createCustomer(
    opts?: CustomerParameters
  ): Promise<CreateCustomerResponse> {
    return this.handleAction("create_customer", opts || {});
  }

  /**
   * Updates Customer's properties.
   * @param customer_id - ID of a customer to update
   * @param opts - properties to update
   */
  async updateCustomer(
    customer_id: string,
    opts: CustomerParameters
  ): Promise<EmptyResponse> {
    return this.handleAction("update_customer", { customer_id, ...opts });
  }

  /**
   * Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
   * and does not accept new ones during the ban lifespan.
   * @param customer_id = ID of customer to ban
   * @param days - ban duration in days
   */
  async banCustomer(customer_id: string, days: number): Promise<EmptyResponse> {
    return this.handleAction("ban_customer", { customer_id, ban: { days } });
  }

  /**
   * Changes the status of an Agent or a Bot Agent.
   * @param status - status to set
   * @param agent_id - ID of agent to update status
   */
  async setRoutingStatus(
    status: RoutingStatus,
    agent_id?: string
  ): Promise<EmptyResponse> {
    return this.handleAction("set_routing_status", { status, agent_id });
  }

  /**
   * Marks events as seen by Agent.
   * @param chat_id - chat to mark events
   * @param seen_up_to - date up to which mark events
   */
  async markEventsAsSeen(
    chat_id: string,
    seen_up_to: string
  ): Promise<EmptyResponse> {
    return this.handleAction("mark_events_as_seen", { chat_id, seen_up_to });
  }

  /**
   * Sends typing indicator
   * @param chat_id - chat for typing indicator
   * @param is_typing - status of typing
   * @param recipients - possible values: all, agents
   */
  async sendTypingIndicator(
    chat_id: string,
    is_typing: boolean,
    recipients?: string
  ): Promise<EmptyResponse> {
    return this.handleAction("send_typing_indicator", {
      chat_id,
      is_typing,
      recipients,
    });
  }

  /**
   * This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
   * For example, it could be used in an app that sends notifications to Agents or Customers,
   * when a certain condition is met (e.g. an important Customer started the chat).
   * @param recipients - who should receive multicast
   * @param content = JSON content to send
   * @param type - message type
   */
  async multicast(
    recipients: MulticastRecipients,
    content: object,
    type?: string
  ): Promise<EmptyResponse> {
    return this.handleAction("multicast", { recipients, content, type });
  }

  /**
   * It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
   * - The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
   * - Only chats with Customers are taken into account in total_active_chats.
   * @param chat_id - chat ID you want to transfer
   */
  async listAgentsForTransfer(chat_id: string): Promise<AgentForTransfer[]> {
    return this.handleAction("list_agents_for_transfer", { chat_id });
  }
}
