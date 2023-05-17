import { Agent, Customer } from "@livechat/lc-sdk-js";

const { IncomingEvent } = Agent.Objects.Pushes;
const agentAPI = new Agent.RTM(WebSocket);
const customerAPI = new Customer.RTM(WebSocket, 1234567890);

export const initializeConnection = async () => {
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
}
