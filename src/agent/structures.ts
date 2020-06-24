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
