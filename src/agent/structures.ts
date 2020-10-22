import {
  Access,
  User,
  Properties,
  SortOrder,
  Thread,
  Chat,
  Customer,
  InitialChat,
  ChatsSummary,
  MyProfile,
} from "../objects";

export interface EmptyResponse {}

export interface ListChatParameters {
  filters?: ChatsFilters;
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
}

export interface ChatsFilters {
  include_active?: boolean;
  include_chats_without_threads?: boolean;
  group_ids?: number[];
  properties?: Properties;
}

export interface ListChatsResponse {
  previuous_page_id?: string;
  next_page_id?: string;
  chats_summary: ChatsSummary[];
  found_chats: number;
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

export interface ListArchivesParameters {
  filters?: object;
  page_id?: string;
  sort_order?: SortOrder;
  limit?: number;
}

export interface ArchivesFilters {
  query?: string;
  from?: string;
  to?: string;
  thread_ids?: string[];
  group_ids?: number[];
  agent_ids: string[];
  properties: PropertiesFilter;
  agents: FilterType;
  tags: FilterType;
  sales: FilterType;
  goals: FilterType;
  surveys: SurveyFilter[];
  events: EventsFilter;
}

export interface PropertiesFilter {
  [namespace: string]: {
    [name: string]: FilterType;
  };
}

interface FilterType {
  exists?: boolean;
  values?: any[];
  exclude_values?: any[];
}

export enum SurveyType {
  PreChat = "pre_chat",
  PostChat = "post_chat",
}

export interface SurveyFilter {
  type: SurveyType;
  answer_id: string;
}

export interface EventsFilter {
  types: string[];
}

export interface ListArchivesResponse {
  chats: Chat[];
  found_chats: number;
  next_page_id: string;
  previous_page_id: string;
}

export interface StartChatParameters {
  chat?: InitialChat;
  continuous?: boolean;
}

export interface StartChatResponse {
  chat_id: string;
  thread_id: string;
  event_ids?: string[];
}

export interface ActivateChatParameters {
  chat: InitialChat;
  continuous?: boolean;
}

export interface ActivateChatResponse {
  thread_id: string;
  event_ids?: string[];
}

export interface TransferChatParameters {
  target?: TransferTarget;
  force?: boolean;
}

interface TransferTarget {
  type: string;
  ids: number[];
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

export interface GetCustomerResponse extends Customer {
  chat_ids: string[];
}

export interface ListCustomersParameters {
  page_id?: string;
  limit?: number;
  sort_order?: SortOrder;
  filters?: CustomerFilters;
  sort_by?: CustomerSortBy;
}

export enum CustomerSortBy {
  CreateAt = "created_at",
  Name = "name",
  Email = "email",
  ThreadsCount = "threads_count",
  VisitsCount = "visits_count",
  AgentLastEvent = "agent_last_event",
  CustomerLastEvent = "customer_last_event",
}

export interface CustomerFilters {
  country?: StringFilter;
  email?: StringFilter;
  name?: StringFilter;
  customer_id?: StringFilter;
  chats_count?: RangeFilter;
  threads_count?: RangeFilter;
  visits_count?: RangeFilter;
  created_at?: DateRangeFilter;
  agent_last_event_created_at?: DateRangeFilter;
  customer_last_event_created_at?: DateRangeFilter;
}

export interface StringFilter {
  values?: string[];
  exclude_values?: string[];
}

export interface RangeFilter {
  lte?: number;
  lt?: number;
  gte?: number;
  gt?: number;
  eq?: number;
}

export interface DateRangeFilter {
  lte?: string;
  lt?: string;
  gte?: string;
  gt?: string;
  eq?: string;
}

export interface ListCustomersResponse {
  customers: Customer[];
  total_customers: number;
  next_page_id?: string;
  previous_page_id?: string;
}

export interface CustomerParameters {
  name?: string;
  email?: string;
  avatar?: string;
  session_fields?: object[];
}

export interface CreateCustomerResponse {
  customer_id: string;
}

export interface MulticastRecipients {
  agents: MulticastAgents;
  customers: MulticastCustomers;
}

interface MulticastAgents {
  all: boolean;
  ids: string[];
  groups: number[];
}

interface MulticastCustomers {
  ids: string[];
}

export interface AgentForTransfer {
  agent_id: string;
  total_active_chats: number;
}

export interface UploadFileResponse {
  url: string;
}

export interface LoginRequest {
  token: string;
  timezone?: string;
  reconnect?: boolean;
  push_notifications?: PushNotifications;
  application?: Application;
  away?: boolean;
}

export interface PushNotifications {
  platform: string;
  firebase_token?: string;
}

export interface Application {
  name?: string;
  version?: string;
}

export interface LoginResponse {
  license: License;
  my_profile: MyProfile;
  chats_summary: ChatsSummary;
}

export interface License {
  id: string;
  plan: string;
  expiration_timestamp: number;
  creation_timestamp: number;
  in_trial: boolean;
  website_last_activity?: string;
}

export interface ChangePushNotificationsRequest {
  firebase_token: string;
  platform: string;
  enabled: boolean;
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
   * Informs that new, single access to a chat was granted. The existing access isn't overwritten.
   */
  ChatAccessGranted = "chat_access_granted",

  /**
   * Informs that access to a certain chat was revoked.
   */
  ChatAccessRevoked = "chat_access_revoked",

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
   * Informs that a chat thread was tagged.
   */
  ThreadTagged = "thread_tagged",

  /**
   * Informs that a chat thread was untagged.
   */
  ThreadUntagged = "thread_untagged",

  /**
   * Informs that a Customer entered the tracked website.
   */
  CustomerVisitStarted = "customer_visit_started",

  /**
   * Informs that a new Customer registered.
   */
  CustomerCreated = "customer_created",

  /**
   * Informs that Customer's data was updated.
   */
  CustomerUpdated = "customer_updated",

  /**
   * Informs that a Customer moved to another page of the website.
   */
  CustomerPageUpdated = "customer_page_updated",

  /**
   * Informs that a Customer was banned for a specified number of days.
   */
  CustomerBanned = "customer_banned",

  /**
   * Informs that a Customer left the tracked website.
   */
  CustomerVisitEnded = "customer_visit_ended",

  /**
   * Informs that an Agent's or Bot Agent's status was changed.
   */
  RoutingStatusSet = "routing_status_set",

  /**
   * Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.
   */
  AgentDisconnected = "agent_disconnected",

  /**
   * Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
   * The push payload contains the typing indicator object.
   */
  IncomingTypingIndicator = "incoming_typing_indicator",

  /**
   * Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.
   */
  IncomingSneakPeek = "incoming_sneak_peek",

  /**
   * Informs that a user has seen events up to a specific time.
   */
  EventsMarkedAsSeen = "events_marked_as_seen",

  /**
   * Informs about messages sent via the multicast method or by the system.
   */
  IncomingMulticast = "incoming_multicast",

  /**
   * Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
   * where one app/integration needs to know that another one unfollowed the chat.
   */
  ChatUnfollowed = "chat_unfollowed",

  /**
   * New positions and wait times for queued chats.
   */
  QueuePostitionsUpdated = "queue_postitions_updated",
}
