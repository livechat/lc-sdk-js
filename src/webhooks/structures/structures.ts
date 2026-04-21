import { Customer as CustomerFromAgentAPI } from "../../agent/structures";
import { Customer as CustomerFromCustomerAPI } from "../../customer/structures";

export interface Access {
  group_ids: number[];
}

export enum RoutingStatus {
  AcceptingChats = "accepting_chats",
  NotAcceptingChats = "not_accepting_chats",
  Offline = "offline",
}

export interface Properties {
  [property_namespace: string]: PropertyNamespace;
}

export interface PropertyNamespace {
  [property_name: string]: any;
}

export interface Filter<T> {
  values?: T[];
  exclude_values?: T[];
}

export interface ThreadSummary {
  text: string;
  status: string;
  updated_at: string;
}

export interface RichMessagePostback {
  id: string;
  toggled: boolean;
  button_type?: string;
  button_value?: string;
  ecommerce?: PostbackEcommerce;
}

export interface PostbackEcommerce {
  product_id: string;
  option_id: string;
  quantity?: number;
}

export type Customer = CustomerFromAgentAPI | CustomerFromCustomerAPI;
