import { PostbackEcommerce, Properties } from "./structures";

interface BaseEvent {
  id: string;
  created_at: string;
  properties?: Properties;
  recipients?: string;
  type: "file" | "form" | "filled_form" | "message" | "rich_message" | "custom" | "system_message" | "system";
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
  ecommerce?: PostbackEcommerce;
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
  ecommerce?: Ecommerce;
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

export interface Ecommerce {
  view_type: string;
  product_id: string;
  label?: string;
  options?: EcommerceOption[];
  addons?: EcommerceAddon[];
}

export interface EcommerceOption {
  option_id: string;
  label: string;
  price?: string;
  regular_price?: string;
  currency?: string;
  color?: string;
  image_url?: string;
  image_thumbnail_url?: string;
  available?: boolean;
  selected?: boolean;
}

export interface EcommerceAddon {
  addon_type: string;
  range_from?: string;
  range_to?: string;
  currency?: string;
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

export interface System extends BaseEvent {
  type: "system";
  custom_id?: string;
  source: string;
  subtype: string;
  details: string;
  version: number;
}

export type Event = File | FilledForm | Message | RichMessage | CustomEvent | SystemMessage | System;

type ResponseOnlyFields =
  | "id"
  | "created_at"
  | "author_id"
  | "thumbnail_url"
  | "thumbnail2x_url"
  | "content_type"
  | "size"
  | "width"
  | "height"
  | "form_type";

export type LimitEventToRequestFields<E extends Event> = Omit<E, ResponseOnlyFields>;
export type RequestEvent =
  | LimitEventToRequestFields<File>
  | LimitEventToRequestFields<FilledForm>
  | LimitEventToRequestFields<Message>
  | LimitEventToRequestFields<RichMessage>
  | LimitEventToRequestFields<CustomEvent>
  | LimitEventToRequestFields<SystemMessage>
  | LimitEventToRequestFields<System>;
