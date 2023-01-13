import { Properties } from "./structures";

export type Event = File | FilledForm | Message | RichMessage | CustomEvent | SystemMessage;

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

export interface Postback {
  id: string;
  thread_id: string;
  event_id: string;
  type?: string;
  value?: string;
}
