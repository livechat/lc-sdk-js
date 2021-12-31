import FormData from "form-data";
import { promises as fs } from "fs";
import {
  AllVersions,
  RequestClient,
  RtmClient,
  WebClient,
  SupportsType,
  SupportsVersion,
  RequestOptions,
  VersionsSince32,
} from "../clients";
import { UnsupportedClientType } from "../errors";
import { AvailableVersions } from "../internal";
import { Properties, Push, RoutingStatus } from "../objects";
import {
  AgentForTransfer,
  ChangePushNotificationsRequest,
  CreateCustomerResponse,
  CustomerParameters,
  EmptyResponse,
  GetChatResponse,
  GetCustomerResponse,
  ListArchivesParameters,
  ListArchivesResponse,
  ListChatParameters,
  ListChatsResponse,
  ListCustomersParameters,
  ListCustomersResponse,
  ListThreadsParameters,
  ListThreadsResponse,
  LoginRequest,
  LoginResponse,
  MulticastRecipients,
  PushesAgentAPI,
  ResumeChatParameters,
  ResumeChatResponse,
  SendEventResponse,
  SendRichMessagePostbackParameters,
  SetRoutingStatusResponse,
  StartChatParameters,
  StartChatResponse,
  TransferChatParameters,
  UploadFileResponse,
} from "./structures";

export class AgentAPI<T extends "web" | "rtm"> {
  constructor(private readonly client: RequestClient<T>) {}

  /**
   * Allows to subscribe a handler for a given push. Returns function to unsubscribe.
   * Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.
   * @param push - push name to subscribe to
   * @param handler - function receiving push payload
   */
  @SupportsType("rtm")
  on(push: PushesAgentAPI, handler: (payload: Push["payload"]) => void): () => void {
    if (this.client instanceof RtmClient) {
      return this.client.subscribePush(push, handler);
    }
    throw new UnsupportedClientType("rtm");
  }

  /**
   * It returns the initial state of the current Agent.
   * @param loginData - OAuth token from Agent's account or full object with login options
   */
  @SupportsType("rtm")
  @SupportsVersion(...AllVersions)
  async login(loginData: string | LoginRequest, meta?: RequestOptions<T>): Promise<LoginResponse> {
    if (typeof loginData === "string") {
      return this.client.send("login", { token: loginData }, meta);
    }
    return this.client.send("login", loginData, meta);
  }

  /**
   * Change the firebase push notifications properties.
   * @param change - properties to change
   */
  @SupportsType("rtm")
  @SupportsVersion(...AllVersions)
  async changePushNotifications(
    change: ChangePushNotificationsRequest,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send("change_push_notifications", change, meta);
  }

  /**
   * Sets an Agent's connection to the away state. You can use this method to manipulate the Agent's status.
   * The method works per connection - all connections an Agent has (desktop, mobile, etc) must be in the away state
   * for the Agent's status to be changed to not_accepting_chats.
   * @param away - away status
   */
  @SupportsType("rtm")
  @SupportsVersion(...AllVersions)
  async setAwayStatus(away: boolean, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("set_away_status", { away }, meta);
  }

  /**
   * Logs the Agent out.
   */
  @SupportsType("rtm")
  @SupportsVersion(...AllVersions)
  async logout(meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("logout", {}, meta);
  }

