# LiveChat Platform API SDK for Javascript

This Software Development Kit written in Typescript helps developers build external backend apps that extend LiveChat features. The SDK makes it easy to use Agent Chat API, Customer Chat API and Configuration API.

## API protocol docs

For protocol documentation of LiveChat APIs, please go to [Livechat Platform Docs](https://developers.livechatinc.com/docs/).

## Technical docs

For technical documentation visit [docs](https://github.com/livechat/lc-sdk-js/blob/v3.6/docs/README.md)

## SDK version vs API version

Here is the relation between SDK versions and API versions:
* lc-sdk-js 3.x.x -> LiveChat API 3.3
* lc-sdk-js 4.x.x -> LiveChat API 3.4
* lc-sdk-js 5.x.x -> LiveChat API 3.5
* lc-sdk-js 6.x.x -> LiveChat API 3.6
* ...

All open versions of LiveChat API are available as git tags in lc-sdk-js. However, a developer-preview version (not completed yet, may introduce breaking changes in the future) is available in lc-sdk-js as a git branch.

## Installation

### npm

```bash
npm install --save @livechat/lc-sdk-js
```

## Browser and Node.js compatibility

Due to the absence of standard library WebSocket implementation in Node.js and presence of [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) class in browser environments,
using the RTM API requires the developer to pass an appropriate WebSocket implementation to the constructor of the RTM clients:

```javascript
import { Agent, Customer } from "@livechat/lc-sdk-js";

const agentAPI = new Agent.RTM(WebSocket);
const customerAPI = new Customer.RTM(WebSocket, "organization id");
```

See the examples:

* [browser](https://github.com/livechat/lc-sdk-js/blob/v3.6/examples/react-rtm-messages/src/ws.tsx) - here we use the [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
* [Node.js](https://github.com/livechat/lc-sdk-js/blob/v3.6/examples/node-rtm-messages/index.ts) - here we recommend the [ws](https://www.npmjs.com/package/ws) package

## Feedback

If you find any bugs or have trouble implementing the code on your own, please create an issue or contact us [LiveChat for Developers](https://developers.livechatinc.com/).

## About LiveChat

LiveChat is an online customer service software with live support, help desk software, and web analytics capabilities. It's used by more than 30,000 companies all over the world. For more info, check out [LiveChat](https://livechat.com/).
