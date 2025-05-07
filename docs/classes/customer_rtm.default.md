[@livechat/lc-sdk-js](../README.md) / [customer/rtm](../modules/customer_rtm.md) / default

# Class: default

[customer/rtm](../modules/customer_rtm.md).default

## Hierarchy

- [`RTMAPI`](internal.RTMAPI.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](customer_rtm.default.md#constructor)

### Properties

- [APIURL](customer_rtm.default.md#apiurl)
- [author\_id](customer_rtm.default.md#author_id)
- [heartbeatInterval](customer_rtm.default.md#heartbeatinterval)
- [requestsQueue](customer_rtm.default.md#requestsqueue)
- [socket](customer_rtm.default.md#socket)
- [subscribedPushes](customer_rtm.default.md#subscribedpushes)
- [tokenGetter](customer_rtm.default.md#tokengetter)
- [type](customer_rtm.default.md#type)
- [version](customer_rtm.default.md#version)
- [webSocketClass](customer_rtm.default.md#websocketclass)

### Methods

- [acceptGreeting](customer_rtm.default.md#acceptgreeting)
- [cancelGreeting](customer_rtm.default.md#cancelgreeting)
- [checkGoals](customer_rtm.default.md#checkgoals)
- [connect](customer_rtm.default.md#connect)
- [deactivateChat](customer_rtm.default.md#deactivatechat)
- [deleteChatProperties](customer_rtm.default.md#deletechatproperties)
- [deleteEventProperties](customer_rtm.default.md#deleteeventproperties)
- [deleteThreadProperties](customer_rtm.default.md#deletethreadproperties)
- [getChat](customer_rtm.default.md#getchat)
- [getCustomer](customer_rtm.default.md#getcustomer)
- [getForm](customer_rtm.default.md#getform)
- [getPredictedAgent](customer_rtm.default.md#getpredictedagent)
- [getURLInfo](customer_rtm.default.md#geturlinfo)
- [listChats](customer_rtm.default.md#listchats)
- [listGroupStatuses](customer_rtm.default.md#listgroupstatuses)
- [listThreads](customer_rtm.default.md#listthreads)
- [login](customer_rtm.default.md#login)
- [markEventsAsSeen](customer_rtm.default.md#markeventsasseen)
- [on](customer_rtm.default.md#on)
- [resumeChat](customer_rtm.default.md#resumechat)
- [send](customer_rtm.default.md#send)
- [sendEvent](customer_rtm.default.md#sendevent)
- [sendRichMessagePostback](customer_rtm.default.md#sendrichmessagepostback)
- [sendSneakPeek](customer_rtm.default.md#sendsneakpeek)
- [setAuthorId](customer_rtm.default.md#setauthorid)
- [setCustomerSessionFields](customer_rtm.default.md#setcustomersessionfields)
- [startChat](customer_rtm.default.md#startchat)
- [subscribePush](customer_rtm.default.md#subscribepush)
- [unsubscribePush](customer_rtm.default.md#unsubscribepush)
- [updateChatProperties](customer_rtm.default.md#updatechatproperties)
- [updateCustomer](customer_rtm.default.md#updatecustomer)
- [updateEventProperties](customer_rtm.default.md#updateeventproperties)
- [updateThreadProperties](customer_rtm.default.md#updatethreadproperties)

## Constructors

### constructor

• **new default**(`webSocketClass`, `tokenGetter`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `webSocketClass` | `any` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter) |
| `options?` | [`RTMAPIOptions`](../interfaces/customer_structures_structures.RTMAPIOptions.md) |

#### Overrides

[RTMAPI](internal.RTMAPI.md).[constructor](internal.RTMAPI.md#constructor)

#### Defined in

[customer/rtm.ts:30](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L30)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[APIURL](internal.RTMAPI.md#apiurl)

#### Defined in

[internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L79)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[author_id](internal.RTMAPI.md#author_id)

#### Defined in

[internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L86)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `number`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[heartbeatInterval](internal.RTMAPI.md#heartbeatinterval)

#### Defined in

[internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L83)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[requestsQueue](internal.RTMAPI.md#requestsqueue)

#### Defined in

[internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L84)

___

### socket

• `Optional` **socket**: `any`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[socket](internal.RTMAPI.md#socket)

#### Defined in

[internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L82)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[subscribedPushes](internal.RTMAPI.md#subscribedpushes)

#### Defined in

[internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L85)

___

### tokenGetter

• `Protected` **tokenGetter**: [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter)

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[tokenGetter](internal.RTMAPI.md#tokengetter)

#### Defined in

[internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L90)

___

### type

• **type**: `apiType`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[type](internal.RTMAPI.md#type)

#### Defined in

[internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L81)

___

### version

• **version**: `string`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[version](internal.RTMAPI.md#version)

#### Defined in

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L80)

___

### webSocketClass

• `Protected` `Readonly` **webSocketClass**: `any`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[webSocketClass](internal.RTMAPI.md#websocketclass)

#### Defined in

[internal/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L89)

## Methods

### acceptGreeting

▸ **acceptGreeting**(`greeting_id`, `unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Marks an incoming greeting as seen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `greeting_id` | `number` | number representing type of a greeting |
| `unique_id` | `string` | specific greeting event ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:323](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L323)

___

### cancelGreeting

▸ **cancelGreeting**(`unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unique_id` | `string` | specific greeting ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:332](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L332)

___

### checkGoals

▸ **checkGoals**(`session_fields`, `group_id`, `page_url`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

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

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:276](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L276)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[connect](internal.RTMAPI.md#connect)

#### Defined in

[internal/index.ts:101](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L101)

___

### deactivateChat

▸ **deactivateChat**(`id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat ID to deactivate |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:109](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L109)

___

### deleteChatProperties

▸ **deleteChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deletes chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to delete properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:161](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L161)

___

### deleteEventProperties

▸ **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deletes event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to delete |
| `thread_id` | `string` | thread ID of event to delete |
| `event_id` | `string` | event to delete properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:221](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L221)

___

### deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deletes thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to delete |
| `thread_id` | `string` | thread to delete properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:185](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L185)

___

### getChat

▸ **getChat**(`chat_id`, `thread_id?`): `Promise`<[`GetChatResponse`](../interfaces/customer_structures_responses.GetChatResponse.md)\>

It returns a thread that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | ID of a chat to get |
| `thread_id?` | `string` | thread ID to get (if not provided, last thread is returned) |

#### Returns

`Promise`<[`GetChatResponse`](../interfaces/customer_structures_responses.GetChatResponse.md)\>

#### Defined in

[customer/rtm.ts:84](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L84)

___

### getCustomer

▸ **getCustomer**(): `Promise`<[`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md)\>

Returns the info about the Customer requesting it.

#### Returns

`Promise`<[`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md)\>

#### Defined in

[customer/rtm.ts:254](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L254)

___

### getForm

▸ **getForm**(`group_id`, `type`): `Promise`<[`GetFormResponse`](../interfaces/customer_structures_responses.GetFormResponse.md)\>

Returns an empty ticket form of a prechat or postchat survey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | = group id to get form for |
| `type` | `string` | prechat or postchat |

#### Returns

`Promise`<[`GetFormResponse`](../interfaces/customer_structures_responses.GetFormResponse.md)\>

#### Defined in

[customer/rtm.ts:289](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L289)

___

### getPredictedAgent

▸ **getPredictedAgent**(): `Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures_responses.GetPredictedAgentResponse.md)\>

Gets the predicted Agent - the one the Customer will chat with when the chat starts.
To use this method, the Customer needs to be logged in, which can be done via the login method.

#### Returns

`Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures_responses.GetPredictedAgentResponse.md)\>

#### Defined in

[customer/rtm.ts:297](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L297)

___

### getURLInfo

▸ **getURLInfo**(`url`): `Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures_responses.GetURLInfoResponse.md)\>

It returns the info on a given URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL to get info about |

#### Returns

`Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures_responses.GetURLInfoResponse.md)\>

#### Defined in

[customer/rtm.ts:305](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L305)

___

### listChats

▸ **listChats**(`opts?`): `Promise`<[`ListChatsResponse`](../interfaces/customer_structures_responses.ListChatsResponse.md)\>

It returns summaries of the chats a Customer participated in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`ListChatParameters`](../interfaces/customer_structures_structures.ListChatParameters.md) | set of filters and pagination to limit returned entries |

#### Returns

`Promise`<[`ListChatsResponse`](../interfaces/customer_structures_responses.ListChatsResponse.md)\>

#### Defined in

[customer/rtm.ts:66](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L66)

___

### listGroupStatuses

▸ **listGroupStatuses**(`param`): `Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures_responses.ListGroupStatusesResponse.md)\>

Lists statuses of groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `boolean` \| `number`[] | either boolean switch for all groups or list of group ID's to check |

#### Returns

`Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures_responses.ListGroupStatusesResponse.md)\>

#### Defined in

[customer/rtm.ts:262](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L262)

___

### listThreads

▸ **listThreads**(`chat_id`, `opts?`): `Promise`<[`ListThreadsResponse`](../interfaces/customer_structures_responses.ListThreadsResponse.md)\>

Returns threads that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID to get threads from |
| `opts?` | [`ListThreadsParameters`](../interfaces/customer_structures_structures.ListThreadsParameters.md) | additional options like pagination and sorting |

#### Returns

`Promise`<[`ListThreadsResponse`](../interfaces/customer_structures_responses.ListThreadsResponse.md)\>

#### Defined in

[customer/rtm.ts:75](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L75)

___

### login

▸ **login**(`loginData?`): `Promise`<[`LoginResponse`](../interfaces/customer_structures_responses.LoginResponse.md)\>

It returns the initial state of the current Customer.
Note: uses the access token from TokenGetter provided in the constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loginData?` | [`LoginRequest`](../interfaces/customer_structures_structures.LoginRequest.md) | optional object with login parameters |

#### Returns

`Promise`<[`LoginResponse`](../interfaces/customer_structures_responses.LoginResponse.md)\>

#### Defined in

[customer/rtm.ts:50](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L50)

___

### markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Marks events as seen by Agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to mark events |
| `seen_up_to` | `string` | date up to which mark events |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:314](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L314)

___

### on

▸ **on**<`P`\>(`push`, `handler`): () => `void`

Allows to subscribe a handler for a given push. Returns function to unsubscribe.
Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `push` | [`Pushes`](../enums/customer_structures_pushes.Pushes.md) | push name to subscribe to |
| `handler` | (`payload`: `P`) => `void` | function receiving push payload |

#### Returns

`fn`

▸ (): `void`

Allows to subscribe a handler for a given push. Returns function to unsubscribe.
Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.

##### Returns

`void`

#### Defined in

[customer/rtm.ts:40](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L40)

___

### resumeChat

▸ **resumeChat**(`param`): `Promise`<[`ResumeChatResponse`](../interfaces/customer_structures_responses.ResumeChatResponse.md)\>

Restarts an archived chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `string` \| [`ResumeChatParameters`](../interfaces/customer_structures_structures.ResumeChatParameters.md) | either string ID of a chat to activate or full initial chat object |

#### Returns

`Promise`<[`ResumeChatResponse`](../interfaces/customer_structures_responses.ResumeChatResponse.md)\>

#### Defined in

[customer/rtm.ts:100](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L100)

___

### send

▸ **send**(`action`, `payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `payload` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[send](internal.RTMAPI.md#send)

#### Defined in

[internal/index.ts:155](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L155)

___

### sendEvent

▸ **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`<[`SendEventResponse`](../interfaces/customer_structures_responses.SendEventResponse.md)\>

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send event to |
| `event` | [`RequestEvent`](../modules/customer_structures_events.md#requestevent) | Event request object |
| `attach_to_last_thread?` | `boolean` | if true, adds event to last inactive thread |

#### Returns

`Promise`<[`SendEventResponse`](../interfaces/customer_structures_responses.SendEventResponse.md)\>

#### Defined in

[customer/rtm.ts:121](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L121)

___

### sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Sends postback for rich message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`SendRichMessagePostbackParameters`](../interfaces/customer_structures_structures.SendRichMessagePostbackParameters.md) | postback data |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:133](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L133)

___

### sendSneakPeek

▸ **sendSneakPeek**(`chat_id`, `sneak_peek_text`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Sends a sneak peek to a chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send sneak peek to |
| `sneak_peek_text` | `string` | text to sneak peek |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:143](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L143)

___

### setAuthorId

▸ **setAuthorId**(`author_id?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author_id?` | `string` |

#### Returns

`void`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[setAuthorId](internal.RTMAPI.md#setauthorid)

#### Defined in

[internal/index.ts:186](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L186)

___

### setCustomerSessionFields

▸ **setCustomerSessionFields**(`session_fields`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Sets session fields for Customer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session_fields` | `object`[] | fields to set in form of object enclosed key:value pairs |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:247](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L247)

___

### startChat

▸ **startChat**(`opts?`): `Promise`<[`StartChatResponse`](../interfaces/customer_structures_responses.StartChatResponse.md)\>

Starts a chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`StartChatParameters`](../interfaces/customer_structures_structures.StartChatParameters.md) | options like initial chat data or continuous switch |

#### Returns

`Promise`<[`StartChatResponse`](../interfaces/customer_structures_responses.StartChatResponse.md)\>

#### Defined in

[customer/rtm.ts:92](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L92)

___

### subscribePush

▸ **subscribePush**<`P`\>(`push`, `callback`): `void`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |
| `callback` | (`payload`: `P`) => `void` |

#### Returns

`void`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[subscribePush](internal.RTMAPI.md#subscribepush)

#### Defined in

[internal/index.ts:175](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L175)

___

### unsubscribePush

▸ **unsubscribePush**(`push`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |

#### Returns

`void`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[unsubscribePush](internal.RTMAPI.md#unsubscribepush)

#### Defined in

[internal/index.ts:182](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/internal/index.ts#L182)

___

### updateChatProperties

▸ **updateChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to update properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:152](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L152)

___

### updateCustomer

▸ **updateCustomer**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates Customer's properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:239](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L239)

___

### updateEventProperties

▸ **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to update |
| `thread_id` | `string` | thread ID of event to update |
| `event_id` | `string` | event to update properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:200](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L200)

___

### updateThreadProperties

▸ **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to update |
| `thread_id` | `string` | thread to update properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/rtm.ts:171](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/customer/rtm.ts#L171)
