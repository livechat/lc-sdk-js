import { Agent, Customer } from "./index";
const { IncomingEvent } = Agent.Objects.Pushes;
const aapi = new Agent.RTM();
const capi = new Customer.RTM(1234567890);

(async () => {
  Promise.all([aapi.connect(), capi.connect()])
    .then(() => Promise.all([aapi.login("Bearer dal:token"), capi.login("Bearer dal:token")]))
    .then(async () => {
      let { chat_id } = await capi.startChat();
      aapi.on(IncomingEvent, () => {
        aapi.sendEvent(chat_id, {
          type: "message",
          text: "agent msg 1",
        });
      });
      await capi.sendEvent(chat_id, {
        type: "message",
        text: "customer msg 1",
      });
    })
    .then(() => aapi.logout());
})();
