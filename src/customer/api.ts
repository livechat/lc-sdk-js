import FormData from "form-data";
import { promises as fs } from "fs";
import {
  AllVersions,
  RequestClient,
  RequestOptions,
  RtmClient,
  SupportsType,
  SupportsVersion,
  VersionsSince32,
  WebClient,
} from "../clients";
import { UnsupportedClientType } from "../errors";
import { AvailableVersions } from "../internal";
import { Properties, Push } from "../objects";
import {
  CustomerParameters,
  EmptyResponse,
  GetChatResponse,
  GetDynamicConfigurationRequest,
  GetDynamicConfigurationResponse,
  GetFormResponse,
  GetPredictedAgentResponse,
  GetURLInfoResponse,
  GroupConfiguration,
  ListChatParameters,
  ListChatsResponse,
  ListGroupStatusesResponse,
  ListThreadsParameters,
  ListThreadsResponse,
  LoginRequest,
  LoginResponse,
  PushesCustomerAPI,
  ResumeChatParameters,
  ResumeChatResponse,
  SendEventResponse,
  SendRichMessagePostbackParameters,
  StartChatParameters,
  StartChatResponse,
  UploadFileResponse,
} from "./structures";

export class CustomerAPI<T extends "web" | "rtm"> {
  constructor(private readonly client: RequestClient<T>) {}

  /**
   * Allows to subscribe a handler for a given push. Returns function to unsubscribe.
   * Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.
   * @param push - push name to subscribe to
   * @param handler - function receiving push payload
   */
  @SupportsType("rtm")
  on(push: PushesCustomerAPI, handler: (payload: Push["payload"]) => void): () => void {
    if (this.client instanceof RtmClient) {
      return this.client.subscribePush(push, handler);
    }
    throw new UnsupportedClientType("rtm");
  }

