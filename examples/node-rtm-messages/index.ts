import { Agent, Customer } from "@livechat/lc-sdk-js";
import WebSocket from "ws";

const { IncomingEvent } = Agent.Objects.Pushes;
const agentAPI = new Agent.RTM(WebSocket);
const customerAPI = new Customer.RTM(WebSocket, 1234567890);

(async () => {
  Promise.all([agentAPI.connect(), customerAPI.connect()])
    .then(() => Promise.all([agentAPI.login("Bearer dal:token"), customerAPI.login("Bearer dal:token")]))
    .then(async () => {
      const { chat_id } = await customerAPI.startChat();

      agentAPI.on(IncomingEvent, () => {
        agentAPI.sendEvent(chat_id, {
          type: "message",
          text: "agent msg 1",
        });
      });

      await customerAPI.sendEvent(chat_id, {
        type: "message",
        text: "customer msg 1",
      });
    })
    .then(() => agentAPI.logout());
})();
