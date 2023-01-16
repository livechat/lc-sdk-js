import { ApiVersion } from "../../internal/constants";
import { Event } from "./events";
import { ArchivesFilters, ChatsFilters, CustomerFilters, ThreadsFilters } from "./filters";
import { Pushes } from "./pushes";
import { InitialUser, User } from "./users";

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

export interface Chat {
  id: string;
  users: User[];
  thread: Thread;
  properties?: Properties;
  access?: Access;
  is_followed: boolean;
}

export interface ChatsSummary {
  id: string;
  last_event_per_type?: LastEventPerType;
  users: User[];
  last_thread_summary?: LastThreadSummary;
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
  target?: TransferTarget;
  force?: boolean;
}

interface TransferTarget {
  type: string;
  ids: number[];
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
  group_ids: number[];
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

export interface InitialThread {
  events?: Event[];
  properties?: Properties;
}

export interface LastEventPerType {
  [type: string]: Event;
}

export interface LastThreadSummary {
  id: string;
  user_ids: string[];
  properties?: Properties;
  active: boolean;
  access?: Access;
  created_at: string;
}

export interface ChatAccess {
  type: string;
  id: number;
}

export interface WebAPIOptions {
  apiUrl?: string;
}

export interface RTMAPIOptions {
  apiUrl?: string;
}

export enum SurveyType {
  PreChat = "pre_chat",
  PostChat = "post_chat",
}
