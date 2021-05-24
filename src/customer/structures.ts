import {
  SortOrder,
  ChatsSummary,
  Thread,
  User,
  Properties,
  Access,
  InitialChat,
  GroupStatus,
  Customer,
} from "../objects";

export interface EmptyResponse {}

export interface ListChatParameters {
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
}

export interface ListChatsResponse {
  previuous_page_id?: string;
  next_page_id?: string;
  chats_summary: ChatsSummary[];
  total_chats: number;
}

export interface ListThreadsParameters {
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
  min_events_count?: number;
}

export interface ListThreadsResponse {
  threads: Thread[];
  found_threads: number;
  next_page_id?: string;
  previous_page_id?: string;
}

export interface GetChatResponse {
  id: string;
  users: User[];
  thread: Thread;
  properties?: Properties;
  access: Access;
  is_followed: boolean;
}

export interface StartChatParameters {
  chat?: InitialChat;
  continuous?: boolean;
  active?: boolean;
}

export interface StartChatResponse {
  chat_id: string;
  thread_id: string;
  event_ids?: string[];
}

export interface ResumeChatParameters {
  chat: InitialChat;
  continuous?: boolean;
  active?: boolean;
}

export interface ResumeChatResponse {
  thread_id: string;
  event_ids?: string[];
}

export interface SendEventResponse {
  event_id: string;
}

export interface SendRichMessagePostbackParameters {
  chat_id: string;
  thread_id: string;
  event_id: string;
  postback: PostbackToggle;
}

interface PostbackToggle {
  id: string;
  toggled: boolean;
}

export interface CustomerParameters {
  name?: string;
  email?: string;
  avatar?: string;
  session_fields?: object[];
}

export interface ListGroupStatusesResponse {
  group_status: {
    [id: number]: GroupStatus;
  };
}

export interface GetFormResponse {
  form?: Form;
  enabled: boolean;
}

export interface Form {
  id: string;
  fields: Field[];
}

export interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  options?: object[];
}

export interface GetPredictedAgentResponse {
  agent: {
    id: string;
    name: string;
    avatar: string;
    is_bot: boolean;
    job_title: string;
    type: string;
  };
  queue: boolean;
}

export interface GetURLInfoResponse {
  title: string;
  description: string;
  image_url: string;
  image_original_url: string;
  image_width: number;
  image_height: number;
  url: string;
}

export interface UploadFileResponse {
  url: string;
}

export interface LoginRequest {
  token: string;
  customer?: LoginCustomer;
  customer_page?: CustomerPage;
  application?: Application;
  is_mobile?: boolean;
  customer_side_storage?: object;
  group_id?: number;
  referrer?: string;
  pushes?: { [key: string]: (Pushes | "all")[] };
}

export interface LoginCustomer {
  avatar?: string;
  email?: string;
  name?: string;
  session_fields?: object[];
}

export interface CustomerPage {
  url?: string;
  title?: string;
}

export interface Application {
  name?: string;
  version?: string;
  channel_type?: string;
}

export interface LoginResponse {
  customer: Customer;
  has_active_thread: boolean;
  chats?: object[];
  greeting?: object;
  __priv_dynamic_config: object;
}

export interface GetDynamicConfigurationRequest {
  group_id?: number;
  url?: string;
  channel_type?: string;
  test?: boolean;
}

export interface GetDynamicConfigurationResponse {
  group_id: number;
  client_limit_exceeded: boolean;
  domain_allowed: boolean;
  config_version: string;
  localization_version: string;
  language: string;
}

export interface GroupConfiguration {
  buttons: {
    id: string;
    type: string;
    online_value: string;
    offline_value: string;
  }[];
  properties: {
    group: Properties;
    license: Properties;
  };
  integrations: Properties;
  ticket_form: Form;
  prechat_form: Form;
}

export enum Pushes {
  /**
   * Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
   * If the chat was started with some initial events, the thread object contains them.
   */
  IncomingChat = "incoming_chat",

  /**
   * Informs that a chat was deactivated by closing the currently open thread.
   */
  ChatDeactivated = "chat_deactivated",

  /**
   * Informs that a chat was transferred to a different group or to an Agent.
   */
  ChatTransferred = "chat_transferred",

  /**
   * Informs that a user (Customer or Agent) was added to a chat.
   * This push can be emitted with user.present set to false when a user writes to a chat without joining it
   * You can achieve that via the Send Event method.
   */
  UserAddedToChat = "user_added_to_chat",

  /**
   * Informs that a user (Customer or Agent) was removed from a chat.
   */
  UserRemovedFromChat = "user_removed_from_chat",

  /**
   * Informs about an incoming event sent to a chat.
   */
  IncomingEvent = "incoming_event",

  /**
   * Informs that an event was updated.
   */
  EventUpdated = "event_updated",

  /**
   * Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
   * as well as the chat it was sent in.
   */
  IncomingRichMessagePostback = "incoming_rich_message_postback",

  /**
   * Informs about those chat properties that were updated.
   */
  ChatPropertiesUpdated = "chat_properties_updated",

  /**
   * Informs about those chat properties that were deleted.
   */
  ChatPropertiesDeleted = "chat_properties_deleted",

  /**
   * Informs about those thread properties that were updated.
   */
  ThreadPropertiesUpdated = "thread_properties_updated",

  /**
   * Informs about those thread properties that were deleted.
   */
  ThreadPropertiesDeleted = "thread_properties_deleted",

  /**
   * Informs about those event properties that were updated.
   */
  EventPropertiesUpdated = "event_properties_updated",

  /**
   * Informs about those event properties that were deleted.
   */
  EventPropertiesDeleted = "event_properties_deleted",

  /**
   * Informs that Customer's data was updated.
   */
  CustomerUpdated = "customer_updated",

  /**
   * Informs that a Customer moved to another page of the website.
   */
  CustomerPageUpdated = "customer_page_updated",

  /**
   * Informs that a Customer updated the data stored on their side.
   */
  CustomerSideStorageUpdated = "customer_side_storage_updated",

  /**
   * Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.
   */
  CustomerDisconnected = "customer_disconnected",

  /**
   * Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
   * The push payload contains the typing indicator object.
   * @param cb - callback
   */
  IncomingTypingIndicator = "incoming_typing_indicator",

  /**
   * Informs that a user has seen events up to a specific time.
   */
  EventsMarkedAsSeen = "events_marked_as_seen",

  /**
   * Informs about messages sent via the multicast method or by the system.
   */
  IncomingMulticast = "incoming_multicast",

  /**
   * Informs about an incoming greeting.
   */
  IncomingGreeting = "incoming_greeting",

  /**
   * Informs about a greeting accepted by the Customer.
   */
  GreetingAccepted = "greeting_accepted",

  /**
   * Informs about a greeting rejected by the Customer.
   * Also, the push is sent when a new greeting automatically cancels the currently displayed one.
   */
  GreetingCancelled = "greeting_cancelled",

  /**
   * Informs about an updated position in the queue and about the wait time.
   */
  QueuePostitionUpdated = "queue_postition_updated",
}
