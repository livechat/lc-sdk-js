import { Agent, Customer } from "./index";
import { Event } from "./src/objects";
const {IncomingEvent} = Agent.Objects.Pushes;
const aapi = new Agent.RTM();
const capi = new Customer.RTM(1234567890);

(async () => {
  Promise.all([aapi.connect(), capi.connect()])
    .then(() =>
      Promise.all([
        aapi.login("Bearer dal:xDDDDDDDDDDDDDD"),
        capi.login("Bearer dal:XDDDDDDDDDDDDDD"),
      ])
    )
    .then(async () => {
      let { chat_id } = await capi.startChat();
      aapi.on(IncomingEvent, (event: any) => {
        aapi.sendEvent(chat_id, {
          type: "message",
          text: "agent msg 1",
        } as Event);
      });
      await capi.sendEvent(chat_id, {
        type: "message",
        text: "customer msg 1",
      } as Event);
    })
    .then(() => aapi.logout());
})();
