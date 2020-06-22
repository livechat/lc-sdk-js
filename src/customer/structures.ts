import {
  SortOrder,
  ChatsSummary,
  Thread,
  User,
  Properties,
  Access,
  InitialChat,
  GroupStatus,
} from "../objects";

export interface EmptyResponse {}

export interface ListChatParameters {
  sort_order?: SortOrder;
  limit?: number;
  page_id?: string;
}

export interface ListChatsResponse {
  previuous_page_id?: string;
  next_page_id?: string;
  chats_summary: ChatsSummary[];
  total_chats: number;
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

export interface CustomerParameters {
  name?: string;
  email?: string;
  avatar?: string;
  session_fields?: object[];
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

export interface GetPredictedAgentResponse {
  id: string;
  name: string;
  avatar: string;
  is_bot: boolean;
  job_title: string;
  type: string;
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
