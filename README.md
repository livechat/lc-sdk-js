# LiveChat Platform API SDK for Javascript

This Software Development Kit written in Typescript helps developers build external backend apps that extend LiveChat features. The SDK makes it easy to use Agent Chat API, Customer Chat API and Configuration API.

## API protocol docs

For protocol documentation of LiveChat APIs, please go to [Livechat Platform Docs](https://developers.livechatinc.com/docs/).

## Technical docs

For technical documentation visit [docs](https://github.com/livechat/lc-sdk-js/blob/v3.4/docs/README.md)

## SDK version vs API version

Here is the relation between SDK versions and API versions:
* lc-sdk-js 3.x.x -> LiveChat API 3.3
* lc-sdk-js 4.x.x -> LiveChat API 3.4
* ...

All open versions of LiveChat API are available as git tags in lc-sdk-js. However, a developer-preview version (not completed yet, may introduce breaking changes in the future) is available in lc-sdk-js as a git branch.

## Installation

### npm

```bash
npm install --save @livechat/lc-sdk-js
```

## Authorization

Authorization in SDK is based on [TokenGetter](https://github.com/livechat/lc-sdk-js/blob/v3.4/src/authorization/token_getter.ts)
required in both Web and RTM API classes. Example token getter:

```javascript
const tokenGetter = () => ({
  accessToken: "dal:ab-Cd_dE40f9G3H297Ijkl6MN24",
  organizationID: "c31de08c-799b-488a-982a-8e64dbadbf5a",
  region: "dal",
  tokenType: "Bearer",
});
```

### Web API vs RTM API

In case of Web APIs, the example token getter corresponds to the following headers in requests:
* `Authorization: Bearer dal:ab-Cd_dE40f9G3H297Ijkl6MN24`
* `X-Region: dal`

In case of RTM APIs, the example token getter corresponds to:
* query string used when opening the WebSocket connection: `?organization_id=c31de08c-799b-488a-982a-8e64dbadbf5a&region=dal`
* token used in login method: `Bearer dal:ab-Cd_dE40f9G3H297Ijkl6MN24`

### Organization's region

For `Bearer` tokens, organization's region is the token prefix before the colon:
* accessToken: `dal:ab-Cd_dE40f9G3H297Ijkl6MN24` -> region: `dal`

If you need to find region
for [Personal Access Token (PAT)](https://platform.text.com/docs/authorization/agent-authorization#personal-access-tokens),
use [tokenGetterFromPAT](https://github.com/livechat/lc-sdk-js/blob/v3.4/src/authorization/personal_access_token.ts) helper.

## Browser and Node.js compatibility

Due to the absence of standard library WebSocket implementation in Node.js and presence of [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) class in browser environments,
using the RTM API requires the developer to pass an appropriate WebSocket implementation to the constructor of the RTM clients:

```javascript
import { Agent, Customer } from "@livechat/lc-sdk-js";

const agentTokenGetter = () => ...
const customerTokenGetter = () => ...

const agentAPI = new Agent.RTM(WebSocket, agentTokenGetter);
const customerAPI = new Customer.RTM(WebSocket, customerTokenGetter);
```

See the examples:

* [browser](https://github.com/livechat/lc-sdk-js/blob/v3.4/examples/react-rtm-messages/src/ws.tsx) - here we use the [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
* [Node.js](https://github.com/livechat/lc-sdk-js/blob/v3.4/examples/node-rtm-messages/index.ts) - here we recommend the [ws](https://www.npmjs.com/package/ws) package

## Feedback

If you find any bugs or have trouble implementing the code on your own, please create an issue or contact us [LiveChat for Developers](https://developers.livechatinc.com/).

## About LiveChat

LiveChat is an online customer service software with live support, help desk software, and web analytics capabilities. It's used by more than 30,000 companies all over the world. For more info, check out [LiveChat](https://livechat.com/).
