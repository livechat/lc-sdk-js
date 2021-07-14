[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/agent/web"](../modules/_src_agent_web_.md) › [Web](_src_agent_web_.web.md)

# Class: Web

## Hierarchy

* [WebAPI](_src_internal_index_.webapi.md)

  ↳ **Web**

## Index

### Constructors

* [constructor](_src_agent_web_.web.md#constructor)

### Properties

* [APIURL](_src_agent_web_.web.md#apiurl)
* [clientID](_src_agent_web_.web.md#clientid)
* [tokenGetter](_src_agent_web_.web.md#tokengetter)
* [type](_src_agent_web_.web.md#type)
* [version](_src_agent_web_.web.md#version)

### Methods

* [addUserToChat](_src_agent_web_.web.md#addusertochat)
* [banCustomer](_src_agent_web_.web.md#bancustomer)
* [createCustomer](_src_agent_web_.web.md#createcustomer)
* [deactivateChat](_src_agent_web_.web.md#deactivatechat)
* [deleteChatProperties](_src_agent_web_.web.md#deletechatproperties)
* [deleteEventProperties](_src_agent_web_.web.md#deleteeventproperties)
* [deleteThreadProperties](_src_agent_web_.web.md#deletethreadproperties)
* [followChat](_src_agent_web_.web.md#followchat)
* [followCustomer](_src_agent_web_.web.md#followcustomer)
* [getChat](_src_agent_web_.web.md#getchat)
* [getCustomer](_src_agent_web_.web.md#getcustomer)
* [listAgentsForTransfer](_src_agent_web_.web.md#listagentsfortransfer)
* [listArchives](_src_agent_web_.web.md#listarchives)
* [listChats](_src_agent_web_.web.md#listchats)
* [listCustomers](_src_agent_web_.web.md#listcustomers)
* [listRoutingStatuses](_src_agent_web_.web.md#listroutingstatuses)
* [listThreads](_src_agent_web_.web.md#listthreads)
* [markEventsAsSeen](_src_agent_web_.web.md#markeventsasseen)
* [multicast](_src_agent_web_.web.md#multicast)
* [removeUserFromChat](_src_agent_web_.web.md#removeuserfromchat)
* [resumeChat](_src_agent_web_.web.md#resumechat)
* [send](_src_agent_web_.web.md#send)
* [sendEvent](_src_agent_web_.web.md#sendevent)
* [sendRichMessagePostback](_src_agent_web_.web.md#sendrichmessagepostback)
* [sendTypingIndicator](_src_agent_web_.web.md#sendtypingindicator)
* [setRoutingStatus](_src_agent_web_.web.md#setroutingstatus)
* [startChat](_src_agent_web_.web.md#startchat)
* [tagThread](_src_agent_web_.web.md#tagthread)
* [transferChat](_src_agent_web_.web.md#transferchat)
* [unfollowChat](_src_agent_web_.web.md#unfollowchat)
* [unfollowCustomer](_src_agent_web_.web.md#unfollowcustomer)
* [untagThread](_src_agent_web_.web.md#untagthread)
* [updateChatProperties](_src_agent_web_.web.md#updatechatproperties)
* [updateCustomer](_src_agent_web_.web.md#updatecustomer)
* [updateEventProperties](_src_agent_web_.web.md#updateeventproperties)
* [updateThreadProperties](_src_agent_web_.web.md#updatethreadproperties)
* [uploadFile](_src_agent_web_.web.md#uploadfile)

## Constructors

###  constructor

\+ **new Web**(`clientID`: string, `tokenGetter`: [TokenGetter](../modules/_src_authorization_index_.md#tokengetter), `options?`: [WebAPIOptions](../interfaces/_src_objects_index_.webapioptions.md)): *[Web](_src_agent_web_.web.md)*

*Overrides [WebAPI](_src_internal_index_.webapi.md).[constructor](_src_internal_index_.webapi.md#constructor)*

*Defined in [src/agent/web.ts:34](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`clientID` | string |
`tokenGetter` | [TokenGetter](../modules/_src_authorization_index_.md#tokengetter) |
`options?` | [WebAPIOptions](../interfaces/_src_objects_index_.webapioptions.md) |

**Returns:** *[Web](_src_agent_web_.web.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[APIURL](_src_internal_index_.webapi.md#apiurl)*

*Defined in [src/internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/internal/index.ts#L11)*

___

###  clientID

• **clientID**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[clientID](_src_internal_index_.webapi.md#clientid)*

*Defined in [src/internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/internal/index.ts#L12)*

___

###  tokenGetter

• **tokenGetter**: *[TokenGetter](../modules/_src_authorization_index_.md#tokengetter)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[tokenGetter](_src_internal_index_.webapi.md#tokengetter)*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/internal/index.ts#L15)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[type](_src_internal_index_.webapi.md#type)*

*Defined in [src/internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/internal/index.ts#L14)*

___

###  version

• **version**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[version](_src_internal_index_.webapi.md#version)*

*Defined in [src/internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/internal/index.ts#L13)*

## Methods

###  addUserToChat

▸ **addUserToChat**(`chat_id`: string, `user_id`: string, `user_type`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:134](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L134)*

Adds a user to the chat. You can't add more than one customer user type to the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to add user to |
`user_id` | string | user to add |
`user_type` | string | customer or agent  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  banCustomer

▸ **banCustomer**(`id`: string, `days`: number): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:343](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L343)*

Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
and does not accept new ones during the ban lifespan.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of customer to ban |
`days` | number | ban duration in days  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  createCustomer

▸ **createCustomer**(`opts?`: [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md)): *Promise‹[CreateCustomerResponse](../interfaces/_src_agent_structures_.createcustomerresponse.md)›*

*Defined in [src/agent/web.ts:324](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L324)*

Creates a new Customer user type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md) | customer data  |

**Returns:** *Promise‹[CreateCustomerResponse](../interfaces/_src_agent_structures_.createcustomerresponse.md)›*

___

###  deactivateChat

▸ **deactivateChat**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:97](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L97)*

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | chat ID to deactivate  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteChatProperties

▸ **deleteChatProperties**(`id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:210](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L210)*

Deletes chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | chat to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteEventProperties

▸ **deleteEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:270](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L270)*

Deletes event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to delete |
`thread_id` | string | thread ID of event to delete |
`event_id` | string | event to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:234](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L234)*

Deletes thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to delete |
`thread_id` | string | thread to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  followChat

▸ **followChat**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:106](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L106)*

Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | chat ID to follow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  followCustomer

▸ **followCustomer**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:406](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L406)*

Marks a customer as followed. As a result, the requester (an agent) will receive
the info about all the changes related to that customer via pushes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of customer to follow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  getChat

▸ **getChat**(`chat_id`: string, `thread_id?`: undefined | string): *Promise‹[GetChatResponse](../interfaces/_src_agent_structures_.getchatresponse.md)›*

*Defined in [src/agent/web.ts:61](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L61)*

It returns a thread that the current Agent has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | ID of a chat to get |
`thread_id?` | undefined &#124; string | thread ID to get (if not provided, last thread is returned)  |

**Returns:** *Promise‹[GetChatResponse](../interfaces/_src_agent_structures_.getchatresponse.md)›*

___

###  getCustomer

▸ **getCustomer**(`id`: string): *Promise‹[GetCustomerResponse](../interfaces/_src_agent_structures_.getcustomerresponse.md)›*

*Defined in [src/agent/web.ts:308](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L308)*

Returns the info about the Customer with a given id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | customer ID to get  |

**Returns:** *Promise‹[GetCustomerResponse](../interfaces/_src_agent_structures_.getcustomerresponse.md)›*

___

###  listAgentsForTransfer

▸ **listAgentsForTransfer**(`chat_id`: string): *Promise‹[AgentForTransfer](../interfaces/_src_agent_structures_.agentfortransfer.md)[]›*

*Defined in [src/agent/web.ts:397](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L397)*

It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
- The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
- Only chats with Customers are taken into account in total_active_chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID you want to transfer  |

**Returns:** *Promise‹[AgentForTransfer](../interfaces/_src_agent_structures_.agentfortransfer.md)[]›*

___

###  listArchives

▸ **listArchives**(`opts?`: [ListArchivesParameters](../interfaces/_src_agent_structures_.listarchivesparameters.md)): *Promise‹[ListArchivesResponse](../interfaces/_src_agent_structures_.listarchivesresponse.md)›*

*Defined in [src/agent/web.ts:72](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L72)*

It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.

The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
but each time with a different thread. The returned chat is a complete object, not only a chat summary.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListArchivesParameters](../interfaces/_src_agent_structures_.listarchivesparameters.md) | options like filters or pagination  |

**Returns:** *Promise‹[ListArchivesResponse](../interfaces/_src_agent_structures_.listarchivesresponse.md)›*

___

###  listChats

▸ **listChats**(`opts?`: [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md)): *Promise‹[ListChatsResponse](../interfaces/_src_agent_structures_.listchatsresponse.md)›*

*Defined in [src/agent/web.ts:43](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L43)*

It returns summaries of the chats an Agent has access to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md) | set of filters and pagination to limit returned entries  |

**Returns:** *Promise‹[ListChatsResponse](../interfaces/_src_agent_structures_.listchatsresponse.md)›*

___

###  listCustomers

▸ **listCustomers**(`opts?`: [ListCustomersParameters](../interfaces/_src_agent_structures_.listcustomersparameters.md)): *Promise‹[ListCustomersResponse](../interfaces/_src_agent_structures_.listcustomersresponse.md)›*

*Defined in [src/agent/web.ts:316](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L316)*

It returns the list of Customers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListCustomersParameters](../interfaces/_src_agent_structures_.listcustomersparameters.md) | options like filters or pagination  |

**Returns:** *Promise‹[ListCustomersResponse](../interfaces/_src_agent_structures_.listcustomersresponse.md)›*

___

###  listRoutingStatuses

▸ **listRoutingStatuses**(`group_ids?`: number[]): *Promise‹[SetRoutingStatusResponse](../interfaces/_src_agent_structures_.setroutingstatusresponse.md)[]›*

*Defined in [src/agent/web.ts:422](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L422)*

Returns the current routing status of each agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_ids?` | number[] | groups to list agent routing statuses from  |

**Returns:** *Promise‹[SetRoutingStatusResponse](../interfaces/_src_agent_structures_.setroutingstatusresponse.md)[]›*

___

###  listThreads

▸ **listThreads**(`chat_id`: string, `opts?`: [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md)): *Promise‹[ListThreadsResponse](../interfaces/_src_agent_structures_.listthreadsresponse.md)›*

*Defined in [src/agent/web.ts:52](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L52)*

Returns threads that the current Agent has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to get threads from |
`opts?` | [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md) | additional options like pagination and sorting  |

**Returns:** *Promise‹[ListThreadsResponse](../interfaces/_src_agent_structures_.listthreadsresponse.md)›*

___

###  markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`: string, `seen_up_to`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:361](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L361)*

Marks events as seen by Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to mark events |
`seen_up_to` | string | date up to which mark events  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  multicast

▸ **multicast**(`recipients`: [MulticastRecipients](../interfaces/_src_agent_structures_.multicastrecipients.md), `content`: object, `type?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:387](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L387)*

This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
For example, it could be used in an app that sends notifications to Agents or Customers,
when a certain condition is met (e.g. an important Customer started the chat).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`recipients` | [MulticastRecipients](../interfaces/_src_agent_structures_.multicastrecipients.md) | who should receive multicast |
`content` | object | = JSON content to send |
`type?` | undefined &#124; string | message type  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  removeUserFromChat

▸ **removeUserFromChat**(`chat_id`: string, `user_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:150](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L150)*

Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to remove user from |
`user_id` | string | user to remove  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  resumeChat

▸ **resumeChat**(`param`: string | [ResumeChatParameters](../interfaces/_src_agent_structures_.resumechatparameters.md)): *Promise‹[ResumeChatResponse](../interfaces/_src_agent_structures_.resumechatresponse.md)›*

*Defined in [src/agent/web.ts:88](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L88)*

Restarts an archived chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | string &#124; [ResumeChatParameters](../interfaces/_src_agent_structures_.resumechatparameters.md) | either string ID of a chat to activate or full initial chat object  |

**Returns:** *Promise‹[ResumeChatResponse](../interfaces/_src_agent_structures_.resumechatresponse.md)›*

___

###  send

▸ **send**(`name`: string, `req`: any): *Promise‹any›*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[send](_src_internal_index_.webapi.md#send)*

*Defined in [src/internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/internal/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`req` | any |

**Returns:** *Promise‹any›*

___

###  sendEvent

▸ **sendEvent**(`chat_id`: string, `event`: [Event](../modules/_src_objects_index_.md#event), `attach_to_last_thread?`: undefined | false | true): *Promise‹[SendEventResponse](../interfaces/_src_agent_structures_.sendeventresponse.md)›*

*Defined in [src/agent/web.ts:165](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L165)*

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to send event to |
`event` | [Event](../modules/_src_objects_index_.md#event) | Event object |
`attach_to_last_thread?` | undefined &#124; false &#124; true | if true, adds event to last inactive thread  |

**Returns:** *Promise‹[SendEventResponse](../interfaces/_src_agent_structures_.sendeventresponse.md)›*

___

###  sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`: [SendRichMessagePostbackParameters](../interfaces/_src_agent_structures_.sendrichmessagepostbackparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:192](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L192)*

Sends postback for rich message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [SendRichMessagePostbackParameters](../interfaces/_src_agent_structures_.sendrichmessagepostbackparameters.md) | postback data  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  sendTypingIndicator

▸ **sendTypingIndicator**(`chat_id`: string, `is_typing`: boolean, `recipients?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:371](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L371)*

Sends typing indicator

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat for typing indicator |
`is_typing` | boolean | status of typing |
`recipients?` | undefined &#124; string | possible values: all, agents  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  setRoutingStatus

▸ **setRoutingStatus**(`status`: [RoutingStatus](../enums/_src_objects_index_.routingstatus.md), `agent_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:352](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L352)*

Changes the status of an Agent or a Bot Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | [RoutingStatus](../enums/_src_objects_index_.routingstatus.md) | status to set |
`agent_id?` | undefined &#124; string | ID of agent to update status  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  startChat

▸ **startChat**(`opts?`: [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md)): *Promise‹[StartChatResponse](../interfaces/_src_agent_structures_.startchatresponse.md)›*

*Defined in [src/agent/web.ts:80](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L80)*

Starts a chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md) | options like initial chat data or continuous switch  |

**Returns:** *Promise‹[StartChatResponse](../interfaces/_src_agent_structures_.startchatresponse.md)›*

___

###  tagThread

▸ **tagThread**(`chat_id`: string, `thread_id`: string, `tag`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:290](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L290)*

Tags thread with given tag

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to tag |
`thread_id` | string | thread to tag |
`tag` | string | tag to add  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  transferChat

▸ **transferChat**(`id`: string, `opts?`: [TransferChatParameters](../interfaces/_src_agent_structures_.transferchatparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:124](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L124)*

Transfers a chat to an Agent or a group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | chat to transfer |
`opts?` | [TransferChatParameters](../interfaces/_src_agent_structures_.transferchatparameters.md) | specific target or force flag  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  unfollowChat

▸ **unfollowChat**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:115](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L115)*

Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
will be sent to the requester. Chat members cannot unfollow the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | chat ID to unfollow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  unfollowCustomer

▸ **unfollowCustomer**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:414](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L414)*

Removes the agent from the list of customer's followers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of customer to unfollow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  untagThread

▸ **untagThread**(`chat_id`: string, `thread_id`: string, `tag`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:300](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L300)*

Removes tag from thread

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to untag |
`thread_id` | string | thread to untag |
`tag` | string | tag to remove  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateChatProperties

▸ **updateChatProperties**(`id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:201](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L201)*

Updates chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | chat to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateCustomer

▸ **updateCustomer**(`id`: string, `opts`: [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:333](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L333)*

Updates Customer's properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of a customer to update |
`opts` | [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateEventProperties

▸ **updateEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:249](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L249)*

Updates event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to update |
`thread_id` | string | thread ID of event to update |
`event_id` | string | event to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateThreadProperties

▸ **updateThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/web.ts:220](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L220)*

Updates thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to update |
`thread_id` | string | thread to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  uploadFile

▸ **uploadFile**(`file`: string | Buffer, `filename`: string): *Promise‹[UploadFileResponse](../interfaces/_src_agent_structures_.uploadfileresponse.md)›*

*Defined in [src/agent/web.ts:178](https://github.com/livechat/lc-sdk-js/blob/aff69b2/src/agent/web.ts#L178)*

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | string &#124; Buffer | path of file to upload or Buffer with content |
`filename` | string | filename for uploaded file  |

**Returns:** *Promise‹[UploadFileResponse](../interfaces/_src_agent_structures_.uploadfileresponse.md)›*
