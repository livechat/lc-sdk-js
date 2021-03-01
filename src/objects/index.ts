export interface File {
  id: string;
  custom_id?: string;
  type: string;
  author_id: string;
  created_at: string;
  recipients: string;
  properties?: Properties;
  name: string;
  url: string;
  thumbnail_url?: string;
  thumbnail2x_url?: string;
  content_type: string;
  size?: number;
  width?: number;
  height?: number;
}

export interface FilledForm {
  id: string;
  custom_id?: string;
  type: string;
  author_id: string;
  created_at: string;
  recipients: string;
  properties?: Properties;
  form_id: string;
  fields: FormField[];
}

export interface FormField {
  type: string;
  id: string;
  label: string;
  answer?: Answer | string;
  answers?: Answer[];
}

export interface Answer {
  id: string;
  label: string;
  group_id?: number;
}

export interface Message {
  id: string;
  custom_id?: string;
  type: string;
  author_id: string;
  created_at: string;
  text: string;
  postback?: Postback;
  recipients: string;
  properties?: Properties;
}

export interface Postback {
  id: string;
  thread_id: string;
  event_id: string;
  type?: string;
  value?: string;
}

export interface RichMessage {
  id: string;
  custom_id?: string;
  type: string;
  author_id: string;
  created_at: string;
  recipients: string;
  properties?: Properties;
  template_id: string;
  elements?: Element[];
}

export interface Element {
  title: string;
  subtitle: string;
  image: Image;
  buttons?: Button[];
}

export interface Button {
  text: string;
  postback_id: string;
  user_ids: string[];
  type: string;
  value: string;
  webview_height?: string;
  target?: string;
}

export interface Image {
  name: string;
  url: string;
  content_type: string;
  size: number;
  width: number;
  height: number;
}

export interface CustomEvent {
  id: string;
  custom_id?: string;
  type: string;
  author_id: string;
  created_at: string;
  content?: object;
  recipients: string;
  properties?: Properties;
}

export interface SystemMessage {
  id: string;
  custom_id?: string;
  type: string;
  created_at: string;
  text?: string;
  system_message_type: string;
  text_vars: object;
  recipients?: string;
}

export type Event = File | FilledForm | Message | RichMessage | CustomEvent | SystemMessage;

export type User = Agent | Customer;

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export enum RoutingStatus {
  AcceptingChats = "accepting_chats",
  NotAcceptingChats = "not_accepting_chats",
  Offline = "offline",
}

export interface MyProfile {
  id: string;
  type: string;
  name: string;
  email: string;
  present: boolean;
  events_seen_up_to: string;
  avatar: string;
  routing_status: string;
  permission: string;
}

export interface Agent {
  id: string;
  type: string;
  name: string;
  email: string;
  present: boolean;
  events_seen_up_to: string;
  avatar: string;
  routing_status: string;
}

export interface Customer {
  id: string;
  type: string;
  name: string;
  email: string;
  email_verified: boolean;
  avatar: string;
  last_visit: Visit;
  session_fields: SessionField[];
  statistics: Statistics;
  __priv_lc2_customer_id: string;
  agent_last_event_created_at: string;
  customer_last_event_created_at: string;
  created_at: string;
  present: boolean;
  events_seen_up_to: string;
}

export interface Visit {
  started_at: string;
  referrer: string;
  ip: string;
  user_agent: string;
  geolocation: Geolocation;
  last_pages: LastPage[];
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

export interface SessionField {
  custom_key?: string;
  another_custom_key?: string;
}

export interface Statistics {
  chats_count: number;
  threads_count: number;
  visits_count: number;
}

export interface Chat {
  id: string;
  users: User[];
  threads: Thread[];
  properties?: Properties;
  access: Access;
  is_followed: boolean;
}

export interface InitialChat {
  properties?: Properties;
  access?: Access;
  users?: InitialUser[];
  thread?: InitialThread;
}

export interface InitialUser {
  id: string;
  type: string;
}

export interface InitialThread {
  events?: Event[];
  properties?: Properties;
}

export interface Access {
  group_ids: number[];
}

export interface Thread {
  id: string;
  timestamp: number;
  active: boolean;
  user_ids: string[];
  events: Event[];
  order: number;
  properties?: Properties;
  access: Access;
  previous_thread_id: string;
  created_at: string;
}

export interface Field {
  id: string;
  type: string;
  label: string;
  answer: string;
}

export interface Statistics {
  chats_count: number;
  threads_count: number;
  visits_count: number;
  page_views_count: number;
  greetings_shown_count: number;
  greetings_accepted_count: number;
}

export interface Thread {
  id: string;
  active: boolean;
  user_ids: string[];
  restricted_access: boolean;
  events: Event[];
  properties?: Properties;
  access: Access;
  previous_thread_id: string;
  next_thread_id: string;
  created_at: string;
}

export interface Properties {
  [property_namespace: string]: PropertyNamespace;
}

export interface PropertyNamespace {
  [property_name: string]: any;
}

export interface ChatAccess {
  type: string;
  id: number;
}

export interface ChatsSummary {
  id: string;
  last_event_per_type: LastEventPerType;
  users: User[];
  last_thread_summary: LastThreadSummary;
  properties: Properties;
  access: Access;
  order: number;
  is_followed: boolean;
}

interface LastEventPerType {
  [type: string]: Event;
}

export interface LastThreadSummary {
  id: string;
  user_ids: string[];
  properties: Properties;
  active: boolean;
  access: Access;
  created_at: string;
}

export enum GroupStatus {
  Online = "online",
  Offline = "offline",
  OnlineForQueue = "online_for_queue",
}

export interface RTMRequest {
  action: string;
  payload: any;
  author_id?: string;
  request_id?: string;
}

export interface RTMResponse {
  request_id?: string;
  action: string;
  type: string;
  success: boolean;
  payload: any;
}
