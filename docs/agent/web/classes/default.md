[**@livechat/lc-sdk-js**](../../../README.md)

***

[@livechat/lc-sdk-js](../../../README.md) / [agent/web](../README.md) / default

# Class: default

Defined in: [agent/web.ts:33](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L33)

## Extends

- [`WebAPI`](../../../internal/classes/WebAPI.md)

## Constructors

### Constructor

> **new default**(`clientID`, `tokenGetter`, `options?`): `Web`

Defined in: [agent/web.ts:34](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L34)

#### Parameters

##### clientID

`string`

##### tokenGetter

[`TokenGetter`](../../../authorization/token_getter/type-aliases/TokenGetter.md)

##### options?

[`WebAPIOptions`](../../structures/structures/interfaces/WebAPIOptions.md)

#### Returns

`Web`

#### Overrides

[`WebAPI`](../../../internal/classes/WebAPI.md).[`constructor`](../../../internal/classes/WebAPI.md#constructor)

## Properties

### APIURL

> **APIURL**: `string`

Defined in: [internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L14)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`APIURL`](../../../internal/classes/WebAPI.md#apiurl)

***

### author\_id?

> `optional` **author\_id?**: `string`

Defined in: [internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L16)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`author_id`](../../../internal/classes/WebAPI.md#author_id)

***

### clientID

> `protected` `readonly` **clientID**: `string`

Defined in: [internal/index.ts:20](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L20)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`clientID`](../../../internal/classes/WebAPI.md#clientid)

***

### tokenGetter

> `protected` `readonly` **tokenGetter**: [`TokenGetter`](../../../authorization/token_getter/type-aliases/TokenGetter.md)

Defined in: [internal/index.ts:21](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L21)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`tokenGetter`](../../../internal/classes/WebAPI.md#tokengetter)

***

### type

> `protected` `readonly` **type**: `apiType`

Defined in: [internal/index.ts:22](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L22)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`type`](../../../internal/classes/WebAPI.md#type)

***

### version

> **version**: `string`

Defined in: [internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L15)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`version`](../../../internal/classes/WebAPI.md#version)

## Methods

### addUserToChat()

> **addUserToChat**(`chat_id`, `user_id`, `user_type`, `visibility`, `ignore_requester_presence?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:139](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L139)

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

Defined in: [agent/web.ts:366](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L366)

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

### deactivateChat()

> **deactivateChat**(`id`, `ignore_requester_presence?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:97](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L97)

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

Defined in: [agent/web.ts:240](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L240)

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

Defined in: [agent/web.ts:300](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L300)

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

Defined in: [agent/web.ts:264](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L264)

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

Defined in: [agent/web.ts:109](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L109)

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

Defined in: [agent/web.ts:60](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L60)

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

Defined in: [agent/web.ts:347](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L347)

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

Defined in: [agent/web.ts:429](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L429)

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

Defined in: [agent/web.ts:71](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L71)

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

Defined in: [agent/web.ts:42](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L42)

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

Defined in: [agent/web.ts:437](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L437)

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

Defined in: [agent/web.ts:51](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L51)

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

### logout()

> **logout**(`agent_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:445](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L445)

Logs the Agent out.

#### Parameters

##### agent\_id

`string`

specifies agent to be logged out.

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### markEventsAsSeen()

> **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:384](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L384)

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

Defined in: [agent/web.ts:419](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L419)

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

### removeUserFromChat()

> **removeUserFromChat**(`chat_id`, `user_id`, `ignore_requester_presence?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:161](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L161)

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

Defined in: [agent/web.ts:339](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L339)

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

Defined in: [agent/web.ts:87](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L87)

Restarts an archived chat

#### Parameters

##### param

`string` \| [`ResumeChatParameters`](../../structures/structures/interfaces/ResumeChatParameters.md)

either string ID of a chat to activate or full initial chat object

#### Returns

`Promise`\<[`ResumeChatResponse`](../../structures/responses/interfaces/ResumeChatResponse.md)\>

***

### send()

> **send**\<`T`\>(`name`, `req`): `Promise`\<`T`\>

Defined in: [internal/index.ts:31](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L31)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### name

`string`

##### req

`any`

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`send`](../../../internal/classes/WebAPI.md#send)

***

### sendEvent()

> **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`\<[`SendEventResponse`](../../structures/responses/interfaces/SendEventResponse.md)\>

Defined in: [agent/web.ts:195](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L195)

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

Defined in: [agent/web.ts:180](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L180)

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

Defined in: [agent/web.ts:222](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L222)

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

Defined in: [agent/web.ts:393](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L393)

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

Defined in: [agent/web.ts:403](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L403)

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

Defined in: [internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L74)

#### Parameters

##### author\_id?

`string`

#### Returns

`void`

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`setAuthorId`](../../../internal/classes/WebAPI.md#setauthorid)

***

### setRoutingStatus()

> **setRoutingStatus**(`status`, `agent_id?`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:375](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L375)

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

Defined in: [agent/web.ts:79](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L79)

Starts a chat

#### Parameters

##### opts?

[`StartChatParameters`](../../structures/structures/interfaces/StartChatParameters.md)

options like initial chat data or continuous switch

#### Returns

`Promise`\<[`StartChatResponse`](../../structures/responses/interfaces/StartChatResponse.md)\>

***

### tagThread()

> **tagThread**(`chat_id`, `thread_id`, `tag`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:320](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L320)

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

Defined in: [agent/web.ts:127](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L127)

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

Defined in: [agent/web.ts:118](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L118)

Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
will be sent to the requester. Chat members cannot unfollow the chat.

#### Parameters

##### id

`string`

chat ID to unfollow

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### untagThread()

> **untagThread**(`chat_id`, `thread_id`, `tag`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [agent/web.ts:330](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L330)

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

Defined in: [agent/web.ts:231](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L231)

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

Defined in: [agent/web.ts:356](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L356)

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

Defined in: [agent/web.ts:279](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L279)

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

Defined in: [agent/web.ts:250](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L250)

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

***

### uploadFile()

> **uploadFile**(`data`, `config`): `Promise`\<[`UploadFileResponse`](../../structures/responses/interfaces/UploadFileResponse.md)\>

Defined in: [agent/web.ts:213](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/web.ts#L213)

Note: the browser and Node.js may use different implementations of the file upload logic.
This method is just an axios wrapper pointing to the upload file URL - you have to provide your own form data
and headers in the config object.
See [Agent Chat API - upload file][https://developers.livechat.com/docs/messaging/agent-chat-api#upload-file](https://developers.livechat.com/docs/messaging/agent-chat-api#upload-file)

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

#### Parameters

##### data

`any`

axios data parameter

##### config

`any`

axios config parameter

#### Returns

`Promise`\<[`UploadFileResponse`](../../structures/responses/interfaces/UploadFileResponse.md)\>
