[lc-sdk-js](README.md) › [Globals](globals.md)

# lc-sdk-js

# LiveChat Platform API SDK for JavaScript

This library is in alpha-phase and due to that, subject to breaking changes without further notice

# Installation
## npm
Package is not yet published in npm until the end of alpha phase

## manual
1. Clone repository
2. Run following commands:
  ```bash
  npm install
  npm run build
  ```
3. This will generate js files in `./lib` directory and SDK is ready to use
4. You can reference it in your `package.json`:
```json
{
  ...
  "dependecies": {
    "lc-sdk-js": "file:<path_to_sdk>"
  }
}
```

# Usage example

Check [LiveChat Platform documentation](https://developers.livechat.com/docs/) for details of API usage (authorization flow, methods etc.)

All methods are promise-based
```javascript
const lcSDK = require("lc-sdk-js");

const agentAPI = new lcSDK.AgentAPI("client_ID", () => ({
  licenseID: 1234,
  accessToken: "fake example token",
  region: "dal"
}));

// promise chaining
agentAPI.startChat()
  .then(({chat_id}) => {
    return agentAPI.sendEvent(chat_id, {
      type: "message",
      text: "message text",
      recipients: "all"
    })
  });
  
// async/await
const {chat_id} = await agentAPI.startChat();
await agentAPI.sendEvent(chat_id, {
      type: "message",
      text: "message text",
      recipients: "all"
    });
await agentAPI.deactivateChat(chat_id);
```
