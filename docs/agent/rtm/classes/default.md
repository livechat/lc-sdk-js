[**@livechat/lc-sdk-js**](../../../README.md)

***

[@livechat/lc-sdk-js](../../../README.md) / [agent/rtm](../README.md) / default

# Class: default

Defined in: [agent/rtm.ts:35](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L35)

## Extends

- [`RTMAPI`](../../../internal/classes/RTMAPI.md)

## Constructors

### Constructor

> **new default**(`webSocketClass`, `tokenGetter`, `options?`): `RTM`

Defined in: [agent/rtm.ts:36](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L36)

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

### addUserToChat()

> **addUserToChat**(`chat_id`, `user_id`, `user_type`, `visibility`, `ignore_requester_presence?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:195](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L195)

Adds a user to the chat. You can't add more than one customer user type to the chat.

#### Parameters

##### chat\_id

`string`

chat to add user to

##### user\_id

`string`

user to add

##### user\_type

`string`

customer or agent

##### visibility

`string`

possible values: all, agents

##### ignore\_requester\_presence?

`boolean`

if true, allows to add user to chat even if the requester is not present in the chat

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### banCustomer()

> **banCustomer**(`id`, `days`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:407](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L407)

Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
and does not accept new ones during the ban lifespan.

#### Parameters

##### id

`string`

ID of customer to ban

##### days

`number`

ban duration in days

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### changePushNotifications()

> **changePushNotifications**(`change`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:72](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L72)

Change the firebase push notifications properties.

#### Parameters

##### change

[`ChangePushNotificationsRequest`](../../structures/structures/interfaces/ChangePushNotificationsRequest.md)

properties to change

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

> **deactivateChat**(`id`, `ignore_requester_presence?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:153](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L153)

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

##### id

`string`

chat ID to deactivate

##### ignore\_requester\_presence?

`boolean`

if true, allows to deactivate the chat even if the requester is not present in the chat

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteChatProperties()

> **deleteChatProperties**(`id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:281](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L281)

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

### deleteEventProperties()

> **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:341](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L341)

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

Defined in: [agent/rtm.ts:305](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L305)

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

### followChat()

> **followChat**(`id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:165](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L165)

Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.

#### Parameters

##### id

`string`

chat ID to follow

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### getChat()

> **getChat**(`chat_id`, `thread_id?`): `Promise`\<[`GetChatResponse`](../../structures/responses/interfaces/GetChatResponse.md)\>

Defined in: [agent/rtm.ts:116](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L116)

It returns a thread that the current Agent has access to in a given chat.

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

> **getCustomer**(`id`): `Promise`\<[`GetCustomerResponse`](../../structures/responses/interfaces/GetCustomerResponse.md)\>

Defined in: [agent/rtm.ts:388](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L388)

Returns the info about the Customer with a given id.

#### Parameters

##### id

`string`

customer ID to get

#### Returns

`Promise`\<[`GetCustomerResponse`](../../structures/responses/interfaces/GetCustomerResponse.md)\>

***

### listAgentsForTransfer()

> **listAgentsForTransfer**(`chat_id`): `Promise`\<[`AgentForTransfer`](../../structures/structures/interfaces/AgentForTransfer.md)[]\>

Defined in: [agent/rtm.ts:470](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L470)

It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
- The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
- Only chats with Customers are taken into account in total_active_chats.

#### Parameters

##### chat\_id

`string`

chat ID you want to transfer

#### Returns

`Promise`\<[`AgentForTransfer`](../../structures/structures/interfaces/AgentForTransfer.md)[]\>

***

### listArchives()

> **listArchives**(`opts?`): `Promise`\<[`ListArchivesResponse`](../../structures/responses/interfaces/ListArchivesResponse.md)\>

Defined in: [agent/rtm.ts:127](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L127)

It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.

The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
but each time with a different thread. The returned chat is a complete object, not only a chat info.

#### Parameters

##### opts?

[`ListArchivesParameters`](../../structures/structures/interfaces/ListArchivesParameters.md)

options like filters or pagination

#### Returns

`Promise`\<[`ListArchivesResponse`](../../structures/responses/interfaces/ListArchivesResponse.md)\>

