import { ApiVersion } from "../internal/constants";
import {
  Access,
  Properties,
  SortOrder,
  Thread,
  InitialChat,
  MyProfile,
  RoutingStatus,
  Filter,
  ArchivedThread,
  Chat as CommonChat,
  ChatsSummary as CommonChatSummary,
} from "../objects";

export interface Agent {
  id: string;
  type: string;
  name: string;
  email: string;
  present: boolean;
  events_seen_up_to: string;
  avatar: string;
  routing_status: string;
  visibility?: string;
}

export interface Geolocation {
  country: string;
  country_code: string;
  region: string;
  city: string;
  timezone: string;
}

export interface LastPage {
  opened_at: string;
  url: string;
  title: string;
}

export interface Visit {
  started_at: string;
  ended_at: string;
  referrer: string;
  ip: string;
  user_agent: string;
  geolocation: Geolocation;
  last_pages: LastPage[];
}

export interface Statistics {
  chats_count: number;
  threads_count: number;
  visits_count: number;
}

export interface Customer {
  id: string;
  type: string;
  name: string;
  email: string;
  email_verified: boolean;
  avatar: string;
  last_visit: Visit;
  session_fields: Record<string, string>[];
  statistics: Statistics;
  __priv_lc2_customer_id: string;
  agent_last_event_created_at: string;
  customer_last_event_created_at: string;
  created_at: string;
  present: boolean;
  events_seen_up_to: string;
  followed: boolean;
  group_ids: number[];
  state: string;
}

export type User = Agent | Customer;

export interface Chat extends CommonChat {
  users: User[];
}

export interface ArchivedChat extends Chat {
  thread: ArchivedThread;
}

export interface ChatsSummary extends CommonChatSummary {
  users: User[];
}

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
  filters?: ThreadsFilters;
}

export interface ThreadsFilters {
  from?: string;
  to?: string;
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
  filters?: ArchivesFilters;
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
  properties?: PropertiesFilter;
  agents?: FilterType<string>;
  tags?: FilterType<string>;
  sales?: FilterType<number>;
  goals?: FilterType<number>;
  surveys?: SurveyFilter[];
  event_types?: Omit<FilterType<string>, "exists">;
  greetings?: GreetingsFilter;
  agent_response?: AgentResponseFilter;
}

export interface PropertiesFilter {
  [namespace: string]: {
    [name: string]: Omit<FilterType<any>, "require_every_value">;
  };
}

interface FilterType<T> extends Filter<T> {
  exists?: boolean;
  require_every_value?: boolean;
}

export enum SurveyType {
  PreChat = "pre_chat",
  PostChat = "post_chat",
}

export interface SurveyFilter {
  from?: string;
  to?: string;
  type: SurveyType;
  values?: string[];
  exclude_values?: string[];
  exists?: boolean;
  groups?: Filter<number>;
}

export interface GreetingsFilter extends Filter<number> {
  from?: string;
  to?: string;
  exists?: boolean;
  groups?: Filter<number>;
}

export interface AgentResponseFilter {
  first?: boolean;
  exists?: boolean;
  agents?: Filter<string>;
  groups?: Filter<number>;
}

export interface ListArchivesResponse {
  chats: ArchivedChat[];
  found_chats: number;
  next_page_id: string;
  previous_page_id: string;
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

export interface TransferChatParameters {
  target?: TransferTarget;
  ignore_requester_presence?: boolean;
  ignore_agents_availability?: boolean;
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
  chat_group_ids?: IntegerFilter;
  chats_count?: RangeFilter;
  threads_count?: RangeFilter;
  visits_count?: RangeFilter;
  created_at?: DateRangeFilter;
  agent_last_event_created_at?: DateRangeFilter;
  customer_last_event_created_at?: DateRangeFilter;
  include_customers_without_chats?: boolean;
}

export type StringFilter = Filter<string>;

export type IntegerFilter = Filter<number>;

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
  limited_customers?: number;
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
  customer_monitoring_level?: CustomerMonitoringLevel;
  pushes?: { [ApiVersion]: Pushes[] };
}

export enum CustomerMonitoringLevel {
  My = "my",
  Chatting = "chatting",
  Invited = "invited",
  Online = "online",
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
  organization_id: string;
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

export interface SetRoutingStatusResponse {
  agent_id: string;
  status: RoutingStatus;
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
   * Informs that the chat's access is updated. It contains full access of the chat.
   */
  ChatAccessUpdated = "chat_access_updated",

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
  QueuePostitionsUpdated = "queue_positions_updated",

  /**
   * New positions and wait times for queued chats.
   */
  QueuePositionsUpdated = "queue_positions_updated",

  /**
   * Informs about customers the agent should be aware of.
   */
  IncomingCustomers = "incoming_customers",

  /**
   * Informs that a new or returning customer is available to the agent.
   */
  IncomingCustomer = "incoming_customer",

  /**
   * Informs that a Customer left the tracked website.
   */
  CustomerLeft = "customer_left",

  /**
   * Informs that a customer was unfollowed.
   */
  CustomerUnfollowed = "customer_unfollowed",

  /**
   * Informs that an agent has been created.
   */
  AgentCreated = "agent_created",

  /**
   * Informs that an agent has been deleted.
   */
  AgentDeleted = "agent_deleted",

  /**
   * Informs that an agent has been updated.
   */
  AgentUpdated = "agent_updated",

  /**
   * Informs that an agent has been suspended.
   */
  AgentSuspended = "agent_suspended",

  /**
   * Informs that an agent has been unsuspended.
   */
  AgentUnsuspended = "agent_unsuspended",

  /**
   * Informs that an agent has been approved.
   */
  AgentApproved = "agent_approved",

  /**
   * Informs that a bot has been created.
   */
  BotCreated = "bot_created",

  /**
   * Informs that a bot has been updated.
   */
  BotUpdated = "bot_updated",

  /**
   * Informs that a bot has been deleted.
   */
  BotDeleted = "bot_deleted",

  /**
   * Informs that a group has been created.
   */
  GroupCreated = "group_created",

  /**
   * Informs that a group has been updated.
   */
  GroupUpdated = "group_updated",

  /**
   * Informs that a group has been deleted.
   */
  GroupDeleted = "group_deleted",

  /**
   * Informs that an auto access has been added.
   */
  AutoAccessAdded = "auto_access_added",

  /**
   * Informs that an auto access has been deleted.
   */
  AutoAccessDeleted = "auto_access_deleted",

  /**
   * Informs that an auto access has been updated.
   */
  AutoAccessUpdated = "auto_access_updated",
}
