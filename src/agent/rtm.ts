import type {
  AgentForTransfer,
  ChangePushNotificationsRequest,
  ChatAccess,
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
  Properties,
  Push,
  Pushes,
  RequestEvent,
  ResumeChatParameters,
  ResumeChatResponse,
  RoutingStatus,
  RTMAPIOptions,
  SendEventResponse,
  SendRichMessagePostbackParameters,
  SetRoutingStatusResponse,
  StartChatParameters,
  StartChatResponse,
  TransferChatParameters,
} from "./structures";
import { RTMAPI } from "../internal";

export default class RTM extends RTMAPI {
  constructor(options?: RTMAPIOptions) {
    super("agent", undefined, options);
  }

  /**
   * Allows to subscribe a handler for a given push. Returns function to unsubscribe.
   * Note: multiple subscriptions for the same push are not allowed in single websocket connection.
   * @param push - push name to subscribe to
   * @param handler - function receiving push payload
   */
  on(push: Pushes, handler: (payload: Push) => void): () => void {
    this.subscribePush(push, handler);
    return this.unsubscribePush.bind(this, push);
  }

  /**
   * It returns the initial state of the current Agent.
   * @param loginData - OAuth token from Agent's account or full object with login options
   */
  async login(loginData: string | LoginRequest): Promise<LoginResponse> {
    if (typeof loginData === "string") {
      return this.send("login", { token: loginData });
    }
    return this.send("login", loginData);
  }

  /**
   * Change the firebase push notifications properties.
   * @param change - properties to change
   */
  async changePushNotifications(change: ChangePushNotificationsRequest): Promise<EmptyResponse> {
    return this.send("change_push_notifications", change);
  }

  /**
   * Sets an Agent's connection to the away state. You can use this method to manipulate the Agent's status.
   * The method works per connection - all connections an Agent has (desktop, mobile, etc) must be in the away state
   * for the Agent's status to be changed to not_accepting_chats.
   * @param away - away status
   */
  async setAwayStatus(away: boolean): Promise<EmptyResponse> {
    return this.send("set_away_status", { away });
  }

  /**
   * Logs the Agent out.
   */
  async logout(): Promise<EmptyResponse> {
    return this.send("logout", {});
  }

  /**
   * It returns summaries of the chats an Agent has access to.
   * @param opts - set of filters and pagination to limit returned entries
   */
  async listChats(opts?: ListChatParameters): Promise<ListChatsResponse> {
    return this.send("list_chats", opts || {});
  }

  /**
   * Returns threads that the current Agent has access to in a given chat.
   * @param chat_id - chat ID to get threads from
   * @param opts - additional options like pagination and sorting
   */
  async listThreads(chat_id: string, opts?: ListThreadsParameters): Promise<ListThreadsResponse> {
    return this.send("list_threads", { chat_id, ...opts });
  }

  /**
   * It returns a thread that the current Agent has access to in a given chat.
   * @param chat_id - ID of a chat to get
   * @param thread_id - thread ID to get (if not provided, last thread is returned)
   */
  async getChat(chat_id: string, thread_id?: string): Promise<GetChatResponse> {
    return this.send("get_chat", { chat_id, thread_id });
  }

  /**
   * It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.
   *
   * The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
   * but each time with a different thread. The returned chat is a complete object, not only a chat summary.
   * @param opts - options like filters or pagination
   */
  async listArchives(opts?: ListArchivesParameters): Promise<ListArchivesResponse> {
    return this.send("list_archives", opts || {});
  }

  /**
   * Starts a chat
   * @param opts - options like initial chat data or continuous switch
   */
  async startChat(opts?: StartChatParameters): Promise<StartChatResponse> {
    return this.send("start_chat", opts || {});
  }

  /**
   * Restarts an archived chat
   * @param param - either string ID of a chat to activate or full initial chat object
   */
  async resumeChat(param: string | ResumeChatParameters): Promise<ResumeChatResponse> {
    if (typeof param === "string") return this.send("resume_chat", { chat: { id: param } });
    return this.send("resume_chat", param || {});
  }