  /**
   * It returns summaries of the chats an Agent has access to.
   * @param payload - set of filters and pagination to limit returned entries
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async listChats(opts?: ListChatParameters, meta?: RequestOptions<T>): Promise<ListChatsResponse> {
    return this.client.send("list_chats", opts || {}, meta);
  }

  /**
   * Returns threads that the current Agent has access to in a given chat.
   * @param chat_id - chat ID to get threads from
   * @param opts - additional options like pagination and sorting
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async listThreads(
    chat_id: string,
    opts?: ListThreadsParameters,
    meta?: RequestOptions<T>,
  ): Promise<ListThreadsResponse> {
    return this.client.send("list_threads", { chat_id, ...opts }, meta);
  }

  /**
   * It returns a thread that the current Agent has access to in a given chat.
   * @param chat_id - ID of a chat to get
   * @param thread_id - thread ID to get (if not provided, last thread is returned)
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async getChat(chat_id: string, thread_id?: string, meta?: RequestOptions<T>): Promise<GetChatResponse> {
    return this.client.send("get_chat", { chat_id, thread_id }, meta);
  }

  /**
   * It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.
   *
   * The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
   * but each time with a different thread. The returned chat is a complete object, not only a chat summary.
   * @param opts - options like filters or pagination
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async listArchives(opts?: ListArchivesParameters, meta?: RequestOptions<T>): Promise<ListArchivesResponse> {
    return this.client.send("list_archives", opts || {}, meta);
  }

  /**
   * Starts a chat
   * @param opts - options like initial chat data or continuous switch
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async startChat(opts?: StartChatParameters, meta?: RequestOptions<T>): Promise<StartChatResponse> {
    return this.client.send("start_chat", opts || {}, meta);
  }

  /**
   * Restarts an archived chat
   * @param param - either string ID of a chat to activate or full initial chat object
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async resumeChat(param: string | ResumeChatParameters, meta?: RequestOptions<T>): Promise<ResumeChatResponse> {
    let payload = param || {};
    if (typeof param === "string") payload = { chat: { id: param } };
    return this.client.send("resume_chat", payload, meta);
  }

  /**
   * Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.
   * @param id - chat ID to deactivate
   * @param ignore_requester_presence - if true, allows to deactivate the chat even if the requester is not present in the chat
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async deactivateChat(
    id: string,
    ignore_requester_presence?: boolean,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "deactivate_chat",
      {
        id,
        ignore_requester_presence,
      },
      meta,
    );
  }

  /**
   * Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
   * Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.
   * @param id - chat ID to follow
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async followChat(id: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("follow_chat", { id }, meta);
  }

  /**
   * Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
   * will be sent to the requester. Chat members cannot unfollow the chat.
   * @param id - chat ID to unfollow
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async unfollowChat(id: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("unfollow_chat", { id }, meta);
  }

  /**
   * Transfers a chat to an Agent or a group.
   * @param id - chat to transfer
   * @param opts - specific request flags
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async transferChat(id: string, opts?: TransferChatParameters, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("transfer_chat", { id, ...opts }, meta);
  }

  /**
   * Adds a user to the chat. You can't add more than one customer user type to the chat.
   * @param chat_id - chat to add user to
   * @param user_id - user to add
   * @param user_type - customer or agent
   * @param visibility - possible values: all, agents
   * @param ignore_requester_presence - if true, allows to add user to chat even if the requester is not present in the chat
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async addUserToChat(
    chat_id: string,
    user_id: string,
    user_type: string,
    visibility: string,
    ignore_requester_presence?: boolean,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "add_user_to_chat",
      {
        chat_id,
        user_id,
        user_type,
        visibility,
        ignore_requester_presence,
      },
      meta,
    );
  }

  /**
   * Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.
   * @param chat_id - chat to remove user from
   * @param user_id - user to remove
   * @param ignore_requester_presence - if true, allows to remove user from chat even if the requester is not present in the chat
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async removeUserFromChat(
    chat_id: string,
    user_id: string,
    ignore_requester_presence?: boolean,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "remove_user_from_chat",
      {
        chat_id,
        user_id,
        user_type: "agent",
        ignore_requester_presence,
      },
      meta,
    );
  }

  /**
   * Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
   * It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
   * with the present parameter set to false.
   * @param chat_id - chat to send event to
   * @param event - Event object
   * @param attach_to_last_thread - if true, adds event to last inactive thread
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async sendEvent(
    chat_id: string,
    event: Event,
    attach_to_last_thread?: boolean,
    meta?: RequestOptions<T>,
  ): Promise<SendEventResponse> {
    return this.client.send(
      "send_event",
      {
        chat_id,
        event,
        attach_to_last_thread,
      },
      meta,
    );
  }

  /**
   * Sends postback for rich message
   * @param opts - postback data
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async sendRichMessagePostback(
    opts: SendRichMessagePostbackParameters,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send("send_rich_message_postback", opts, meta);
  }

  /**
   * Updates chat properties
   * @param id - chat to update properties
   * @param properties - properties to update
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async updateChatProperties(id: string, properties: Properties, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("update_chat_properties", { id, properties }, meta);
  }

  /**
   * Deletes chat properties
   * @param id - chat to update properties
   * @param properties - properties to update
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async deleteChatProperties(id: string, properties: Properties, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("delete_chat_properties", { id, properties }, meta);
  }

  /**
   * Updates thread properties
   * @param chat_id - chat ID of thread to update
   * @param thread_id - thread to update properties
   * @param properties - properties to update
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async updateThreadProperties(
    chat_id: string,
    thread_id: string,
    properties: Properties,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "update_thread_properties",
      {
        chat_id,
        thread_id,
        properties,
      },
      meta,
    );
  }

  /**
   * Deletes thread properties
   * @param chat_id - chat ID of thread to delete
   * @param thread_id - thread to delete properties
   * @param properties - properties to delete
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async deleteThreadProperties(
    chat_id: string,
    thread_id: string,
    properties: Properties,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "delete_thread_properties",
      {
        chat_id,
        thread_id,
        properties,
      },
      meta,
    );
  }

  /**
   * Updates event properties
   * @param chat_id - chat ID of event to update
   * @param thread_id - thread ID of event to update
   * @param event_id - event to update properties
   * @param properties - properties to update
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async updateEventProperties(
    chat_id: string,
    thread_id: string,
    event_id: string,
    properties: Properties,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "update_event_properties",
      {
        chat_id,
        thread_id,
        event_id,
        properties,
      },
      meta,
    );
  }

  /**
   * Deletes event properties
   * @param chat_id - chat ID of event to delete
   * @param thread_id - thread ID of event to delete
   * @param event_id - event to delete properties
   * @param properties - properties to delete
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async deleteEventProperties(
    chat_id: string,
    thread_id: string,
    event_id: string,
    properties: Properties,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "delete_event_properties",
      {
        chat_id,
        thread_id,
        event_id,
        properties,
      },
      meta,
    );
  }

  /**
   * Tags thread with given tag
   * @param chat_id - chat ID of thread to tag
   * @param thread_id - thread to tag
   * @param tag - tag to add
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async tagThread(chat_id: string, thread_id: string, tag: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("tag_thread", { chat_id, thread_id, tag }, meta);
  }

  /**
   * Removes tag from thread
   * @param chat_id - chat ID of thread to untag
   * @param thread_id - thread to untag
   * @param tag - tag to remove
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async untagThread(chat_id: string, thread_id: string, tag: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("untag_thread", { chat_id, thread_id, tag }, meta);
  }

  /**
   * Returns the info about the Customer with a given id.
   * @param id - customer ID to get
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async getCustomer(id: string, meta?: RequestOptions<T>): Promise<GetCustomerResponse> {
    return this.client.send("get_customer", { id }, meta);
  }

  /**
   * It returns the list of Customers.
   * @param opts - options like filters or pagination
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async listCustomers(opts?: ListCustomersParameters, meta?: RequestOptions<T>): Promise<ListCustomersResponse> {
    return this.client.send("list_customers", opts || {}, meta);
  }

  /**
   * Creates a new Customer user type.
   * @param opts - customer data
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async createCustomer(opts?: CustomerParameters, meta?: RequestOptions<T>): Promise<CreateCustomerResponse> {
    return this.client.send("create_customer", opts || {}, meta);
  }

  /**
   * Updates Customer's properties.
   * @param id - ID of a customer to update
   * @param opts - properties to update
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async updateCustomer(id: string, opts: CustomerParameters, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("update_customer", { id, ...opts }, meta);
  }

  /**
   * Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
   * and does not accept new ones during the ban lifespan.
   * @param id - ID of customer to ban
   * @param days - ban duration in days
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async banCustomer(id: string, days: number, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("ban_customer", { id, ban: { days } }, meta);
  }

  /**
   * Changes the status of an Agent or a Bot Agent.
   * @param status - status to set
   * @param agent_id - ID of agent to update status
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async setRoutingStatus(status: RoutingStatus, agent_id?: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("set_routing_status", { status, agent_id }, meta);
  }

  /**
   * Marks events as seen by Agent.
   * @param chat_id - chat to mark events
   * @param seen_up_to - date up to which mark events
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async markEventsAsSeen(chat_id: string, seen_up_to: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("mark_events_as_seen", { chat_id, seen_up_to }, meta);
  }

  /**
   * Sends typing indicator
   * @param chat_id - chat for typing indicator
   * @param is_typing - status of typing
   * @param visibility - possible values: all, agents
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async sendTypingIndicator(
    chat_id: string,
    is_typing: boolean,
    visibility?: string,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "send_typing_indicator",
      {
        chat_id,
        is_typing,
        visibility,
      },
      meta,
    );
  }

  /**
   * This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
   * For example, it could be used in an app that sends notifications to Agents or Customers,
   * when a certain condition is met (e.g. an important Customer started the chat).
   * @param recipients - who should receive multicast
   * @param content = JSON content to send
   * @param type - message type
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async multicast(
    recipients: MulticastRecipients,
    content: object,
    type?: string,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send("multicast", { recipients, content, type }, meta);
  }

  /**
   * It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
   * - The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
   * - Only chats with Customers are taken into account in total_active_chats.
   * @param chat_id - chat ID you want to transfer
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async listAgentsForTransfer(chat_id: string, meta?: RequestOptions<T>): Promise<AgentForTransfer[]> {
    return this.client.send("list_agents_for_transfer", { chat_id }, meta);
  }

  /**
   * Marks a customer as followed. As a result, the requester (an agent) will receive
   * the info about all the changes related to that customer via pushes.
   * @param id - ID of customer to follow
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async followCustomer(id: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("follow_customer", { id }, meta);
  }

  /**
   * Removes the agent from the list of customer's followers.
   * @param id - ID of customer to unfollow
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async unfollowCustomer(id: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("unfollow_customer", { id }, meta);
  }

  /**
   * Returns the current routing status of each agent.
   * @param group_ids - groups to list agent routing statuses from
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async listRoutingStatuses(group_ids?: number[], meta?: RequestOptions<T>): Promise<SetRoutingStatusResponse[]> {
    return this.client.send("list_routing_statuses", { filters: { group_ids } }, meta);
  }

  /**
   * Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.
   * @param file - path of file to upload or Buffer with content
   * @param filename - filename for uploaded file
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async uploadFile(file: string | Buffer, filename: string, meta?: RequestOptions<T>): Promise<UploadFileResponse> {
    let content = file;
    if (typeof file === "string") content = await fs.readFile(file, "binary");

    const formData = new FormData();
    formData.append("file", content, filename);

    if (this.client instanceof WebClient) {
      return this.client.send("upload_file", formData.getBuffer(), { ...meta, headers: formData.getHeaders() });
    }
    throw new UnsupportedClientType("rtm");
  }
}
