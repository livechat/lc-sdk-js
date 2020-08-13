import AgentWeb from "./src/agent/web";
import AgentRTM from "./src/agent/rtm";

import CustomerWeb from "./src/customer/web";
import CustomerRTM from "./src/customer/rtm";
import ConfigurationAPI from "./src/configuration";

export const Agent = {
  Web: AgentWeb,
  RTM: AgentRTM,
};
export const Customer = {
  Web: CustomerWeb,
  RTM: CustomerRTM,
};
export const Configuration = {
  Web: ConfigurationAPI,
};

export * as Webhooks from "./src/webhooks";
export * as Auth from "./src/authorization";
