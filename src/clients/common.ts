import { AvailableVersions } from "../internal";

export enum APIType {
  AgentAPI = "agent",
  CustomerAPI = "customer",
  ConfigurationAPI = "configuration",
}

export interface APIError<P = unknown> {
  type: string;
  message: string;
  data?: P;
}

export interface ResponseError {
  error: APIError;
}

export const ApiURL = "api.livechatinc.com";

export type RtmRequestOptions = {
  uuid?: string;
};

export type WebRequestOptions = {
  method?: "GET" | "POST";
  version?: AvailableVersions | "3.1" | "3.2" | "3.3" | "3.4";
  headers?: Record<string, any>;
};

export type RequestOptions<T extends "web" | "rtm"> = T extends "web" ? WebRequestOptions : RtmRequestOptions;

export type RequestClient<T extends "rtm" | "web"> = {
  getType(): "web" | "rtm";
  getVersion(): AvailableVersions;
  send<R = unknown, O = unknown>(action: string, payload: O, options?: RequestOptions<T>): Promise<R>;
};
