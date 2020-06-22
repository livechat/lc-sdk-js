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
} from "./structures";
import { ChatAccess, Event, Properties, RoutingStatus } from "../objects";

export class AgentAPI extends WebAPI {
  constructor(clientID: string, tokenGetter: TokenGetter) {
    super(clientID, "agent", tokenGetter);
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

  async getChat(chat_id: string, thread_id?: string): Promise<GetChatResponse> {
    return this.handleAction("get_chat", { chat_id, thread_id });
  }

  async listArchives(
    opts?: ListArchivesParameters
  ): Promise<ListArchivesResponse> {
    return this.handleAction("list_archives", opts || {});
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

  async followChat(chat_id: string): Promise<EmptyResponse> {
    return this.handleAction("follow_chat", { chat_id });
  }

  async unfollowChat(chat_id: string): Promise<EmptyResponse> {
    return this.handleAction("unfollow_chat", { chat_id });
  }

  async grantChatAccess(
    chat_id: string,
    access: ChatAccess
  ): Promise<EmptyResponse> {
    return this.handleAction("grant_chat_access", { chat_id, access });
  }

  async revokeChatAccess(
    chat_id: string,
    access: ChatAccess
  ): Promise<EmptyResponse> {
    return this.handleAction("revoke_chat_access", { chat_id, access });
  }

  async setChatAccess(
    chat_id: string,
    access: ChatAccess
  ): Promise<EmptyResponse> {
    return this.handleAction("set_chat_access", { chat_id, access });
  }

  async transferChat(
    chat_id: string,
    opts?: TransferChatParameters
  ): Promise<EmptyResponse> {
    return this.handleAction("transfer_chat", { chat_id, ...opts });
  }

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

  async removeUserFromChat(
    chat_id: string,
    user_id: string,
    user_type: string
  ): Promise<EmptyResponse> {
    return this.handleAction("remove_user_from_chat", {
      chat_id,
      user_id,
      user_type,
    });
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

  async tagThread(
    chat_id: string,
    thread_id: string,
    tag: string
  ): Promise<EmptyResponse> {
    return this.handleAction("tag_thread", { chat_id, thread_id, tag });
  }

  async untagThread(
    chat_id: string,
    thread_id: string,
    tag: string
  ): Promise<EmptyResponse> {
    return this.handleAction("untag_thread", { chat_id, thread_id, tag });
  }

  async getCustomer(customer_id: string): Promise<GetCustomerResponse> {
    return this.handleAction("get_customer", { customer_id });
  }

  async listCustomers(
    opts?: ListCustomersParameters
  ): Promise<ListCustomersResponse> {
    return this.handleAction("list_customers", opts || {});
  }

  async createCustomer(
    opts?: CustomerParameters
  ): Promise<CreateCustomerResponse> {
    return this.handleAction("create_customer", opts || {});
  }

  async updateCustomer(
    customer_id: string,
    opts: CustomerParameters
  ): Promise<EmptyResponse> {
    return this.handleAction("update_customer", { customer_id, ...opts });
  }

  async banCustomer(customer_id: string, days: number): Promise<EmptyResponse> {
    return this.handleAction("ban_customer", { customer_id, ban: { days } });
  }

  async setRoutingStatus(
    status: RoutingStatus,
    agent_id?: string
  ): Promise<EmptyResponse> {
    return this.handleAction("set_routing_status", { status, agent_id });
  }

  async markEventsAsSeen(
    chat_id: string,
    seen_up_to: string
  ): Promise<EmptyResponse> {
    return this.handleAction("mark_events_as_seen", { chat_id, seen_up_to });
  }

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

  async multicast(
    recipients: MulticastRecipients,
    content: object,
    type?: string
  ): Promise<EmptyResponse> {
    return this.handleAction("multicast", { recipients, content, type });
  }

  async listAgentsForTransfer(chat_id: string): Promise<AgentForTransfer[]> {
    return this.handleAction("list_agents_for_transfer", { chat_id });
  }
}
