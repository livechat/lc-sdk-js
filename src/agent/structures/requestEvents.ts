import { Properties } from "./structures";
import { FormField, Postback, Element } from "./events";

interface RequestBaseEvent {
  properties?: Properties;
  visibility?: string;
  type: string;
}

export interface RequestFile extends RequestBaseEvent {
  custom_id?: string;
  name: string;
  url: string;
  alternative_text?: string;
}

export interface RequestFilledForm extends RequestBaseEvent {
  custom_id?: string;
  form_id: string;
  fields: FormField[];
}

export interface RequestMessage extends RequestBaseEvent {
  custom_id?: string;
  text: string;
  postback?: Postback;
}

export interface RequestRichMessage extends RequestBaseEvent {
  custom_id?: string;
  template_id: string;
  elements?: Element[];
}

export interface RequestCustomEvent extends RequestBaseEvent {
  custom_id?: string;
  content?: object;
}

export interface RequestSystemMessage extends RequestBaseEvent {
  system_message_type: string;
  text?: string;
  text_vars?: object;
}

export type RequestEvent = RequestFile | RequestFilledForm | RequestMessage | RequestRichMessage | RequestCustomEvent | RequestSystemMessage;
