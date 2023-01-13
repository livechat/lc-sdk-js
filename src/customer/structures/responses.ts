import { Access, ChatsSummary, Customer, Form, GroupStatus, Properties, Thread, User } from "./structures";

export interface EmptyResponse {}

export interface ListChatsResponse {
  previous_page_id?: string;
  next_page_id?: string;
  chats_summary: ChatsSummary[];
  total_chats: number;
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

export interface StartChatResponse {
  chat_id: string;
  thread_id: string;
  event_ids?: string[];
}

export interface ResumeChatResponse {
  thread_id: string;
  event_ids?: string[];
}

export interface SendEventResponse {
  event_id: string;
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

export interface LoginResponse {
  customer: Customer;
  has_active_thread: boolean;
  chats?: object[];
  greeting?: object;
  __priv_dynamic_config: object;
}

export interface GetDynamicConfigurationResponse {
  group_id: number;
  organization_id: string;
  client_limit_exceeded: boolean;
  domain_allowed: boolean;
  config_version: string;
  localization_version: string;
  language: string;
}
