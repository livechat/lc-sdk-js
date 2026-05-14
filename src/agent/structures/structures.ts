import { ApiVersion } from "../../internal/constants";
import { Event } from "./events";
import { Pushes } from "./pushes";
import { ArchivesFilters, ChatsFilters, FilterType, ThreadsFilters } from "./filters";
import { InitialUser, User } from "./users";

export interface Geolocation {
  country?: string;
  country_code?: string;
  region?: string;
  city?: string;
  timezone?: string;
  longitude?: string;
  latitude?: string;
}

export interface FocusInterval {
  started_at: string;
  ended_at?: string;
}

export interface Page {
  opened_at: string;
  url: string;
  title?: string;
  tab_id?: string;
  is_focused?: boolean;
  ended_at?: string;
  focus_intervals?: FocusInterval[];
  prior_focused_duration?: number;
}

export interface Visit {
  id: number;
  started_at?: string;
  ended_at?: string;
  referrer?: string;
  ip?: string;
  user_agent?: string;
  geolocation?: Geolocation;
  last_pages?: Page[];
  previous_visit_started_at?: string;
}

export interface CustomerVisit {
  ip: string;
  user_agent: string;
  geolocation: Geolocation;
}

export interface Statistics {
  chats_count: number;
  threads_count: number;
  visits_count: number;
  page_views_count: number;
  greetings_accepted_count: number;
  greetings_converted_count: number;
  tickets_count: number;
  tickets_inbox_count: number;
  tickets_archive_count: number;
  tickets_spam_count: number;
  tickets_trash_count: number;
  orders_count: number;
  last_visit_started_at?: string;
}

export interface Ticket {
  ticket_id: string;
  silo: string;
  created_at: string;
}

export interface Order {
  store_platform: string;
  store_uuid: string;
  order_id: string;
  order_number: string;
  currency: string;
  total_price: number;
  total_price_usd: number;
  created_at: string;
}

export interface Omnichannel {
  fbmessenger?: FBMessenger[];
  twilio?: Twilio[];
}

export interface FBMessenger {
  id: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  profile_pic?: string;
  gender?: string;
  locale?: string;
  is_verified_user?: boolean;
}

export interface Twilio {
  phone_number: string;
}

export interface CustomerChat {
  chat_id: string;
  thread_id?: string;
  last_thread_started_at: string;
}

export interface Chat {
  id: string;
  users: User[];
  thread?: Thread;
  properties?: Properties;
  access?: Access;
  is_followed: boolean;
}

export interface ArchivedChat extends Chat {
  thread?: ArchivedThread;
}

export interface ChatsInfo {
  id: string;
  last_event_per_type?: LastEventPerType;
  users: User[];
  last_thread_info?: LastThreadInfo;
  properties?: Properties;
  access?: Access;
  is_followed: boolean;
}

export interface ListChatParameters {
  filters?: ChatsFilters;
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
}

export interface ListThreadsParameters {
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
  min_events_count?: number;
  filters?: ThreadsFilters;
}

export interface ListArchivesParameters {
  filters?: ArchivesFilters;
  page_id?: string;
  sort_order?: SortOrder;
  limit?: number;
  highlights?: Highlights;
}

export interface PropertiesFilter {
  [namespace: string]: {
    [name: string]: Omit<FilterType<any>, "require_every_value">;
  };
}

export interface StartChatParameters {
  chat?: InitialChat;
  continuous?: boolean;
  active?: boolean;
}

export interface ResumeChatParameters {
  chat: InitialChat;
  continuous?: boolean;
  active?: boolean;
}

export interface TransferChatParameters {
  target?: TransferTargetGroup | TransferTargetAgent;
  ignore_requester_presence?: boolean;
  ignore_agents_availability?: boolean;
}

interface TransferTargetGroup {
  type: "group";
  ids: number[];
}

interface TransferTargetAgent {
  type: "agent";
  ids: string[];
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
  button_type?: string;
  button_value?: string;
  ecommerce?: PostbackEcommerce;
}

export interface PostbackEcommerce {
  product_id: string;
  option_id?: string;
  quantity?: number;
}

export interface CustomerParameters {
  name?: string;
  email?: string;
  avatar?: string;
  session_fields?: object[];
  phone_number?: string;
}

export interface MulticastRecipients {
  agents: MulticastAgents;
}

interface MulticastAgents {
  all: boolean;
  ids: string[];
  groups: number[];
}

export interface AgentForTransfer {
  agent_id: string;
  total_active_chats: number;
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
  HighestAvailable = "highest_available",
}

export interface PushNotifications {
  platform: string;
  firebase_token?: string;
}

export interface Application {
  name?: string;
  version?: string;
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

export interface Access {
  group_ids?: number[];
  agent_ids?: string[];
}

export interface Properties {
  [property_namespace: string]: PropertyNamespace;
}

export interface PropertyNamespace {
  [property_name: string]: any;
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export interface ThreadSummary {
  text: string;
  status: string;
  updated_at: string;
}

export interface Thread {
  id: string;
  active: boolean;
  user_ids: string[];
  restricted_access?: string;
  tags: string[];
  events: Event[];
  properties?: Properties;
  access?: Access;
  previous_thread_id: string;
  next_thread_id: string;
  created_at: string;
  queue?: Queue;
  queues_duration?: number;
  customer_visit: CustomerVisit;
  summary?: ThreadSummary;
}

export interface Queue {
  position: number;
  wait_time: number;
  queued_at?: string;
}

export interface InitialChat {
  id?: string;
  properties?: Properties;
  access?: Access;
  users?: InitialUser[];
  thread?: InitialThread;
}

export enum RoutingStatus {
  AcceptingChats = "accepting_chats",
  NotAcceptingChats = "not_accepting_chats",
  Offline = "offline",
}

export interface ArchivedThread extends Thread {
  previous_accessible_thread_id?: string;
  next_accessible_thread_id?: string;
}

export interface InitialThread {
  events?: Event[];
  properties?: Properties;
  tags?: string[];
}

export interface LastEventPerType {
  [type: string]: Event;
}

export interface LastThreadInfo {
  id: string;
  user_ids: string[];
  properties?: Properties;
  active: boolean;
  access?: Access;
  created_at: string;
}

export interface Highlights {
  pre_tag: string;
  post_tag: string;
}

export interface SendThinkingIndicatorParameters {
  title?: string;
  description?: string;
  visibility?: string;
  custom_id?: string;
}

export interface WebAPIOptions {
  apiUrl?: string;
}

export interface RTMAPIOptions {
  apiUrl?: string;
}
