[@livechat/lc-sdk-js](../README.md) / [customer/web](../modules/customer_web.md) / default

# Class: default

[customer/web](../modules/customer_web.md).default

## Hierarchy

- [`WebAPI`](internal.WebAPI.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](customer_web.default.md#constructor)

### Properties

- [APIURL](customer_web.default.md#apiurl)
- [clientID](customer_web.default.md#clientid)
- [tokenGetter](customer_web.default.md#tokengetter)
- [type](customer_web.default.md#type)
- [version](customer_web.default.md#version)

### Methods

- [acceptGreeting](customer_web.default.md#acceptgreeting)
- [activateChat](customer_web.default.md#activatechat)
- [cancelGreeting](customer_web.default.md#cancelgreeting)
- [checkGoals](customer_web.default.md#checkgoals)
- [deactivateChat](customer_web.default.md#deactivatechat)
- [deleteChatProperties](customer_web.default.md#deletechatproperties)
- [deleteEventProperties](customer_web.default.md#deleteeventproperties)
- [deleteThreadProperties](customer_web.default.md#deletethreadproperties)
- [getChat](customer_web.default.md#getchat)
- [getCustomer](customer_web.default.md#getcustomer)
- [getForm](customer_web.default.md#getform)
- [getPredictedAgent](customer_web.default.md#getpredictedagent)
- [getURLInfo](customer_web.default.md#geturlinfo)
- [listChats](customer_web.default.md#listchats)
- [listGroupProperties](customer_web.default.md#listgroupproperties)
- [listGroupStatuses](customer_web.default.md#listgroupstatuses)
- [listLicenseProperties](customer_web.default.md#listlicenseproperties)
- [listThreads](customer_web.default.md#listthreads)
- [markEventsAsSeen](customer_web.default.md#markeventsasseen)
- [send](customer_web.default.md#send)
- [sendEvent](customer_web.default.md#sendevent)
- [sendRichMessagePostback](customer_web.default.md#sendrichmessagepostback)
- [sendSneakPeek](customer_web.default.md#sendsneakpeek)
- [setCustomerSessionFields](customer_web.default.md#setcustomersessionfields)
- [startChat](customer_web.default.md#startchat)
- [updateChatProperties](customer_web.default.md#updatechatproperties)
- [updateCustomer](customer_web.default.md#updatecustomer)
- [updateEventProperties](customer_web.default.md#updateeventproperties)
- [updateThreadProperties](customer_web.default.md#updatethreadproperties)
- [uploadFile](customer_web.default.md#uploadfile)

## Constructors

### constructor

• **new default**(`clientID`, `tokenGetter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientID` | `string` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization.md#tokengetter) |

#### Overrides

[WebAPI](internal.WebAPI.md).[constructor](internal.WebAPI.md#constructor)

#### Defined in

[customer/web.ts:29](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L29)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L11)

___

### clientID

• **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L12)

___

### tokenGetter

• **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L15)

___

### type

• **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L14)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L13)

## Methods

### acceptGreeting

▸ **acceptGreeting**(`greeting_id`, `unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Marks an incoming greeting as seen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `greeting_id` | `number` | number representing type of a greeting |
| `unique_id` | `string` | specific greeting event ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:343](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L343)

___

### activateChat

▸ **activateChat**(`param`): `Promise`<[`ActivateChatResponse`](../interfaces/customer_structures.ActivateChatResponse.md)\>

Restarts an archived chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `string` \| [`ActivateChatParameters`](../interfaces/customer_structures.ActivateChatParameters.md) | either string ID of a chat to activate or full initial chat object |

#### Returns

`Promise`<[`ActivateChatResponse`](../interfaces/customer_structures.ActivateChatResponse.md)\>

#### Defined in

[customer/web.ts:71](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L71)

___

### cancelGreeting

▸ **cancelGreeting**(`unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unique_id` | `string` | specific greeting ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:352](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L352)

___

### checkGoals

▸ **checkGoals**(`session_fields`, `group_id`, `page_url`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Customer can use this method to trigger checking if goals were achieved.
Then, Agents receive the information. You should call this method to provide goals
parameters for the server when the customers limit is reached. Works only for offline Customers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session_fields` | `object`[] | object enclosed key:value pairs |
| `group_id` | `number` | group id to check goals in |
| `page_url` | `number` | page URL |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:297](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L297)

___

### deactivateChat

▸ **deactivateChat**(`chat_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID to deactivate |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:80](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L80)

___

### deleteChatProperties

▸ **deleteChatProperties**(`chat_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deletes chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to delete properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:147](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L147)

___

### deleteEventProperties

▸ **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deletes event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to delete |
| `thread_id` | `string` | thread ID of event to delete |
| `event_id` | `string` | event to delete properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:207](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L207)

___

### deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deletes thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to delete |
| `thread_id` | `string` | thread to delete properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:171](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L171)

___

### getChat

▸ **getChat**(`chat_id`, `thread_id?`): `Promise`<[`GetChatResponse`](../interfaces/customer_structures.GetChatResponse.md)\>

It returns a thread that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | ID of a chat to get |
| `thread_id?` | `string` | thread ID to get (if not provided, last thread is returned) |

#### Returns

`Promise`<[`GetChatResponse`](../interfaces/customer_structures.GetChatResponse.md)\>

#### Defined in

[customer/web.ts:55](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L55)

___

### getCustomer

▸ **getCustomer**(): `Promise`<[`CustomerParameters`](../interfaces/customer_structures.CustomerParameters.md)\>

Returns the info about the Customer requesting it.

#### Returns

`Promise`<[`CustomerParameters`](../interfaces/customer_structures.CustomerParameters.md)\>

#### Defined in

[customer/web.ts:275](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L275)

___

### getForm

▸ **getForm**(`group_id`, `type`): `Promise`<[`GetFormResponse`](../interfaces/customer_structures.GetFormResponse.md)\>

Returns an empty ticket form of a prechat or postchat survey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | = group id to get form for |
| `type` | `string` | prechat or postchat |

#### Returns

`Promise`<[`GetFormResponse`](../interfaces/customer_structures.GetFormResponse.md)\>

#### Defined in

[customer/web.ts:309](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L309)

___

### getPredictedAgent

▸ **getPredictedAgent**(): `Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures.GetPredictedAgentResponse.md)\>

Gets the predicted Agent - the one the Customer will chat with when the chat starts.
To use this method, the Customer needs to be logged in, which can be done via the login method.

#### Returns

`Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures.GetPredictedAgentResponse.md)\>

#### Defined in

[customer/web.ts:317](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L317)

___

### getURLInfo

▸ **getURLInfo**(`url`): `Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures.GetURLInfoResponse.md)\>

It returns the info on a given URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL to get info about |

#### Returns

`Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures.GetURLInfoResponse.md)\>

#### Defined in

[customer/web.ts:325](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L325)

___

### listChats

▸ **listChats**(`opts?`): `Promise`<[`ListChatsResponse`](../interfaces/customer_structures.ListChatsResponse.md)\>

It returns summaries of the chats a Customer participated in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`ListChatParameters`](../interfaces/customer_structures.ListChatParameters.md) | set of filters and pagination to limit returned entries |

#### Returns

`Promise`<[`ListChatsResponse`](../interfaces/customer_structures.ListChatsResponse.md)\>

#### Defined in

[customer/web.ts:37](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L37)

___

### listGroupProperties

▸ **listGroupProperties**(`license_id`, `group_id`, `namespace?`, `name?`): `Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

Returns the properties of a given group. It only returns the properties a Customer has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `license_id` | `number` | ID of license to return properties of |
| `group_id` | `number` | ID of group to return properties of |
| `namespace?` | `string` | property namespace |
| `name?` | `string` | property name |

#### Returns

`Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

#### Defined in

[customer/web.ts:242](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L242)

___

### listGroupStatuses

▸ **listGroupStatuses**(`param`): `Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures.ListGroupStatusesResponse.md)\>

Lists statuses of groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `boolean` \| `number`[] | either boolean switch for all groups or list of group ID's to check |

#### Returns

`Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures.ListGroupStatusesResponse.md)\>

#### Defined in

[customer/web.ts:283](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L283)

___

### listLicenseProperties

▸ **listLicenseProperties**(`license_id`, `namespace?`, `name?`): `Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

Returns the properties of a given license. It only returns the properties a Customer has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `license_id` | `number` | ID of license to return properties of |
| `namespace?` | `string` | property namespace |
| `name?` | `string` | property name |

#### Returns

`Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

#### Defined in

[customer/web.ts:227](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L227)

___

### listThreads

▸ **listThreads**(`chat_id`, `opts?`): `Promise`<[`ListThreadsResponse`](../interfaces/customer_structures.ListThreadsResponse.md)\>

Returns threads that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID to get threads from |
| `opts?` | [`ListThreadsParameters`](../interfaces/customer_structures.ListThreadsParameters.md) | additional options like pagination and sorting |

#### Returns

`Promise`<[`ListThreadsResponse`](../interfaces/customer_structures.ListThreadsResponse.md)\>

#### Defined in

[customer/web.ts:46](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L46)

___

### markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Marks events as seen by Agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to mark events |
| `seen_up_to` | `string` | date up to which mark events |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:334](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L334)

___

### send

▸ **send**(`name`, `req`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `req` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[WebAPI](internal.WebAPI.md).[send](internal.WebAPI.md#send)

#### Defined in

[internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L25)

___

### sendEvent

▸ **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`<[`SendEventResponse`](../interfaces/customer_structures.SendEventResponse.md)\>

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send event to |
| `event` | [`Event`](../modules/objects.md#event) | Event object |
| `attach_to_last_thread?` | `boolean` | if true, adds event to last inactive thread |

#### Returns

`Promise`<[`SendEventResponse`](../interfaces/customer_structures.SendEventResponse.md)\>

#### Defined in

[customer/web.ts:92](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L92)

___

### sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Sends postback for rich message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`SendRichMessagePostbackParameters`](../interfaces/customer_structures.SendRichMessagePostbackParameters.md) | postback data |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:119](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L119)

___

### sendSneakPeek

▸ **sendSneakPeek**(`chat_id`, `sneak_peek_text`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Sends a sneak peek to a chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send sneak peek to |
| `sneak_peek_text` | `string` | text to sneak peek |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:129](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L129)

___

### setCustomerSessionFields

▸ **setCustomerSessionFields**(`session_fields`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Sets session fields for Customer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session_fields` | `object`[] | fields to set in form of object enclosed key:value pairs |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:268](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L268)

___

### startChat

▸ **startChat**(`opts?`): `Promise`<[`StartChatResponse`](../interfaces/customer_structures.StartChatResponse.md)\>

Starts a chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`StartChatParameters`](../interfaces/customer_structures.StartChatParameters.md) | options like initial chat data or continuous switch |

#### Returns

`Promise`<[`StartChatResponse`](../interfaces/customer_structures.StartChatResponse.md)\>

#### Defined in

[customer/web.ts:63](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L63)

___

### updateChatProperties

▸ **updateChatProperties**(`chat_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to update properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:138](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L138)

___

### updateCustomer

▸ **updateCustomer**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates Customer's properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`CustomerParameters`](../interfaces/customer_structures.CustomerParameters.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:260](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L260)

___

### updateEventProperties

▸ **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to update |
| `thread_id` | `string` | thread ID of event to update |
| `event_id` | `string` | event to update properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:186](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L186)

___

### updateThreadProperties

▸ **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to update |
| `thread_id` | `string` | thread to update properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:157](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L157)

___

### uploadFile

▸ **uploadFile**(`file`, `filename`): `Promise`<[`UploadFileResponse`](../interfaces/customer_structures.UploadFileResponse.md)\>

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Buffer` | path of file to upload or Buffer with content |
| `filename` | `string` | filename for uploaded file |

#### Returns

`Promise`<[`UploadFileResponse`](../interfaces/customer_structures.UploadFileResponse.md)\>

#### Defined in

[customer/web.ts:105](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/customer/web.ts#L105)
