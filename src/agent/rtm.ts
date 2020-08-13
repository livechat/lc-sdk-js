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
  LoginResponse,
  ChangePushNotificationsRequest,
  LoginRequest,
} from "./structures";
import { ChatAccess, Event, Properties, RoutingStatus } from "../objects";
import { RTMAPI } from "../internal/index";

export default class RTM extends RTMAPI {
  constructor() {
    super("agent");
  }
  /**
   * It returns the initial state of the current Agent.
   * @param loginData - OAtuh token from Agent's account or full object with login options
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
  async changePushNotifications(
    change: ChangePushNotificationsRequest
  ): Promise<EmptyResponse> {
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
  async listThreads(
    chat_id: string,
    opts?: ListThreadsParameters
  ): Promise<ListThreadsResponse> {
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
  async listArchives(
    opts?: ListArchivesParameters
  ): Promise<ListArchivesResponse> {
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
  async activateChat(
    param: string | ActivateChatParameters
  ): Promise<ActivateChatResponse> {
    if (typeof param === "string")
      return this.send("activate_chat", { chat: { id: param } });
    return this.send("activate_chat", param || {});
  }

  /**
   * Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.
   * @param chat_id - chat ID to deactivate
   */
  async deactivateChat(chat_id: string): Promise<EmptyResponse> {
    return this.send("deactivate_chat", { chat_id });
  }

  /**
   * Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
   * Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.
   * @param chat_id - chat ID to follow
   */
  async followChat(chat_id: string): Promise<EmptyResponse> {
    return this.send("follow_chat", { chat_id });
  }

