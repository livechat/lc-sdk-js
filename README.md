# LiveChat Platform API SDK for Javascript

![](https://www.livechat.com/new-logo/livechat.7ac63e803eb8b626fc246823a2703d3335fed9b55c30df89dde74a336941f2a7.svg)

![Bundle Size](https://img.shields.io/bundlephobia/min/@livechat/lc-sdk-js?style=for-the-badge) ![Downloads](https://img.shields.io/npm/dy/@livechat/lc-sdk-js?style=for-the-badge) ![License](https://img.shields.io/github/license/livechat/lc-sdk-js?style=for-the-badge) ![Version](https://img.shields.io/npm/v/@livechat/lc-sdk-js?style=for-the-badge)

This Software Development Kit written in Typescript helps developers build external backend apps that 
extend LiveChat features. The SDK makes it easy to use [Agent Chat API](https://developers.livechat.com/docs/messaging/agent-chat-api), 
[Customer Chat API](https://developers.livechat.com/docs/messaging/customer-chat-api) and [Configuration API](https://developers.livechat.com/docs/management/configuration-api).

## Installation

This module is designed to be used using either browserify or Node.js it's released in the public npm registry and can be installed using:

```sh
npm install @livechat/lc-sdk-js
```

## Usage

First you need to know what API do you want to use (Agent Chat API, Customer Chat API or Configuration API). To create RTM connections to Agent or Customer Chat API you can use one of ours simplified factories:

```typescript
import { Agent, Customer } from "@livechat/lc-sdk-js"

const agentForRTM = Agent.RTM()
const customerForRTM = Customer.RTM()
```

Creating web clients is similar to creating RTM clients but additionally you need to define `TokenGetter`:

```typescript
import { Agent, Configuration, Customer, Auth } from "@livechat/lc-sdk-js"

const tokenGetter: Auth.TokenGetter = () => ({
  accessToken: '',
  region: '',
  organizationID: ''
})

const agentAPI = Agent.Web(tokenGetter, "clientID");
const customerAPI = Customer.Web(tokenGetter, "clientID")
const config = Configuration.Web(tokenGetter, "clientID");
```

We don't provide any methods for [Authorization methods](https://developers.livechat.com/docs/authorization/authorizing-api-calls) so getting and managing access tokens is your responsibility as the developer. 

To get access to more advanvaced config setup for web or rtm clients please look at the [`index.ts` file](https://github.com/livechat/lc-sdk-js/tree/master/src/index.ts). `WebClient` and `RtmClient` allow to change base URL, requested version or replace global `axios` with something different.

### Web communication

Agent Chat API, Customer Chat API and Configuration API allow to send requests over HTTP(S) protocol. Example of usage:

```typescript
import { Agent, Auth, Objects } from "@livechat/lc-sdk-js"

const tokenGetter: Auth.TokenGetter = () => ({
  accessToken: '',
  region: '',
  organizationID: ''
})

const agentAPI = Agent.Web(tokenGetter, "clientID");
agentAPI
  .setRoutingStatus(Objects.RoutingStatus.AcceptingChats, 'random_agent@livechat.com')
  .then(() => agentAPI.listRoutingStatuses())
  .then(response => {
    const agent = response.find(data => data.agent_id === 'random_agent@livechat.com')
    console.log(agent)
  })
```

### RTM communication

Agent Chat API and Customer Chat API allow to communicate over the websocket connection. 

```typescript
import { Agent, Customer, Objects } from "@livechat/lc-sdk-js"

const { IncomingEvent } = Agent.Pushes;
const agentAPI = Agent.RTM();
const customerAPI = Customer.RTM('a24e2422-db10-4714-9852-dd74e0ad6420');

(async () => {
  await Promise.all([
    agentAPI.login("Bearer access_token"),
    customerAPI.login("Bearer access_token"),
  ])

  const { chat_id } = await customerAPI.startChat();
  agentAPI.on(IncomingEvent, () => {
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
```

## Feedback

​If you find any bugs or have trouble implementing the code on your own, please create an issue or contact us [LiveChat for Developers](https://developers.livechatinc.com/).

## About LiveChat

LiveChat is an online customer service software with live support, help desk software, and web analytics capabilities. It's used by more than 30,000 companies all over the world. For more info, check out [LiveChat](https://livechat.com/).
