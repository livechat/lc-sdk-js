import {
  Access,
  ArchivedChat,
  ChatsSummary,
  Customer,
  License,
  MyProfile,
  Properties,
  RoutingStatus,
  Thread,
  User,
} from "./structures";

export interface EmptyResponse {}

export interface ListChatsResponse {
  previous_page_id?: string;
  next_page_id?: string;
  chats_summary: ChatsSummary[];
  found_chats: number;
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

export interface ListArchivesResponse {
  chats: ArchivedChat[];
  found_chats: number;
  next_page_id: string;
  previous_page_id: string;
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

export interface CreateCustomerResponse {
  customer_id: string;
}

export interface UploadFileResponse {
  url: string;
}

export interface LoginResponse {
  license: License;
  my_profile: MyProfile;
  chats_summary: ChatsSummary;
}

export interface SetRoutingStatusResponse {
  agent_id: string;
  status: RoutingStatus;
}

export interface GetCustomerResponse extends Customer {
  chat_ids: string[];
}
