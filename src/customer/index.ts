import { WebAPI, APIError } from "../internal";
import { TokenGetter } from "../authorization";
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
} from "./structures";
import { Properties } from "../objects";

export class CustomerAPI extends WebAPI {
  constructor(clientID: string, tokenGetter: TokenGetter) {
    super(clientID, "customer", tokenGetter);
  }

  async listChats(opts?: ListChatParameters): Promise<ListChatsResponse> {
    return this.handleAction("list_chats", opts || {});
  }

  async listThreads(
    chat_id: string,
    opts?: ListThreadsParameters
  ): Promise<ListThreadsResponse> {
    return this.handleAction("list_threads", { chat_id, ...opts });
  }

  async getChat(chat_id: string, thread_id?: string): Promise<GetChatResponse> {
    return this.handleAction("get_chat", { chat_id, thread_id });
  }

  async startChat(opts?: StartChatParameters): Promise<StartChatResponse> {
    return this.handleAction("start_chat", opts || {});
  }

  async activateChat(id: string): Promise<ActivateChatResponse>;
  async activateChat(
    req: ActivateChatParameters
  ): Promise<ActivateChatResponse>;
  async activateChat(param: any): Promise<ActivateChatResponse> {
    if (typeof param === "string")
      return this.handleAction("activate_chat", { chat: { id: param } });
    return this.handleAction("activate_chat", param || {});
  }

  async deactivateChat(chat_id: string): Promise<EmptyResponse> {
    return this.handleAction("deactivate_chat", { chat_id });
  }

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

  async uploadFile() {}

  async sendRichMessagePostback(
    opts: SendRichMessagePostbackParameters
  ): Promise<EmptyResponse> {
    return this.handleAction("send_rich_message_postback", { ...opts });
  }

  async sendSneakPeek(
    chat_id: string,
    sneak_peek_text: string
  ): Promise<EmptyResponse> {
    return this.handleAction("send_sneak_peek", { chat_id, sneak_peek_text });
  }

  async updateChatProperties(
    chat_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_chat_properties", { chat_id, properties });
  }

  async deleteChatProperties(
    chat_id: string,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_chat_properties", { chat_id, properties });
  }

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

  async listLicenseProperties(
    license_id: number,
    namespace?: string,
    name?: string
  ): Promise<Properties> {
    return this.handleAction("list_license_properties", {
      license_id,
      namespace,
      name,
    });
  }

  async listGroupProperties(
    license_id: number,
    namespace?: string,
    name?: string
  ): Promise<Properties> {
    return this.handleAction("list_group_properties", {
      license_id,
      namespace,
      name,
    });
  }

  async updateCustomer(opts: CustomerParameters): Promise<EmptyResponse> {
    return this.handleAction("update_customer", opts || {});
  }

  async setCustomerSessionFields(
    session_fields: object[]
  ): Promise<EmptyResponse> {
    return this.handleAction("set_customer_session_fields", { session_fields });
  }

  async getCustomer(): Promise<CustomerParameters> {
    return this.handleAction("get_customer", {});
  }

  async listGroupStatuses(all: boolean): Promise<ListGroupStatusesResponse>;
  async listGroupStatuses(
    group_ids: number[]
  ): Promise<ListGroupStatusesResponse>;
  async listGroupStatuses(param: any): Promise<ListGroupStatusesResponse> {
    let req =
      typeof param === "boolean" ? { all: param } : { group_ids: param };

    return this.handleAction("list_group_statuses", req);
  }

  async checkGoals(
    session_fields: object[],
    group_id: number,
    page_url: number
  ): Promise<EmptyResponse> {
    return this.handleAction("check_goals", {
      session_fields,
      group_id,
      page_url,
    });
  }

  async getForm(group_id: number, type: string): Promise<GetFormResponse> {
    return this.handleAction("get_form", { group_id, type });
  }

  async getPredictedAgent(): Promise<GetPredictedAgentResponse> {
    return this.handleAction("get_predicted_agent", {});
  }

  async getURLInfo(url: string): Promise<GetURLInfoResponse> {
    return this.handleAction("get_url_info", { url });
  }

  async markEventsAsSeen(
    chat_id: string,
    seen_up_to: string
  ): Promise<EmptyResponse> {
    return this.handleAction("mark_events_as_seen", { chat_id, seen_up_to });
  }

  async acceptGreeting(
    greeting_id: number,
    unique_id: string
  ): Promise<EmptyResponse> {
    return this.handleAction("accept_greeting", { greeting_id, unique_id });
  }

  async cancelGreeting(unique_id: string): Promise<EmptyResponse> {
    return this.handleAction("cancel_greeting", { unique_id });
  }
}