  /**
   * It returns the initial state of the current Customer.
   * @param loginData - OAuth token form the Customer's account or full object with login parameters
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
   * It returns summaries of the chats a Customer participated in.
   * @param opts - set of filters and pagination to limit returned entries
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async listChats(opts?: ListChatParameters, meta?: RequestOptions<T>): Promise<ListChatsResponse> {
    return this.client.send("list_chats", opts || {}, meta);
  }

  /**
   * Returns threads that the current Customer has access to in a given chat.
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
   * It returns a thread that the current Customer has access to in a given chat.
   * @param chat_id - ID of a chat to get
   * @param thread_id - thread ID to get (if not provided, last thread is returned)
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async getChat(chat_id: string, thread_id?: string, meta?: RequestOptions<T>): Promise<GetChatResponse> {
    return this.client.send("get_chat", { chat_id, thread_id }, meta);
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
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async deactivateChat(id: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("deactivate_chat", { id }, meta);
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
    return this.client.send("send_rich_message_postback", { ...opts }, meta);
  }

  /**
   * Sends a sneak peek to a chat.
   * @param chat_id - chat to send sneak peek to
   * @param sneak_peek_text - text to sneak peek
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async sendSneakPeek(chat_id: string, sneak_peek_text: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("send_sneak_peek", { chat_id, sneak_peek_text }, meta);
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
   * @param id - chat to delete properties
   * @param properties - properties to delete
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
   * Returns the properties of a given license. It only returns the properties a Customer has access to.
   * @param namespace - property namespace
   * @param name - property name
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async listLicenseProperties(namespace?: string, name?: string, meta?: RequestOptions<T>): Promise<Properties> {
    if (this.client instanceof WebClient) {
      return this.client.send(
        "list_license_properties",
        {
          namespace,
          name,
        },
        { ...meta, method: "GET" },
      );
    }
    throw new UnsupportedClientType("rtm");
  }

  /**
   * Returns the properties of a given group. It only returns the properties a Customer has access to.
   * @param id - ID of group to return properties of
   * @param namespace - property namespace
   * @param name - property name
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async listGroupProperties(
    id: number,
    namespace?: string,
    name?: string,
    meta?: RequestOptions<T>,
  ): Promise<Properties> {
    if (this.client instanceof WebClient) {
      return this.client.send(
        "list_group_properties",
        {
          id,
          namespace,
          name,
        },
        { ...meta, method: "GET" },
      );
    }
    throw new UnsupportedClientType("rtm");
  }

  /**
   * Updates Customer's properties.
   * @param opts - properties to update
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async updateCustomer(opts: CustomerParameters, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("update_customer", opts || {}, meta);
  }

  /**
   * Sets session fields for Customer.
   * @param session_fields - fields to set in form of object enclosed key:value pairs
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async setCustomerSessionFields(session_fields: object[], meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("set_customer_session_fields", { session_fields }, meta);
  }

  /**
   * Returns the info about the Customer requesting it.
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async getCustomer(meta?: RequestOptions<T>): Promise<CustomerParameters> {
    return this.client.send("get_customer", {}, meta);
  }

  /**
   * Lists statuses of groups.
   * @param param - either boolean switch for all groups or list of group ID's to check
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async listGroupStatuses(param: boolean | number[], meta?: RequestOptions<T>): Promise<ListGroupStatusesResponse> {
    const req = typeof param === "boolean" ? { all: param } : { group_ids: param };

    return this.client.send("list_group_statuses", req, meta);
  }

  /**
   * Customer can use this method to trigger checking if goals were achieved.
   * Then, Agents receive the information. You should call this method to provide goals
   * parameters for the server when the customers limit is reached. Works only for offline Customers.
   * @param session_fields - object enclosed key:value pairs
   * @param group_id - group id to check goals in
   * @param page_url - page URL
   */
  @SupportsType("web")
  @SupportsVersion(...AllVersions)
  async checkGoals(
    session_fields: object[],
    group_id: number,
    page_url: number,
    meta?: RequestOptions<T>,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "check_goals",
      {
        session_fields,
        group_id,
        page_url,
      },
      meta,
    );
  }

  /**
   * Returns an empty ticket form of a prechat or postchat survey.
   * @param group_id = group id to get form for
   * @param type - prechat or postchat
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async getForm(group_id: number, type: string, meta?: RequestOptions<T>): Promise<GetFormResponse> {
    return this.client.send("get_form", { group_id, type }, meta);
  }

  /**
   * Gets the predicted Agent - the one the Customer will chat with when the chat starts.
   * To use this method, the Customer needs to be logged in, which can be done via the login method.
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...AllVersions)
  async getPredictedAgent(meta?: RequestOptions<T>): Promise<GetPredictedAgentResponse> {
    return this.client.send("get_predicted_agent", {}, meta);
  }

  /**
   * It returns the info on a given URL.
   * @param url - URL to get info about
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async getURLInfo(url: string, meta?: RequestOptions<T>): Promise<GetURLInfoResponse> {
    return this.client.send("get_url_info", { url }, meta);
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
   * Marks an incoming greeting as seen.
   * @param greeting_id - number representing type of a greeting
   * @param unique_id - specific greeting event ID
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async acceptGreeting(greeting_id: number, unique_id: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("accept_greeting", { greeting_id, unique_id }, meta);
  }

  /**
   * Cancels a greeting (an invitation to the chat).
   * For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.
   * @param unique_id - specific greeting ID
   */
  @SupportsType("web", "rtm")
  @SupportsVersion(...VersionsSince32)
  async cancelGreeting(unique_id: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("cancel_greeting", { unique_id }, meta);
  }

  /**
   * Requests customer to verify email.
   * @param callback_uri - URI to send webhook when customer confirms identity
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async requestEmailVerification(callback_uri: string, meta?: RequestOptions<T>): Promise<EmptyResponse> {
    return this.client.send("request_email_verification", { callback_uri }, meta);
  }

  /**
   * Returns the dynamic configuration of a given group.
   * @param opts - properties used to find matching group
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async getDynamicConfiguration(
    opts?: GetDynamicConfigurationRequest,
    meta?: RequestOptions<T>,
  ): Promise<GetDynamicConfigurationResponse> {
    if (this.client instanceof WebClient) {
      return this.client.send("get_dynamic_configuration", opts || {}, { ...meta, method: "GET" });
    }
    throw new UnsupportedClientType("rtm");
  }

  /**
   * Returns the configuration of a given group in a given version.
   * @param group_id - the ID of group that you want to get configuration for
   * @param version - the version that you want to get a configuration for
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async getConfiguration(group_id: string, version: string, meta?: RequestOptions<T>): Promise<GroupConfiguration> {
    if (this.client instanceof WebClient) {
      return this.client.send(
        "get_configuration",
        {
          group_id,
          version,
        },
        { ...meta, method: "GET" },
      );
    }
    throw new UnsupportedClientType("rtm");
  }

  /**
   * Returns the localization of a given language and group in a given version.
   * @param group_id - the ID of the group that you want to get a localization for
   * @param language - the language that you want to get a localization for
   * @param version - the version that you want to get a localization for
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async getLocalization(
    group_id: string,
    language: string,
    version: string,
    meta?: RequestOptions<T>,
  ): Promise<Record<string, string>> {
    if (this.client instanceof WebClient) {
      return this.client.send(
        "get_localization",
        {
          group_id,
          language,
          version,
        },
        { ...meta, method: "GET" },
      );
    }
    throw new UnsupportedClientType("rtm");
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
