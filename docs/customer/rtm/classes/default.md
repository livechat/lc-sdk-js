[**@livechat/lc-sdk-js**](../../../README.md)

***

[@livechat/lc-sdk-js](../../../README.md) / [customer/rtm](../README.md) / default

# Class: default

Defined in: [customer/rtm.ts:30](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L30)

## Extends

- [`RTMAPI`](../../../internal/classes/RTMAPI.md)

## Constructors

### Constructor

> **new default**(`webSocketClass`, `tokenGetter`, `options?`): `RTM`

Defined in: [customer/rtm.ts:31](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L31)

#### Parameters

##### webSocketClass

`any`

##### tokenGetter

[`TokenGetter`](../../../authorization/token_getter/type-aliases/TokenGetter.md)

##### options?

[`RTMAPIOptions`](../../structures/structures/interfaces/RTMAPIOptions.md)

#### Returns

`RTM`

#### Overrides

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`constructor`](../../../internal/classes/RTMAPI.md#constructor)

## Properties

### APIURL

> **APIURL**: `string`

Defined in: [internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L80)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`APIURL`](../../../internal/classes/RTMAPI.md#apiurl)

***

### author\_id?

> `optional` **author\_id?**: `string`

Defined in: [internal/index.ts:87](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L87)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`author_id`](../../../internal/classes/RTMAPI.md#author_id)

***

### heartbeatInterval?

> `optional` **heartbeatInterval?**: `number`

Defined in: [internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L84)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`heartbeatInterval`](../../../internal/classes/RTMAPI.md#heartbeatinterval)

***

### requestsQueue

> **requestsQueue**: `any` = `{}`

Defined in: [internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L85)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`requestsQueue`](../../../internal/classes/RTMAPI.md#requestsqueue)

***

### socket?

> `optional` **socket?**: `any`

Defined in: [internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L83)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`socket`](../../../internal/classes/RTMAPI.md#socket)

***

### subscribedPushes

> **subscribedPushes**: `Map`\<`string`, `pushCallback`\>

Defined in: [internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L86)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`subscribedPushes`](../../../internal/classes/RTMAPI.md#subscribedpushes)

***

### tokenGetter

> `protected` **tokenGetter**: [`TokenGetter`](../../../authorization/token_getter/type-aliases/TokenGetter.md)

Defined in: [internal/index.ts:91](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L91)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`tokenGetter`](../../../internal/classes/RTMAPI.md#tokengetter)

***

### type

> **type**: `apiType`

Defined in: [internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L82)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`type`](../../../internal/classes/RTMAPI.md#type)

***

### version

> **version**: `string`

Defined in: [internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L81)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`version`](../../../internal/classes/RTMAPI.md#version)

***

### webSocketClass

> `protected` `readonly` **webSocketClass**: `any`

Defined in: [internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L90)

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`webSocketClass`](../../../internal/classes/RTMAPI.md#websocketclass)

## Methods

### acceptGreeting()

> **acceptGreeting**(`greeting_id`, `unique_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:361](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L361)

Marks an incoming greeting as seen.

#### Parameters

##### greeting\_id

`number`

number representing type of a greeting

##### unique\_id

`string`

specific greeting event ID

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### activateCustomerPage()

> **activateCustomerPage**(): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:262](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L262)

Marks the current Customer's page tab as active (focused)

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### cancelGreeting()

> **cancelGreeting**(`unique_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:370](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L370)

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

#### Parameters

##### unique\_id

`string`

specific greeting ID

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### checkGoals()

> **checkGoals**(`session_fields`, `group_id`, `page_url`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:314](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L314)

Customer can use this method to trigger checking if goals were achieved.
Then, Agents receive the information. You should call this method to provide goals
parameters for the server when the customers limit is reached. Works only for offline Customers.

#### Parameters

##### session\_fields

`object`[]

object enclosed key:value pairs

##### group\_id

`number`

group id to check goals in

##### page\_url

`number`

page URL

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### connect()

> **connect**(): `Promise`\<`void`\>

Defined in: [internal/index.ts:102](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L102)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`connect`](../../../internal/classes/RTMAPI.md#connect)

***

### deactivateChat()

> **deactivateChat**(`id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:110](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L110)

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

##### id

`string`

chat ID to deactivate

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deactivateCustomerPage()

> **deactivateCustomerPage**(): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:269](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L269)

Marks the current Customer's page tab as inactive (unfocused)

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteChatProperties()

> **deleteChatProperties**(`id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:162](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L162)

Deletes chat properties

#### Parameters

##### id

`string`

chat to delete properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteEvent()

> **deleteEvent**(`chat_id`, `thread_id`, `event_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:242](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L242)

Deletes event

#### Parameters

##### chat\_id

`string`

chat ID of event to delete

##### thread\_id

`string`

thread ID of event to delete

##### event\_id

`string`

ID of event to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteEventProperties()

> **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:222](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L222)

Deletes event properties

#### Parameters

##### chat\_id

`string`

chat ID of event to delete

##### thread\_id

`string`

thread ID of event to delete

##### event\_id

`string`

event to delete properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteThreadProperties()

> **deleteThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:186](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L186)

Deletes thread properties

#### Parameters

##### chat\_id

`string`

chat ID of thread to delete

##### thread\_id

`string`

thread to delete properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### getChat()

> **getChat**(`chat_id`, `thread_id?`): `Promise`\<[`GetChatResponse`](../../structures/responses/interfaces/GetChatResponse.md)\>

Defined in: [customer/rtm.ts:85](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L85)

It returns a thread that the current Customer has access to in a given chat.

#### Parameters

##### chat\_id

`string`

ID of a chat to get

##### thread\_id?

`string`

thread ID to get (if not provided, last thread is returned)

#### Returns

`Promise`\<[`GetChatResponse`](../../structures/responses/interfaces/GetChatResponse.md)\>

***

### getCustomer()

> **getCustomer**(): `Promise`\<[`CustomerParameters`](../../structures/structures/interfaces/CustomerParameters.md)\>

Defined in: [customer/rtm.ts:292](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L292)

Returns the info about the Customer requesting it.

#### Returns

`Promise`\<[`CustomerParameters`](../../structures/structures/interfaces/CustomerParameters.md)\>

***

### getForm()

> **getForm**(`group_id`, `type`): `Promise`\<[`GetFormResponse`](../../structures/responses/interfaces/GetFormResponse.md)\>

Defined in: [customer/rtm.ts:327](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L327)

Returns an empty ticket form of a prechat or postchat survey.

#### Parameters

##### group\_id

`number`

= group id to get form for

##### type

`string`

prechat or postchat

#### Returns

`Promise`\<[`GetFormResponse`](../../structures/responses/interfaces/GetFormResponse.md)\>

***

### getURLInfo()

> **getURLInfo**(`url`): `Promise`\<[`GetURLInfoResponse`](../../structures/responses/interfaces/GetURLInfoResponse.md)\>

Defined in: [customer/rtm.ts:343](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L343)

It returns the info on a given URL.

#### Parameters

##### url

`string`

URL to get info about

#### Returns

`Promise`\<[`GetURLInfoResponse`](../../structures/responses/interfaces/GetURLInfoResponse.md)\>

***

### listChats()

> **listChats**(`opts?`): `Promise`\<[`ListChatsResponse`](../../structures/responses/interfaces/ListChatsResponse.md)\>

Defined in: [customer/rtm.ts:67](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L67)

It returns chat info for the chats a Customer participated in.

#### Parameters

##### opts?

[`ListChatParameters`](../../structures/structures/interfaces/ListChatParameters.md)

set of filters and pagination to limit returned entries

#### Returns

`Promise`\<[`ListChatsResponse`](../../structures/responses/interfaces/ListChatsResponse.md)\>

***

### listGroupStatuses()

> **listGroupStatuses**(`param`): `Promise`\<[`ListGroupStatusesResponse`](../../structures/responses/interfaces/ListGroupStatusesResponse.md)\>

Defined in: [customer/rtm.ts:300](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L300)

Lists statuses of groups.

#### Parameters

##### param

`boolean` \| `number`[]

either boolean switch for all groups or list of group ID's to check

#### Returns

`Promise`\<[`ListGroupStatusesResponse`](../../structures/responses/interfaces/ListGroupStatusesResponse.md)\>

***

### listThreads()

> **listThreads**(`chat_id`, `opts?`): `Promise`\<[`ListThreadsResponse`](../../structures/responses/interfaces/ListThreadsResponse.md)\>

Defined in: [customer/rtm.ts:76](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L76)

Returns threads that the current Customer has access to in a given chat.

#### Parameters

##### chat\_id

`string`

chat ID to get threads from

##### opts?

[`ListThreadsParameters`](../../structures/structures/interfaces/ListThreadsParameters.md)

additional options like pagination and sorting

#### Returns

`Promise`\<[`ListThreadsResponse`](../../structures/responses/interfaces/ListThreadsResponse.md)\>

***

### login()

> **login**(`loginData?`): `Promise`\<[`LoginResponse`](../../structures/responses/interfaces/LoginResponse.md)\>

Defined in: [customer/rtm.ts:51](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L51)

It returns the initial state of the current Customer.
Note: uses the access token from TokenGetter provided in the constructor.

#### Parameters

##### loginData?

[`LoginRequest`](../../structures/structures/interfaces/LoginRequest.md)

optional object with login parameters

#### Returns

`Promise`\<[`LoginResponse`](../../structures/responses/interfaces/LoginResponse.md)\>

***

### markEventsAsSeen()

> **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:352](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L352)

Marks events as seen by Agent.

#### Parameters

##### chat\_id

`string`

chat to mark events

##### seen\_up\_to

`string`

date up to which mark events

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### on()

> **on**\<`P`\>(`push`, `handler`): () => `void`

Defined in: [customer/rtm.ts:41](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L41)

Allows to subscribe a handler for a given push. Returns function to unsubscribe.
Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.

#### Type Parameters

##### P

`P`

#### Parameters

##### push

[`Pushes`](../../structures/pushes/enumerations/Pushes.md)

push name to subscribe to

##### handler

(`payload`) => `void`

function receiving push payload

#### Returns

() => `void`

***

### requestWelcomeMessage()

> **requestWelcomeMessage**(`opts?`): `Promise`\<[`RequestWelcomeMessageResponse`](../../structures/responses/interfaces/RequestWelcomeMessageResponse.md)\>

Defined in: [customer/rtm.ts:335](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L335)

Requests a welcome message.

#### Parameters

##### opts?

[`RequestWelcomeMessageParameters`](../../structures/structures/interfaces/RequestWelcomeMessageParameters.md)

options like id of previous welcome message or group id

#### Returns

`Promise`\<[`RequestWelcomeMessageResponse`](../../structures/responses/interfaces/RequestWelcomeMessageResponse.md)\>

***

### resumeChat()

> **resumeChat**(`param`): `Promise`\<[`ResumeChatResponse`](../../structures/responses/interfaces/ResumeChatResponse.md)\>

Defined in: [customer/rtm.ts:101](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L101)

Restarts an archived chat

#### Parameters

##### param

`string` \| [`ResumeChatParameters`](../../structures/structures/interfaces/ResumeChatParameters.md)

either string ID of a chat to activate or full initial chat object

#### Returns

`Promise`\<[`ResumeChatResponse`](../../structures/responses/interfaces/ResumeChatResponse.md)\>

***

### send()

> **send**(`action`, `payload`): `Promise`\<`any`\>

Defined in: [internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L157)

#### Parameters

##### action

`string`

##### payload

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`send`](../../../internal/classes/RTMAPI.md#send)

***

### sendEvent()

> **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`\<[`SendEventResponse`](../../structures/responses/interfaces/SendEventResponse.md)\>

Defined in: [customer/rtm.ts:122](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L122)

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

#### Parameters

##### chat\_id

`string`

chat to send event to

##### event

[`RequestEvent`](../../structures/events/type-aliases/RequestEvent.md)

Event request object

##### attach\_to\_last\_thread?

`boolean`

if true, adds event to last inactive thread

#### Returns

`Promise`\<[`SendEventResponse`](../../structures/responses/interfaces/SendEventResponse.md)\>

***

### sendRichMessagePostback()

> **sendRichMessagePostback**(`opts`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:134](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L134)

Sends postback for rich message

#### Parameters

##### opts

[`SendRichMessagePostbackParameters`](../../structures/structures/interfaces/SendRichMessagePostbackParameters.md)

postback data

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### sendSneakPeek()

> **sendSneakPeek**(`chat_id`, `sneak_peek_text`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:144](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L144)

Sends a sneak peek to a chat.

#### Parameters

##### chat\_id

`string`

chat to send sneak peek to

##### sneak\_peek\_text

`string`

text to sneak peek

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### setAuthorId()

> **setAuthorId**(`author_id?`): `void`

Defined in: [internal/index.ts:191](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L191)

#### Parameters

##### author\_id?

`string`

#### Returns

`void`

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`setAuthorId`](../../../internal/classes/RTMAPI.md#setauthorid)

***

### setCustomerSessionFields()

> **setCustomerSessionFields**(`session_fields`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:285](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L285)

Sets session fields for Customer.

#### Parameters

##### session\_fields

`object`[]

fields to set in form of object enclosed key:value pairs

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### startChat()

> **startChat**(`opts?`): `Promise`\<[`StartChatResponse`](../../structures/responses/interfaces/StartChatResponse.md)\>

Defined in: [customer/rtm.ts:93](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L93)

Starts a chat

#### Parameters

##### opts?

[`StartChatParameters`](../../structures/structures/interfaces/StartChatParameters.md)

options like initial chat data or continuous switch

#### Returns

`Promise`\<[`StartChatResponse`](../../structures/responses/interfaces/StartChatResponse.md)\>

***

### subscribePush()

> **subscribePush**\<`P`\>(`push`, `callback`): `void`

Defined in: [internal/index.ts:177](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L177)

#### Type Parameters

##### P

`P`

#### Parameters

##### push

`string`

##### callback

(`payload`) => `void`

#### Returns

`void`

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`subscribePush`](../../../internal/classes/RTMAPI.md#subscribepush)

***

### unsubscribePush()

> **unsubscribePush**(`push`): `void`

Defined in: [internal/index.ts:187](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L187)

#### Parameters

##### push

`string`

#### Returns

`void`

#### Inherited from

[`RTMAPI`](../../../internal/classes/RTMAPI.md).[`unsubscribePush`](../../../internal/classes/RTMAPI.md#unsubscribepush)

***

### updateChatProperties()

> **updateChatProperties**(`id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:153](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L153)

Updates chat properties

#### Parameters

##### id

`string`

chat to update properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateCustomer()

> **updateCustomer**(`opts`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:277](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L277)

Updates Customer's properties.

#### Parameters

##### opts

[`CustomerParameters`](../../structures/structures/interfaces/CustomerParameters.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateCustomerPage()

> **updateCustomerPage**(`url`, `title?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:255](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L255)

Updates the page URL and title

#### Parameters

##### url

`string`

page URL

##### title?

`string`

page title

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateEventProperties()

> **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:201](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L201)

Updates event properties

#### Parameters

##### chat\_id

`string`

chat ID of event to update

##### thread\_id

`string`

thread ID of event to update

##### event\_id

`string`

event to update properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateThreadProperties()

> **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/rtm.ts:172](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/rtm.ts#L172)

Updates thread properties

#### Parameters

##### chat\_id

`string`

chat ID of thread to update

##### thread\_id

`string`

thread to update properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>
