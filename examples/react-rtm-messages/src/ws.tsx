import { Agent, Customer } from "@livechat/lc-sdk-js";
import { TokenGetter } from "@livechat/lc-sdk-js/src/authorization";

interface IncomingEventPush {
  chat_id: string,
  event: {
    type: string,
    author_id: string,
  }
}

function isCustomerMessage(push: IncomingEventPush, chatID: string, customerID: string): boolean {
  return push.chat_id === chatID && push.event.type === "message" && push.event.author_id === customerID;
}

export const initializeConnection = async (agentTokenGetter: TokenGetter, customerTokenGetter: TokenGetter) => {
  const agentRTM = new Agent.RTM(WebSocket, agentTokenGetter);
  const customerRTM = new Customer.RTM(WebSocket, customerTokenGetter);

  try {
    await agentRTM.connect().then(() => agentRTM.login());
  } catch (error) {
    throw new Error(`Unable to initialize Agent RTM connection: ${JSON.stringify(error)}`);
  }

  let customerID: string;
  try {
    await customerRTM.connect()
      .then(() => customerRTM.login())
      .then(res => {
        customerID = res.customer.id;
      });
  } catch (error) {
    throw new Error(`Unable to initialize Customer RTM connections: ${JSON.stringify(error)}`);
  }

  let chatID: string;
  try {
    chatID = await customerRTM.startChat().then(res => res.chat_id);
  } catch (error) {
    throw new Error(`Unable to start chat: ${JSON.stringify(error)}`);
  }

  await new Promise<void>((resolve) => {
    agentRTM.on(Agent.Objects.Pushes.IncomingEvent, (push: IncomingEventPush) => {
      if (isCustomerMessage(push, chatID, customerID)) {
        agentRTM.sendEvent(chatID, {
          type: "message",
          text: "agent msg 1",
        })
          .then(() => agentRTM.logout())
          .then(() => resolve());
      }

      console.log(`Agent RTM push: ${JSON.stringify(push)}`);
    });

    customerRTM.sendEvent(chatID, {
      type: "message",
      text: "customer msg 1",
    });
  });
};
