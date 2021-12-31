import { Agent, Customer, Objects } from "./dist/cjs";

const agentAPI = Agent.RTM();
const customerAPI = Customer.RTM('a24e2422-db10-4714-9852-dd74e0ad6420');

(async () => {
  await Promise.all([
    agentAPI.login("Bearer access_token"),
    customerAPI.login("Bearer access_token"),
  ])

  const { chat_id } = await customerAPI.startChat();
  agentAPI.on(Agent.Pushes.IncomingEvent, () => {
    agentAPI.sendEvent(chat_id, {
      type: "message",
      text: "agent msg 1",
    } as Objects.Event);
  })

  customerAPI.sendEvent(chat_id, {
    type: "message",
    text: "customer msg 1",
  } as Objects.Event);

  await agentAPI.logout();
})();