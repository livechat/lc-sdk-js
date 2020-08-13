import { Agent, Customer } from "./index";
import { Event } from "./src/objects";

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
      let chat: string;
      aapi.subscribeIncomingEvent(async (event: any) => {
        await aapi.sendEvent(chat, {
          type: "message",
          text: "agent msg 1",
        } as Event);
      });

      let { chat_id } = await capi.startChat();
      chat = chat_id;
      await capi.sendEvent(chat_id, {
        type: "message",
        text: "customer msg 1",
      } as Event);
    })
    .then(() => aapi.logout());
})();
