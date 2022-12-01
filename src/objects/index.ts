import {
  Customer as CustomerFromAgentAPI,
  Agent as AgentFromAgentAPI,
  Statistics as CustomerStatistics,
  Geolocation as CustomerGeolocation,
  LastPage as CustomerLastPage,
  Visit as CustomerVisit,
} from "../agent/structures";
import { Customer as CustomerFromCustomerAPI, Agent as AgentFromCustomerAPI } from "../customer/structures";

export type Agent = AgentFromAgentAPI | AgentFromCustomerAPI;

export type Customer = CustomerFromAgentAPI | CustomerFromCustomerAPI;

export type User = Agent | Customer;

export interface Chat {
  id: string;
  users: User[];
  threads: Thread[];
  properties?: Properties;
  access: Access;
  is_followed: boolean;
}

export interface ArchivedChat extends Chat {
  threads: ArchivedThread[];
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
  alternative_text?: string;
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
  alternative_text: string;
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

export interface Field {
  id: string;
  type: string;
  label: string;
  answer: string;
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

export interface ArchivedThread extends Thread {
  previous_accessible_thread_id?: string;
  next_accessible_thread_id?: string;
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

export interface LastEventPerType {
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
  version?: string;
}

export interface RTMResponse {
  request_id?: string;
  action: string;
  type: string;
  success: boolean;
  payload: any;
}

export interface WebAPIOptions {
  apiUrl?: string;
}

export interface RTMAPIOptions {
  apiUrl?: string;
}

export interface Filter<T> {
  values?: T[];
  exclude_values?: T[];
}

export interface Push<P = unknown> {
  version: string;
  request_id?: string;
  action: string;
  type: string;
  payload: P;
}

/**
 * Backward compatibility
 */
export type Statistics = CustomerStatistics;
export type SessionField = Record<string, string>;
export type Geolocation = CustomerGeolocation;
export type LastPage = CustomerLastPage;
export type Visit = CustomerVisit;
