import { BaseEvent, File, FilledForm, Message, RichMessage, CustomEvent, SystemMessage } from "./events";

type RequestToOmit = Pick<BaseEvent, "id" | "created_at" | "recipients">

export type RequestFile = Omit <File, keyof RequestToOmit | "author_id" | "thumbnail_url" | "thumbnail2x_url" | "content_type" | "size" | "width" | "height">

export type RequestFilledForm = Omit <FilledForm, keyof RequestToOmit | "author_id">

export type RequestMessage = Omit <Message, keyof RequestToOmit | "author_id">

export type RequestRichMessage = Omit <RichMessage,keyof RequestToOmit | "author_id">

export type RequestCustomEvent = Omit <CustomEvent,keyof RequestToOmit | "author_id">

export type RequestSystemMessage = Omit <SystemMessage, keyof RequestToOmit | "author_id">

export type RequestEvent = RequestFile | RequestFilledForm | RequestMessage | RequestRichMessage | RequestCustomEvent | RequestSystemMessage;
