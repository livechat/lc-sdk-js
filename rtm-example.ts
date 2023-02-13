import { Agent, Customer } from "./index";
import { Event as AgentEvent } from "./src/agent/structures";
import { Event as CustomerEvent } from "./src/agent/structures";

const { IncomingEvent } = Agent.Objects.Pushes;
const agentAPI = new Agent.RTM();
const customerAPI = new Customer.RTM("a24e2422-db10-4714-9852-dd74e0ad6420");

(async () => {
  await Promise.all([agentAPI.connect(), customerAPI.connect()]);

  await Promise.all([agentAPI.login("Bearer dal:token"), customerAPI.login("Bearer dal:token")]);

  const { chat_id } = await customerAPI.startChat();
  agentAPI.on(IncomingEvent, () => {
    agentAPI.sendEvent(chat_id, {
      type: "message",
      text: "agent msg 1",
    });
  });

  customerAPI.sendEvent(chat_id, {
    type: "message",
    text: "customer msg 1",
  });

  await agentAPI.logout();
})();
