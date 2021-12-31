import { PushesAgentAPI, AgentAPI } from "./agent";
import { PushesCustomerAPI, CustomerAPI } from "./customer";
import { ConfigurationAPI } from "./configuration";
import * as ConfigurationObjects from "./configuration/structures";
import { APIType, RtmClient, StandardAdapter, WebClient } from "./clients";
import { TokenGetter } from "./authorization";
import { WebSocket } from "isomorphic-ws";
import { buildURLForRTM } from "./internal/url";

export const Agent = {
  Web: (tokenGetter: TokenGetter, clientID: string): AgentAPI<"web"> => {
    const client = new WebClient(APIType.AgentAPI, tokenGetter, { clientID });
    return new AgentAPI(client);
  },
  RTM: (organizationID = ""): AgentAPI<"rtm"> => {
    const url = buildURLForRTM(organizationID, { type: APIType.AgentAPI });
    const client = new RtmClient(new StandardAdapter(new WebSocket(url)));
    client.connect();
    return new AgentAPI(client);
  },
  Pushes: PushesAgentAPI,
};

export const Customer = {
  Web: (tokenGetter: TokenGetter, clientID: string): CustomerAPI<"web"> => {
    const client = new WebClient(APIType.CustomerAPI, tokenGetter, { clientID });
    return new CustomerAPI(client);
  },
  RTM: (organizationID = ""): CustomerAPI<"rtm"> => {
    const url = buildURLForRTM(organizationID, { type: APIType.CustomerAPI });
    const client = new RtmClient(new StandardAdapter(new WebSocket(url)));
    client.connect();
    return new CustomerAPI(client);
  },
  Pushes: PushesCustomerAPI,
};

export const Configuration = {
  Web: (tokenGetter: TokenGetter, clientID: string): ConfigurationAPI => {
    const client = new WebClient(APIType.ConfigurationAPI, tokenGetter, { clientID });
    return new ConfigurationAPI(client);
  },
  Objects: ConfigurationObjects,
};

export * as Webhooks from "./webhooks";
export * as Auth from "./authorization";
export * as Objects from "./objects";
export * as Errors from "./errors";
