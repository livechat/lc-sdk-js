import AgentWeb from "./src/agent/web";
import AgentRTM from "./src/agent/rtm";
import * as AgentObjects from "./src/agent/structures";

import CustomerWeb from "./src/customer/web";
import CustomerRTM from "./src/customer/rtm";
import * as CustomerObjects from "./src/customer/structures";

import ConfigurationAPI from "./src/configuration";
import * as ConfigurationObjects from "./src/configuration/structures";

export const Agent = {
  Web: AgentWeb,
  RTM: AgentRTM,
  Objects: AgentObjects,
};
export const Customer = {
  Web: CustomerWeb,
  RTM: CustomerRTM,
  Objects: CustomerObjects,
};
export const Configuration = {
  Web: ConfigurationAPI,
  Objects: ConfigurationObjects,
};

export * as Webhooks from "./src/webhooks";
export * as Auth from "./src/authorization";