***

### listChats()

> **listChats**(`opts?`): `Promise`\<[`ListChatsResponse`](../../structures/responses/interfaces/ListChatsResponse.md)\>

Defined in: [agent/rtm.ts:98](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L98)

It returns chat info for the chats an Agent has access to.

#### Parameters

##### opts?

[`ListChatParameters`](../../structures/structures/interfaces/ListChatParameters.md)

set of filters and pagination to limit returned entries

#### Returns

`Promise`\<[`ListChatsResponse`](../../structures/responses/interfaces/ListChatsResponse.md)\>

***

### listRoutingStatuses()

> **listRoutingStatuses**(`group_ids?`): `Promise`\<[`SetRoutingStatusResponse`](../../structures/responses/interfaces/SetRoutingStatusResponse.md)[]\>

Defined in: [agent/rtm.ts:478](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L478)

Returns the current routing status of each agent.

#### Parameters

##### group\_ids?

`number`[]

groups to list agent routing statuses from

#### Returns

`Promise`\<[`SetRoutingStatusResponse`](../../structures/responses/interfaces/SetRoutingStatusResponse.md)[]\>

***

### listThreads()

> **listThreads**(`chat_id`, `opts?`): `Promise`\<[`ListThreadsResponse`](../../structures/responses/interfaces/ListThreadsResponse.md)\>

Defined in: [agent/rtm.ts:107](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L107)

Returns threads that the current Agent has access to in a given chat.

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

Defined in: [agent/rtm.ts:56](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L56)

It returns the initial state of the current Agent.
Note: uses the access token from TokenGetter provided in the constructor.

#### Parameters

##### loginData?

[`LoginRequest`](../../structures/structures/interfaces/LoginRequest.md)

optional object with login parameters

#### Returns

`Promise`\<[`LoginResponse`](../../structures/responses/interfaces/LoginResponse.md)\>

***

### logout()

> **logout**(`agent_id?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:90](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L90)

Logs the Agent out.

#### Parameters

##### agent\_id?

`string`

specifies agent to be logged out. If empty, logs out the current agent.

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### markEventsAsSeen()

> **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:425](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L425)

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

### multicast()

> **multicast**(`recipients`, `content`, `type?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:460](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L460)

This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
For example, it could be used in an app that sends notifications to Agents,
when a certain condition is met (e.g. an important Customer started the chat).

#### Parameters

##### recipients

[`MulticastRecipients`](../../structures/structures/interfaces/MulticastRecipients.md)

who should receive multicast

##### content

`object`

= JSON content to send

##### type?

`string`

message type

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### on()

> **on**\<`P`\>(`push`, `handler`): () => `void`

Defined in: [agent/rtm.ts:46](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L46)

Allows to subscribe a handler for a given push. Returns function to unsubscribe.
Note: multiple subscriptions for the same push are not allowed in single websocket connection.

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

### removeUserFromChat()

> **removeUserFromChat**(`chat_id`, `user_id`, `ignore_requester_presence?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:217](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L217)

Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.

#### Parameters

##### chat\_id

`string`

chat to remove user from

##### user\_id

`string`

user to remove

##### ignore\_requester\_presence?

`boolean`

if true, allows to remove user from chat even if the requester is not present in the chat

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### requestThreadSummary()

> **requestThreadSummary**(`chat_id`, `thread_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:380](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L380)

Requests thread summary

#### Parameters

##### chat\_id

`string`

chat ID of thread to request summary for

##### thread\_id

`string`

thread to request summary for

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### resumeChat()

> **resumeChat**(`param`): `Promise`\<[`ResumeChatResponse`](../../structures/responses/interfaces/ResumeChatResponse.md)\>

Defined in: [agent/rtm.ts:143](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L143)

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

Defined in: [agent/rtm.ts:251](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L251)

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

### sendEventPreview()

> **sendEventPreview**(`chat_id`, `event`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:236](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L236)

Sends an Event object. Use this method to send a message preview by specifing the Message event type in the request.
This event is not saved in the chat.

#### Parameters

##### chat\_id

`string`

