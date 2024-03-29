import { Properties } from "./structures";

interface BaseEvent {
  id: string;
  created_at: string;
  properties?: Properties;
  recipients?: string;
  visibility?: string;
  type: "file" | "form" | "filled_form" | "message" | "rich_message" | "custom" | "system_message";
}

export interface File extends BaseEvent {
  type: "file";
  custom_id?: string;
  author_id: string;
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

export interface FilledForm extends BaseEvent {
  type: "form" | "filled_form";
  custom_id?: string;
  author_id: string;
  form_id: string;
  form_type?: string;
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

export interface Message extends BaseEvent {
  type: "message";
  custom_id?: string;
  author_id: string;
  text: string;
  postback?: Postback;
}

export interface Postback {
  id: string;
  thread_id: string;
  event_id: string;
  type?: string;
  value?: string;
}

export interface RichMessage extends BaseEvent {
  type: "rich_message";
  custom_id?: string;
  author_id: string;
  template_id: string;
  elements?: Element[];
}

export interface Element {
  title?: string;
  subtitle?: string;
  image?: Image;
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

export interface CustomEvent extends BaseEvent {
  type: "custom";
  custom_id?: string;
  author_id: string;
  content?: object;
}

export interface SystemMessage extends BaseEvent {
  type: "system_message";
  system_message_type: string;
  text?: string;
  text_vars?: object;
}

export type Event = File | FilledForm | Message | RichMessage | CustomEvent | SystemMessage;
