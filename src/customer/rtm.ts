import { RTMAPI } from "../internal";
import type {
  CustomerParameters,
  EmptyResponse,
  GetChatResponse,
  GetFormResponse,
  GetPredictedAgentResponse,
  GetURLInfoResponse,
  ListChatParameters,
  ListChatsResponse,
  ListGroupStatusesResponse,
  ListThreadsParameters,
  ListThreadsResponse,
  LoginRequest,
  LoginResponse,
  Properties,
  Push,
  Pushes,
  RequestEvent,
  ResumeChatParameters,
  ResumeChatResponse,
  RTMAPIOptions,
  SendEventResponse,
  SendRichMessagePostbackParameters,
  StartChatParameters,
  StartChatResponse,
} from "./structures";

export default class RTM extends RTMAPI {
  constructor(license: number, options?: RTMAPIOptions) {
    super("customer", license, options);
  }

  /**
   * Allows to subscribe a handler for a given push. Returns function to unsubscribe.
   * Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.
   * @param push - push name to subscribe to
   * @param handler - function receiving push payload
   */
  on(push: Pushes, handler: (payload: Push) => void): () => void {
    this.subscribePush(push, handler);
    return this.unsubscribePush.bind(this, push);
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
  async listThreads(chat_id: string, opts?: ListThreadsParameters): Promise<ListThreadsResponse> {
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
   * Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
   * It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
   * with the present parameter set to false.
   * @param chat_id - chat to send event to
   * @param event - Event object limited to request fields only
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
    return this.send("send_rich_message_postback", { ...opts });
  }

  /**
   * Sends a sneak peek to a chat.
   * @param chat_id - chat to send sneak peek to
   * @param sneak_peek_text - text to sneak peek
   */

  async sendSneakPeek(chat_id: string, sneak_peek_text: string): Promise<EmptyResponse> {
    return this.send("send_sneak_peek", { chat_id, sneak_peek_text });
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
   * Returns the properties of a given license. It only returns the properties a Customer has access to.
   * @param namespace - property namespace
   * @param name - property name
   */
  async listLicenseProperties(namespace?: string, name?: string): Promise<Properties> {
    return this.send("list_license_properties", {
      namespace,
      name,
    });
  }

  /**
   * Returns the properties of a given group. It only returns the properties a Customer has access to.
   * @param id - ID of group to return properties of
   * @param namespace - property namespace
   * @param name - property name
   */
  async listGroupProperties(id: number, namespace?: string, name?: string): Promise<Properties> {
    return this.send("list_group_properties", {
      id,
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
  async setCustomerSessionFields(session_fields: object[]): Promise<EmptyResponse> {
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
  async listGroupStatuses(param: boolean | number[]): Promise<ListGroupStatusesResponse> {
    const req = typeof param === "boolean" ? { all: param } : { group_ids: param };

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
  async checkGoals(session_fields: object[], group_id: number, page_url: number): Promise<EmptyResponse> {
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
  async markEventsAsSeen(chat_id: string, seen_up_to: string): Promise<EmptyResponse> {
    return this.send("mark_events_as_seen", { chat_id, seen_up_to });
  }

  /**
   * Marks an incoming greeting as seen.
   * @param greeting_id - number representing type of a greeting
   * @param unique_id - specific greeting event ID
   */
  async acceptGreeting(greeting_id: number, unique_id: string): Promise<EmptyResponse> {
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
}