  /**
   * Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.
   * @param id - chat ID to deactivate
   */
  async deactivateChat(id: string): Promise<EmptyResponse> {
    return this.send("deactivate_chat", { id });
  }

  /**
   * Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
   * Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.
   * @param id - chat ID to follow
   */
  async followChat(id: string): Promise<EmptyResponse> {
    return this.send("follow_chat", { id });
  }

  /**
   * Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
   * will be sent to the requester. Chat members cannot unfollow the chat.
   * @param id - chat ID to unfollow
   */
  async unfollowChat(id: string): Promise<EmptyResponse> {
    return this.send("unfollow_chat", { id });
  }

  /**
   * Grants access to a new chat without overwriting the existing ones.
   * @param chat_id - chat ID to grant access to
   * @param access - access to grant
   */
  async grantChatAccess(chat_id: string, access: ChatAccess): Promise<EmptyResponse> {
    return this.send("grant_chat_access", { chat_id, access });
  }

  /**
   * Revokes access to chat
   * @param chat_id - chat ID to grant access to
   * @param access - access to revoke
   */
  async revokeChatAccess(chat_id: string, access: ChatAccess): Promise<EmptyResponse> {
    return this.send("revoke_chat_access", { chat_id, access });
  }

  /**
   * Transfers a chat to an Agent or a group.
   * @param id - chat to transfer
   * @param opts - specific target or force flag
   */
  async transferChat(id: string, opts?: TransferChatParameters): Promise<EmptyResponse> {
    return this.send("transfer_chat", { id, ...opts });
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
    require_active_thread?: boolean,
  ): Promise<EmptyResponse> {
    return this.send("add_user_to_chat", {
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
  async removeUserFromChat(chat_id: string, user_id: string): Promise<EmptyResponse> {
    return this.send("remove_user_from_chat", {
      chat_id,
      user_id,
      user_type: "agent",
    });
  }

  /**
   * Sends an Event object. Use this method to send a message by specifying the Message event type in the request.
   * It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
   * with the present parameter set to false.
   * @param chat_id - chat to send event to
   * @param event - Event request object
   * @param attach_to_last_thread - if true, adds event to last inactive thread
   */
  async sendEvent(chat_id: string, event: RequestEvent, attach_to_last_thread?: boolean): Promise<SendEventResponse> {
    return this.send("send_event", {
      chat_id,
      event,
      attach_to_last_thread,
    });
  }

  /**
   * Sends postback for rich message
   * @param opts - postback data
   */
  async sendRichMessagePostback(opts: SendRichMessagePostbackParameters): Promise<EmptyResponse> {
    return this.send("send_rich_message_postback", opts);
  }

  /**
   * Updates chat properties
   * @param id - chat to update properties
   * @param properties - properties to update
   */
  async updateChatProperties(id: string, properties: Properties): Promise<EmptyResponse> {
    return this.send("update_chat_properties", { id, properties });
  }

  /**
   * Deletes chat properties
   * @param id - chat to delete properties
   * @param properties - properties to delete
   */
  async deleteChatProperties(id: string, properties: Properties): Promise<EmptyResponse> {
    return this.send("delete_chat_properties", { id, properties });
  }

  /**
   * Updates thread properties
   * @param chat_id - chat ID of thread to update
   * @param thread_id - thread to update properties
   * @param properties - properties to update
   */
  async updateThreadProperties(chat_id: string, thread_id: string, properties: Properties): Promise<EmptyResponse> {
    return this.send("update_thread_properties", {
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
  async deleteThreadProperties(chat_id: string, thread_id: string, properties: Properties): Promise<EmptyResponse> {
    return this.send("delete_thread_properties", {
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
    properties: Properties,
  ): Promise<EmptyResponse> {
    return this.send("update_event_properties", {
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
    properties: Properties,
  ): Promise<EmptyResponse> {
    return this.send("delete_event_properties", {
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
  async tagThread(chat_id: string, thread_id: string, tag: string): Promise<EmptyResponse> {
    return this.send("tag_thread", { chat_id, thread_id, tag });
  }

  /**
   * Removes tag from thread
   * @param chat_id - chat ID of thread to untag
   * @param thread_id - thread to untag
   * @param tag - tag to remove
   */
  async untagThread(chat_id: string, thread_id: string, tag: string): Promise<EmptyResponse> {
    return this.send("untag_thread", { chat_id, thread_id, tag });
  }

  /**
   * Returns the info about the Customer with a given id.
   * @param id - customer ID to get
   */
  async getCustomer(id: string): Promise<GetCustomerResponse> {
    return this.send("get_customer", { id });
  }

  /**
   * It returns the list of Customers.
   * @param opts - options like filters or pagination
   */
  async listCustomers(opts?: ListCustomersParameters): Promise<ListCustomersResponse> {
    return this.send("list_customers", opts || {});
  }

  /**
   * Creates a new Customer user type.
   * @param opts - customer data
   */
  async createCustomer(opts?: CustomerParameters): Promise<CreateCustomerResponse> {
    return this.send("create_customer", opts || {});
  }

  /**
   * Updates Customer's properties.
   * @param id - ID of a customer to update
   * @param opts - properties to update
   */
  async updateCustomer(id: string, opts: CustomerParameters): Promise<EmptyResponse> {
    return this.send("update_customer", { id, ...opts });
  }

  /**
   * Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
   * and does not accept new ones during the ban lifespan.
   * @param id - ID of customer to ban
   * @param days - ban duration in days
   */
  async banCustomer(id: string, days: number): Promise<EmptyResponse> {
    return this.send("ban_customer", { id, ban: { days } });
  }

  /**
   * Changes the status of an Agent or a Bot Agent.
   * @param status - status to set
   * @param agent_id - ID of agent to update status
   */
  async setRoutingStatus(status: RoutingStatus, agent_id?: string): Promise<EmptyResponse> {
    return this.send("set_routing_status", { status, agent_id });
  }

  /**
   * Marks events as seen by Agent.
   * @param chat_id - chat to mark events
   * @param seen_up_to - date up to which mark events
   */
  async markEventsAsSeen(chat_id: string, seen_up_to: string): Promise<EmptyResponse> {
    return this.send("mark_events_as_seen", { chat_id, seen_up_to });
  }

  /**
   * Sends typing indicator
   * @param chat_id - chat for typing indicator
   * @param is_typing - status of typing
   * @param recipients - possible values: all, agents
   */
  async sendTypingIndicator(chat_id: string, is_typing: boolean, recipients?: string): Promise<EmptyResponse> {
    return this.send("send_typing_indicator", {
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
  async multicast(recipients: MulticastRecipients, content: object, type?: string): Promise<EmptyResponse> {
    return this.send("multicast", { recipients, content, type });
  }

  /**
   * It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
   * - The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
   * - Only chats with Customers are taken into account in total_active_chats.
   * @param chat_id - chat ID you want to transfer
   */
  async listAgentsForTransfer(chat_id: string): Promise<AgentForTransfer[]> {
    return this.send("list_agents_for_transfer", { chat_id });
  }

  /**
   * Marks a customer as followed. As a result, the requester (an agent) will receive
   * the info about all the changes related to that customer via pushes.
   * @param id - ID of customer to follow
   */
  async followCustomer(id: string): Promise<EmptyResponse> {
    return this.send("follow_customer", { id });
  }

  /**
   * Removes the agent from the list of customer's followers.
   * @param id - ID of customer to unfollow
   */
  async unfollowCustomer(id: string): Promise<EmptyResponse> {
    return this.send("unfollow_customer", { id });
  }

  /**
   * Returns the current routing status of each agent.
   * @param group_ids - groups to list agent routing statuses from
   */
  async listRoutingStatuses(group_ids?: number[]): Promise<SetRoutingStatusResponse[]> {
    return this.send("list_routing_statuses", { filters: { group_ids } });
  }
}
