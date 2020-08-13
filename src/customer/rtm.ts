import { RTMAPI } from "../internal";
import type {
  EmptyResponse,
  ListChatParameters,
  ListThreadsParameters,
  ListThreadsResponse,
  ListChatsResponse,
  GetChatResponse,
  StartChatParameters,
  StartChatResponse,
  ActivateChatResponse,
  ActivateChatParameters,
  SendEventResponse,
  SendRichMessagePostbackParameters,
  CustomerParameters,
  ListGroupStatusesResponse,
  GetFormResponse,
  GetPredictedAgentResponse,
  GetURLInfoResponse,
  LoginRequest,
  LoginResponse,
} from "./structures";
import { Properties, Event } from "../objects";

export default class RTM extends RTMAPI {
  constructor(license: number) {
    super("customer", license);
  }

  /**
   * It returns the initial state of the current Customer.
   * @param loginData - OAuth token form the Customer's account or full object with login parameters
   */
  async login(loginData: string | LoginRequest): Promise<LoginResponse> {
    if (typeof loginData === "string") {
      return this.send("login", { token: loginData });
    }
    return this.send("login", loginData);
  }

  /**
   * It returns summaries of the chats a Customer participated in.
   * @param opts - set of filters and pagination to limit returned entries
   */
  async listChats(opts?: ListChatParameters): Promise<ListChatsResponse> {
    return this.send("list_chats", opts || {});
  }

  /**
   * Returns threads that the current Customer has access to in a given chat.
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
   * It returns a thread that the current Customer has access to in a given chat.
   * @param chat_id - ID of a chat to get
   * @param thread_id - thread ID to get (if not provided, last thread is returned)
   */
  async getChat(chat_id: string, thread_id?: string): Promise<GetChatResponse> {
    return this.send("get_chat", { chat_id, thread_id });
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
    return this.send("send_rich_message_postback", { ...opts });
  }

  /**
   * Sends a sneak peek to a chat.
   * @param chat_id - chat to send sneak peek to
   * @param sneak_peek_text - text to sneak peek
   */

  async sendSneakPeek(
    chat_id: string,
    sneak_peek_text: string
  ): Promise<EmptyResponse> {
    return this.send("send_sneak_peek", { chat_id, sneak_peek_text });
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
   * Returns the properties of a given license. It only returns the properties a Customer has access to.
   * @param license_id - ID of license to return properties of
   * @param namespace - property namespace
   * @param name - property name
   */
  async listLicenseProperties(
    license_id: number,
    namespace?: string,
    name?: string
  ): Promise<Properties> {
    return this.send("list_license_properties", {
      license_id,
      namespace,
      name,
    });
  }

  /**
   * Returns the properties of a given group. It only returns the properties a Customer has access to.
   * @param license_id - ID of license to return properties of
   * @param group_id - ID of group to return properties of
   * @param namespace - property namespace
   * @param name - property name
   */
  async listGroupProperties(
    license_id: number,
    group_id: number,
    namespace?: string,
    name?: string
  ): Promise<Properties> {
    return this.send("list_group_properties", {
      license_id,
      group_id,
      namespace,
      name,
    });
  }

  /**
   * Updates Customer's properties.
   * @param opts - properties to update
   */
  async updateCustomer(opts: CustomerParameters): Promise<EmptyResponse> {
    return this.send("update_customer", opts || {});
  }

  /**
   * Sets session fields for Customer.
   * @param session_fields - fields to set in form of object enclosed key:value pairs
   */
  async setCustomerSessionFields(
    session_fields: object[]
  ): Promise<EmptyResponse> {
    return this.send("set_customer_session_fields", { session_fields });
  }

  /**
   * Returns the info about the Customer requesting it.
   */
  async getCustomer(): Promise<CustomerParameters> {
    return this.send("get_customer", {});
  }

  /**
   * Lists statuses of groups.
   * @param param - either boolean switch for all groups or list of group ID's to check
   */
  async listGroupStatuses(
    param: boolean | number[]
  ): Promise<ListGroupStatusesResponse> {
    const req =
      typeof param === "boolean" ? { all: param } : { group_ids: param };

    return this.send("list_group_statuses", req);
  }

  /**
   * Customer can use this method to trigger checking if goals were achieved.
   * Then, Agents receive the information. You should call this method to provide goals
   * parameters for the server when the customers limit is reached. Works only for offline Customers.
   * @param session_fields - object enclosed key:value pairs
   * @param group_id - group id to check goals in
   * @param page_url - page URL
   */
  async checkGoals(
    session_fields: object[],
    group_id: number,
    page_url: number
  ): Promise<EmptyResponse> {
    return this.send("check_goals", {
      session_fields,
      group_id,
      page_url,
    });
  }
  /**
   * Returns an empty ticket form of a prechat or postchat survey.
   * @param group_id = group id to get form for
   * @param type - prechat or postchat
   */
  async getForm(group_id: number, type: string): Promise<GetFormResponse> {
    return this.send("get_form", { group_id, type });
  }

  /**
   * Gets the predicted Agent - the one the Customer will chat with when the chat starts.
   * To use this method, the Customer needs to be logged in, which can be done via the login method.
   */
  async getPredictedAgent(): Promise<GetPredictedAgentResponse> {
    return this.send("get_predicted_agent", {});
  }

  /**
   * It returns the info on a given URL.
   * @param url - URL to get info about
   */
  async getURLInfo(url: string): Promise<GetURLInfoResponse> {
    return this.send("get_url_info", { url });
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
   * Marks an incoming greeting as seen.
   * @param greeting_id - number representing type of a greeting
   * @param unique_id - specific greeting event ID
   */
  async acceptGreeting(
    greeting_id: number,
    unique_id: string
  ): Promise<EmptyResponse> {
    return this.send("accept_greeting", { greeting_id, unique_id });
  }

  /**
   * Cancels a greeting (an invitation to the chat).
   * For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.
   * @param unique_id - specific greeting ID
   */
  async cancelGreeting(unique_id: string): Promise<EmptyResponse> {
    return this.send("cancel_greeting", { unique_id });
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
   * Informs that a Customer updated the data stored on their side.
   * @param cb - callback
   */
  subscribeCustomerSideStorageUpdated(cb: Function) {
	  this.subscribePush('customer_side_storage_updated', cb);
  }

  /**
   * Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.
   * @param cb - callback
   */
  subscribeCustomerDisconnected(cb: Function) {
	  this.subscribePush('customer_disconnected', cb);
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
 * Informs about an incoming greeting.
 * @param cb - callback
 */
  subscribeIncomingGreeting(cb: Function) {
	  this.subscribePush('incoming_greeting', cb);
  }

  /**
   * Informs about a greeting accepted by the Customer.
   * @param cb - callback
   */
  subscribeGreetingAccepted(cb: Function) {
	  this.subscribePush('greeting_accepted', cb);
  }

  /**
   * Informs about a greeting rejected by the Customer.
   * Also, the push is sent when a new greeting automatically cancels the currently displayed one.
   * @param cb - callback
   */
  subscribeGreetingCancelled(cb: Function) {
	  this.subscribePush('greeting_cancelled', cb);
  }

  /**
   * Informs about an updated position in the queue and about the wait time.
   * @param cb - callback
   */
  subscribeQueuePostitionUpdated(cb: Function) {
    this.subscribePush("queue_postition_updated", cb);
  }
}
