import { ApiVersion } from "../../internal/constants";
import { Event } from "./events";
import { Pushes } from "./pushes";
import { InitialUser, User } from "./users";

export interface ListChatParameters {
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
}

export interface ListThreadsParameters {
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
  min_events_count?: number;
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

export interface LoginRequest {
  token: string;
  customer?: LoginCustomer;
  customer_page?: CustomerPage;
  application?: Application;
  is_mobile?: boolean;
  customer_side_storage?: object;
  group_id?: number;
  referrer?: string;
  pushes?: { [ApiVersion]: Pushes[] };
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

export interface GetDynamicConfigurationRequest {
  group_id?: number;
  url?: string;
  channel_type?: string;
  test?: boolean;
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

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export interface Thread {
  id: string;
  active: boolean;
  user_ids: string[];
  events: Event[];
  properties?: Properties;
  access?: Access;
  previous_thread_id: string;
  next_thread_id: string;
  created_at: string;
  queue?: Queue;
}

export interface Queue {
  position: number;
  wait_time: number;
  queued_at?: string;
}

export interface Properties {
  [property_namespace: string]: PropertyNamespace;
}

export interface PropertyNamespace {
  [property_name: string]: any;
}

export interface Access {
  group_ids?: number[];
  agent_ids?: string[];
}

export interface InitialChat {
  id?: string;
  properties?: Properties;
  access?: Access;
  users?: InitialUser[];
  thread?: InitialThread;
}

export enum GroupStatus {
  Online = "online",
  Offline = "offline",
  OnlineForQueue = "online_for_queue",
}

export interface ChatsSummary {
  id: string;
  last_event_per_type?: LastEventPerType;
  users: User[];
  last_thread_id?: string;
  last_thread_created_at?: string;
  last_thread_summary?: LastThreadSummary;
  properties: Properties;
  access?: Access;
  active: boolean;
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
  properties: Properties;
  active: boolean;
  access?: Access;
  created_at: string;
}

export interface WebAPIOptions {
  apiUrl?: string;
}

export interface RTMAPIOptions {
  apiUrl?: string;
}