  /**
   * Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
   * will be sent to the requester. Chat members cannot unfollow the chat.
   * @param chat_id - chat ID to unfollow
   */
  async unfollowChat(chat_id: string): Promise<EmptyResponse> {
    return this.send("unfollow_chat", { chat_id });
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
    return this.send("grant_chat_access", { chat_id, access });
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
    return this.send("revoke_chat_access", { chat_id, access });
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
    return this.send("set_chat_access", { chat_id, access });
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
    return this.send("transfer_chat", { chat_id, ...opts });
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
  async removeUserFromChat(
    chat_id: string,
    user_id: string
  ): Promise<EmptyResponse> {
    return this.send("remove_user_from_chat", {
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
  async sendRichMessagePostback(
    opts: SendRichMessagePostbackParameters
  ): Promise<EmptyResponse> {
    return this.send("send_rich_message_postback", opts);
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
    return this.send("update_chat_properties", { chat_id, properties });
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
    return this.send("delete_chat_properties", { chat_id, properties });
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
  async deleteThreadProperties(
    chat_id: string,
    thread_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
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
    properties: Properties
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
    properties: Properties
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
  async tagThread(
    chat_id: string,
    thread_id: string,
    tag: string
  ): Promise<EmptyResponse> {
    return this.send("tag_thread", { chat_id, thread_id, tag });
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
    return this.send("untag_thread", { chat_id, thread_id, tag });
  }

  /**
   * Returns the info about the Customer with a given customer_id.
   * @param customer_id - customer ID to teg
   */
  async getCustomer(customer_id: string): Promise<GetCustomerResponse> {
    return this.send("get_customer", { customer_id });
  }

  /**
   * It returns the list of Customers.
   * @param opts - options like filters or pagination
   */
  async listCustomers(
    opts?: ListCustomersParameters
  ): Promise<ListCustomersResponse> {
    return this.send("list_customers", opts || {});
  }

  /**
   * Creates a new Customer user type.
   * @param opts - customer data
   */
  async createCustomer(
    opts?: CustomerParameters
  ): Promise<CreateCustomerResponse> {
    return this.send("create_customer", opts || {});
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
    return this.send("update_customer", { customer_id, ...opts });
  }

  /**
   * Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
   * and does not accept new ones during the ban lifespan.
   * @param customer_id = ID of customer to ban
   * @param days - ban duration in days
   */
  async banCustomer(customer_id: string, days: number): Promise<EmptyResponse> {
    return this.send("ban_customer", { customer_id, ban: { days } });
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
    return this.send("set_routing_status", { status, agent_id });
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
    return this.send("mark_events_as_seen", { chat_id, seen_up_to });
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
  async multicast(
    recipients: MulticastRecipients,
    content: object,
    type?: string
  ): Promise<EmptyResponse> {
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
   * Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
   * If the chat was started with some initial events, the thread object contains them.
   * @param cb - callback
   */
  subscribeIncomingChat(cb: Function) {
    this.subscribePush("incoming_chat", cb);
  }

  /**
   * Informs that a chat was deactivated by closing the currently open thread.
   * @param cb - callback
   */
  subscribeChatDeactivated(cb: Function) {
    this.subscribePush("chat_deactivated", cb);
  }

  /**
   * Informs that new, single access to a chat was granted. The existing access isn't overwritten.
   * @param cb - callback
   */
  subscribeChatAccessGranted(cb: Function) {
    this.subscribePush("chat_access_granted", cb);
  }

  /**
   * Informs that access to a certain chat was revoked.
   * @param cb - callback
   */
  subscribeChatAccessRevoked(cb: Function) {
    this.subscribePush("chat_access_revoked", cb);
  }

  /**
   * Informs that a chat was transferred to a different group or to an Agent.
   * @param cb - callback
   */
  subscribeChatTransferred(cb: Function) {
    this.subscribePush("chat_transferred", cb);
  }

  /**
   * Informs that a user (Customer or Agent) was added to a chat.
   * This push can be emitted with user.present set to false when a user writes to a chat without joining it
   * You can achieve that via the Send Event method.
   * @param cb - callback
   */
  subscribeUserAddedToChat(cb: Function) {
    this.subscribePush("user_added_to_chat", cb);
  }

  /**
   * Informs that a user (Customer or Agent) was removed from a chat.
   * @param cb - callback
   */
  subscribeUserRemovedFromChat(cb: Function) {
    this.subscribePush("user_removed_from_chat", cb);
  }

  /**
   * Informs about an incoming event sent to a chat.
   * @param cb - callback
   */
  subscribeIncomingEvent(cb: Function) {
    this.subscribePush("incoming_event", cb);
  }

  /**
   * Informs that an event was updated.
   * @param cb - callback
   */
  subscribeEventUpdated(cb: Function) {
    this.subscribePush("event_updated", cb);
  }

  /**
   * Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
   * as well as the chat it was sent in.
   * @param cb - callback
   */
  subscribeIncomingRichMessagePostback(cb: Function) {
    this.subscribePush("incoming_rich_message_postback", cb);
  }

  /**
   * Informs about those chat properties that were updated.
   * @param cb - callback
   */
  subscribeChatPropertiesUpdated(cb: Function) {
    this.subscribePush("chat_properties_updated", cb);
  }

  /**
   * Informs about those chat properties that were deleted.
   * @param cb - callback
   */
  subscribeChatPropertiesDeleted(cb: Function) {
    this.subscribePush("chat_properties_deleted", cb);
  }

  /**
   * Informs about those thread properties that were updated.
   * @param cb - callback
   */
  subscribeThreadPropertiesUpdated(cb: Function) {
    this.subscribePush("thread_properties_updated", cb);
  }

  /**
   * Informs about those thread properties that were deleted.
   * @param cb - callback
   */
  subscribeThreadPropertiesDeleted(cb: Function) {
    this.subscribePush("thread_properties_deleted", cb);
  }

  /**
   * Informs about those event properties that were updated.
   * @param cb - callback
   */
  subscribeEventPropertiesUpdated(cb: Function) {
    this.subscribePush("event_properties_updated", cb);
  }

  /**
   * Informs about those event properties that were deleted.
   * @param cb - callback
   */
  subscribeEventPropertiesDeleted(cb: Function) {
    this.subscribePush("event_properties_deleted", cb);
  }

  /**
   * Informs that a chat thread was tagged.
   * @param cb - callback
   */
  subscribeThreadTagged(cb: Function) {
    this.subscribePush("thread_tagged", cb);
  }

  /**
   * Informs that a chat thread was untagged.
   * @param cb - callback
   */
  subscribeThreadUntagged(cb: Function) {
    this.subscribePush("thread_untagged", cb);
  }

  /**
   * Informs that a Customer entered the tracked website.
   * @param cb - callback
   */
  subscribeCustomerVisitStarted(cb: Function) {
    this.subscribePush("customer_visit_started", cb);
  }

  /**
   * Informs that a new Customer registered.
   * @param cb - callback
   */
  subscribeCustomerCreated(cb: Function) {
    this.subscribePush("customer_created", cb);
  }

  /**
   * Informs that Customer's data was updated.
   * @param cb - callback
   */
  subscribeCustomerUpdated(cb: Function) {
    this.subscribePush("customer_updated", cb);
  }

  /**
   * Informs that a Customer moved to another page of the website.
   * @param cb - callback
   */
  subscribeCustomerPageUpdated(cb: Function) {
    this.subscribePush("customer_page_updated", cb);
  }

  /**
   * Informs that a Customer was banned for a specified number of days.
   * @param cb - callback
   */
  subscribeCustomerBanned(cb: Function) {
    this.subscribePush("customer_banned", cb);
  }

  /**
   * Informs that a Customer left the tracked website.
   * @param cb - callback
   */
  subscribeCustomerVisitEnded(cb: Function) {
    this.subscribePush("customer_visit_ended", cb);
  }

  /**
   * Informs that an Agent's or Bot Agent's status was changed.
   * @param cb - callback
   */
  subscribeRoutingStatusSet(cb: Function) {
    this.subscribePush("routing_status_set", cb);
  }

  /**
   * Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.
   * @param cb - callback
   */
  subscribeAgentDisconnected(cb: Function) {
    this.subscribePush("agent_disconnected", cb);
  }

/**
 * Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
 * The push payload contains the typing indicator object.
 * @param cb - callback
 */
  subscribeIncomingTypingIndicator(cb: Function) {
    this.subscribePush("incoming_typing_indicator", cb);
  }

  /**
   * Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.
   * @param cb - callback
   */
  subscribeIncomingSneakPeek(cb: Function) {
    this.subscribePush("incoming_sneak_peek", cb);
  }

  /**
   * Informs that a user has seen events up to a specific time.
   * @param cb - callback
   */
  subscribeEventsMarkedAsSeen(cb: Function) {
    this.subscribePush("events_marked_as_seen", cb);
  }

  /**
   * Informs about messages sent via the multicast method or by the system.
   * @param cb - callback
   */
  subscribeIncomingMulticast(cb: Function) {
    this.subscribePush("incoming_multicast", cb);
  }

  /**
   * Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
   * where one app/integration needs to know that another one unfollowed the chat.
   * @param cb - callback
   */
  subscribeChatUnfollowed(cb: Function) {
    this.subscribePush("chat_unfollowed", cb);
  }

  /**
   * New positions and wait times for queued chats.
   * @param cb - callback
   */
  subscribeQueuePostitionsUpdated(cb: Function) {
    this.subscribePush("queue_postitions_updated", cb);
  }
}