chat to send event to

##### event

[`RequestEvent`](../../structures/events/type-aliases/RequestEvent.md)

Event request object

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### sendRichMessagePostback()

> **sendRichMessagePostback**(`opts`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:263](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L263)

Sends postback for rich message

#### Parameters

##### opts

[`SendRichMessagePostbackParameters`](../../structures/structures/interfaces/SendRichMessagePostbackParameters.md)

postback data

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### sendThinkingIndicator()

> **sendThinkingIndicator**(`chat_id`, `opts?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:434](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L434)

Sends thinking indicator

#### Parameters

##### chat\_id

`string`

chat for thinking indicator

##### opts?

[`SendThinkingIndicatorParameters`](../../structures/structures/interfaces/SendThinkingIndicatorParameters.md)

thinking indicator options like title, description, visibility and custom ID

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### sendTypingIndicator()

> **sendTypingIndicator**(`chat_id`, `is_typing`, `visibility?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:444](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L444)

Sends typing indicator

#### Parameters

##### chat\_id

`string`

chat for typing indicator

##### is\_typing

`boolean`

status of typing

##### visibility?

`string`

possible values: all, agents

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

### setAwayStatus()

> **setAwayStatus**(`away`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:82](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L82)

Sets an Agent's connection to the away state. You can use this method to manipulate the Agent's status.
The method works per connection - all connections an Agent has (desktop, mobile, etc) must be in the away state
for the Agent's status to be changed to not_accepting_chats.

#### Parameters

##### away

`boolean`

away status

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### setRoutingStatus()

> **setRoutingStatus**(`status`, `agent_id?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:416](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L416)

Changes the status of an Agent or a Bot Agent.

#### Parameters

##### status

[`RoutingStatus`](../../structures/structures/enumerations/RoutingStatus.md)

status to set

##### agent\_id?

`string`

ID of agent to update status

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### startChat()

> **startChat**(`opts?`): `Promise`\<[`StartChatResponse`](../../structures/responses/interfaces/StartChatResponse.md)\>

Defined in: [agent/rtm.ts:135](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L135)

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

### tagThread()

> **tagThread**(`chat_id`, `thread_id`, `tag`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:361](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L361)

Tags thread with given tag

#### Parameters

##### chat\_id

`string`

chat ID of thread to tag

##### thread\_id

`string`

thread to tag

##### tag

`string`

tag to add

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### transferChat()

> **transferChat**(`id`, `opts?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:183](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L183)

Transfers a chat to an Agent or a group.

#### Parameters

##### id

`string`

chat to transfer

##### opts?

[`TransferChatParameters`](../../structures/structures/interfaces/TransferChatParameters.md)

specific request flags

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### unfollowChat()

> **unfollowChat**(`id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:174](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L174)

Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
will be sent to the requester. Chat members cannot unfollow the chat.

#### Parameters

##### id

`string`

chat ID to unfollow

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

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

### untagThread()

> **untagThread**(`chat_id`, `thread_id`, `tag`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:371](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L371)

Removes tag from thread

#### Parameters

##### chat\_id

`string`

chat ID of thread to untag

##### thread\_id

`string`

thread to untag

##### tag

`string`

tag to remove

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateChatProperties()

> **updateChatProperties**(`id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:272](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L272)

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

> **updateCustomer**(`id`, `opts`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:397](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L397)

Updates Customer's properties.

#### Parameters

##### id

`string`

ID of a customer to update

##### opts

[`CustomerParameters`](../../structures/structures/interfaces/CustomerParameters.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateEventProperties()

> **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:320](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L320)

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

### updateSession()

> **updateSession**(`accessToken`, `tokenType`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:488](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L488)

Replaces the token used in the login request with a new one. This allows the websocket connection to remain open
after the former token expires as its lifetime is now tied to the new token.

#### Parameters

##### accessToken

`string`

OAuth token from the Agent's account

##### tokenType

[`TokenType`](../../../authorization/token_getter/type-aliases/TokenType.md)

Bearer or Basic

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateThreadProperties()

> **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/rtm.ts:291](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/rtm.ts#L291)

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
