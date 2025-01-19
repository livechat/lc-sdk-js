import WebSocket from "ws";
import { Agent, Customer } from "@livechat/lc-sdk-js";
import { TokenGetter, TokenType } from "@livechat/lc-sdk-js/src/authorization";
import { initCustomerTokenGetter } from "./customer";

const agentAccessToken = "<access_token>"; // e.g. dal:abc123abc123abc123abc123456
const agentTokenType: TokenType = "Bearer"; // Bearer or Basic

const organizationID = "<organization_id>";
const organizationRegion = "<region>"; // e.g. dal

const clientID = "<client_id>"; // your LiveChat integration client ID
const redirectURI = "<redirect_uri>"; // your LiveChat integration redirect URI

interface IncomingEventPush {
  chat_id: string;
  event: {
    type: string;
    author_id: string;
  };
}

function isCustomerMessage(push: IncomingEventPush, chatID: string, customerID: string): boolean {
  return push.chat_id === chatID && push.event.type === "message" && push.event.author_id === customerID;
}

(async function () {
  const agentTokenGetter: TokenGetter = () => ({
    accessToken: agentAccessToken,
    organizationID: organizationID,
    region: organizationRegion,
    tokenType: agentTokenType,
  });
  const customerTokenGetter = await initCustomerTokenGetter(organizationID, clientID, redirectURI);

  const agentRTM = new Agent.RTM(WebSocket, agentTokenGetter);
  const customerRTM = new Customer.RTM(WebSocket, customerTokenGetter);

  try {
    await agentRTM.connect().then(() => agentRTM.login());
  } catch (error) {
    throw new Error(`Unable to initialize Agent RTM connection: ${JSON.stringify(error)}`);
  }

  let customerID: string;
  try {
    await customerRTM
      .connect()
      .then(() => customerRTM.login())
      .then((res) => {
        customerID = res.customer.id;
      });
  } catch (error) {
    throw new Error(`Unable to initialize Customer RTM connections: ${JSON.stringify(error)}`);
  }

  let chatID: string;
  try {
    chatID = await customerRTM.startChat().then((res) => res.chat_id);
  } catch (error) {
    throw new Error(`Unable to start chat: ${JSON.stringify(error)}`);
  }

  await new Promise<void>((resolve) => {
    agentRTM.on(Agent.Objects.Pushes.IncomingEvent, (push: IncomingEventPush) => {
      if (isCustomerMessage(push, chatID, customerID)) {
        agentRTM
          .sendEvent(chatID, {
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
})().catch(console.log);
