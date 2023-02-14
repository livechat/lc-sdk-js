import { BaseEvent, File, FilledForm, Message, RichMessage, CustomEvent, SystemMessage } from "./events";

type RequestToOmit = Pick<BaseEvent, "id" | "created_at" | "visibility">

export type RequestFile = Omit <File, keyof RequestToOmit | "author_id" | "thumbnail_url" | "thumbnail2x_url" | "content_type" | "size" | "width" | "height"> & Partial<Pick<File, "visibility">>

export type RequestFilledForm = Omit <FilledForm, keyof RequestToOmit | "author_id"> & Partial<Pick<FilledForm, "visibility">>

export type RequestMessage = Omit <Message, keyof RequestToOmit | "author_id"> & Partial<Pick<Message, "visibility">>

export type RequestRichMessage = Omit <RichMessage,keyof RequestToOmit | "author_id"> & Partial<Pick<RichMessage, "visibility">>

export type RequestCustomEvent = Omit <CustomEvent,keyof RequestToOmit | "author_id"> & Partial<Pick<CustomEvent, "visibility">>

export type RequestSystemMessage = Omit <SystemMessage, keyof RequestToOmit | "author_id"> & Partial<Pick<SystemMessage, "visibility">>

export type RequestEvent = RequestFile | RequestFilledForm | RequestMessage | RequestRichMessage | RequestCustomEvent | RequestSystemMessage;
