import { Agent, Customer } from "./index";
import { Event } from "./src/objects";

const { IncomingEvent } = Agent.Objects.Pushes;
const agentAPI = new Agent.RTM();
const customerAPI = new Customer.RTM("a24e2422-db10-4714-9852-dd74e0ad6420");

(async () => {
  await Promise.all([agentAPI.connect(), customerAPI.connect()]);

  await Promise.all([agentAPI.login("Bearer dal:xDDDDDDDDDDDDDD"), customerAPI.login("Bearer dal:XDDDDDDDDDDDDDD")]);

  const { chat_id } = await customerAPI.startChat();
  agentAPI.on(IncomingEvent, () => {
    agentAPI.sendEvent(chat_id, {
      type: "message",
      text: "agent msg 1",
    } as Event);
  });

  customerAPI.sendEvent(chat_id, {
    type: "message",
    text: "customer msg 1",
  } as Event);

  await agentAPI.logout();
})();
