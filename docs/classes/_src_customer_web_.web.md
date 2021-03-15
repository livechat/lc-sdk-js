[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/customer/web"](../modules/_src_customer_web_.md) › [Web](_src_customer_web_.web.md)

# Class: Web

## Hierarchy

* [WebAPI](_src_internal_index_.webapi.md)

  ↳ **Web**

## Index

### Constructors

* [constructor](_src_customer_web_.web.md#constructor)

### Properties

* [APIURL](_src_customer_web_.web.md#apiurl)
* [clientID](_src_customer_web_.web.md#clientid)
* [tokenGetter](_src_customer_web_.web.md#tokengetter)
* [type](_src_customer_web_.web.md#type)
* [version](_src_customer_web_.web.md#version)

### Methods

* [acceptGreeting](_src_customer_web_.web.md#acceptgreeting)
* [cancelGreeting](_src_customer_web_.web.md#cancelgreeting)
* [checkGoals](_src_customer_web_.web.md#checkgoals)
* [deactivateChat](_src_customer_web_.web.md#deactivatechat)
* [deleteChatProperties](_src_customer_web_.web.md#deletechatproperties)
* [deleteEventProperties](_src_customer_web_.web.md#deleteeventproperties)
* [deleteThreadProperties](_src_customer_web_.web.md#deletethreadproperties)
* [getChat](_src_customer_web_.web.md#getchat)
* [getCustomer](_src_customer_web_.web.md#getcustomer)
* [getForm](_src_customer_web_.web.md#getform)
* [getPredictedAgent](_src_customer_web_.web.md#getpredictedagent)
* [getURLInfo](_src_customer_web_.web.md#geturlinfo)
* [listChats](_src_customer_web_.web.md#listchats)
* [listGroupProperties](_src_customer_web_.web.md#listgroupproperties)
* [listGroupStatuses](_src_customer_web_.web.md#listgroupstatuses)
* [listLicenseProperties](_src_customer_web_.web.md#listlicenseproperties)
* [listThreads](_src_customer_web_.web.md#listthreads)
* [markEventsAsSeen](_src_customer_web_.web.md#markeventsasseen)
* [resumeChat](_src_customer_web_.web.md#resumechat)
* [send](_src_customer_web_.web.md#send)
* [sendEvent](_src_customer_web_.web.md#sendevent)
* [sendRichMessagePostback](_src_customer_web_.web.md#sendrichmessagepostback)
* [sendSneakPeek](_src_customer_web_.web.md#sendsneakpeek)
* [setCustomerSessionFields](_src_customer_web_.web.md#setcustomersessionfields)
* [startChat](_src_customer_web_.web.md#startchat)
* [updateChatProperties](_src_customer_web_.web.md#updatechatproperties)
* [updateCustomer](_src_customer_web_.web.md#updatecustomer)
* [updateEventProperties](_src_customer_web_.web.md#updateeventproperties)
* [updateThreadProperties](_src_customer_web_.web.md#updatethreadproperties)
* [uploadFile](_src_customer_web_.web.md#uploadfile)

## Constructors

###  constructor

\+ **new Web**(`clientID`: string, `tokenGetter`: [TokenGetter](../modules/_src_authorization_index_.md#tokengetter)): *[Web](_src_customer_web_.web.md)*

*Overrides [WebAPI](_src_internal_index_.webapi.md).[constructor](_src_internal_index_.webapi.md#constructor)*

*Defined in [src/customer/web.ts:28](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`clientID` | string |
`tokenGetter` | [TokenGetter](../modules/_src_authorization_index_.md#tokengetter) |

**Returns:** *[Web](_src_customer_web_.web.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[APIURL](_src_internal_index_.webapi.md#apiurl)*

*Defined in [src/internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L11)*

___

###  clientID

• **clientID**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[clientID](_src_internal_index_.webapi.md#clientid)*

*Defined in [src/internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L12)*

___

###  tokenGetter

• **tokenGetter**: *[TokenGetter](../modules/_src_authorization_index_.md#tokengetter)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[tokenGetter](_src_internal_index_.webapi.md#tokengetter)*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L15)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[type](_src_internal_index_.webapi.md#type)*

*Defined in [src/internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L14)*

___

###  version

• **version**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[version](_src_internal_index_.webapi.md#version)*

*Defined in [src/internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L13)*

## Methods

###  acceptGreeting

▸ **acceptGreeting**(`greeting_id`: number, `unique_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:343](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L343)*

Marks an incoming greeting as seen.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`greeting_id` | number | number representing type of a greeting |
`unique_id` | string | specific greeting event ID  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  cancelGreeting

▸ **cancelGreeting**(`unique_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:352](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L352)*

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unique_id` | string | specific greeting ID  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  checkGoals

▸ **checkGoals**(`session_fields`: object[], `group_id`: number, `page_url`: number): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:297](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L297)*

Customer can use this method to trigger checking if goals were achieved.
Then, Agents receive the information. You should call this method to provide goals
parameters for the server when the customers limit is reached. Works only for offline Customers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session_fields` | object[] | object enclosed key:value pairs |
`group_id` | number | group id to check goals in |
`page_url` | number | page URL  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  deactivateChat

▸ **deactivateChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:80](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L80)*

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to deactivate  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  deleteChatProperties

▸ **deleteChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:147](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L147)*

Deletes chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  deleteEventProperties

▸ **deleteEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:207](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L207)*

Deletes event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to delete |
`thread_id` | string | thread ID of event to delete |
`event_id` | string | event to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:171](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L171)*

Deletes thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to delete |
`thread_id` | string | thread to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  getChat

▸ **getChat**(`chat_id`: string, `thread_id?`: undefined | string): *Promise‹[GetChatResponse](../interfaces/_src_customer_structures_.getchatresponse.md)›*

*Defined in [src/customer/web.ts:55](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L55)*

It returns a thread that the current Customer has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | ID of a chat to get |
`thread_id?` | undefined &#124; string | thread ID to get (if not provided, last thread is returned)  |

**Returns:** *Promise‹[GetChatResponse](../interfaces/_src_customer_structures_.getchatresponse.md)›*

___

###  getCustomer

▸ **getCustomer**(): *Promise‹[CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md)›*

*Defined in [src/customer/web.ts:275](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L275)*

Returns the info about the Customer requesting it.

**Returns:** *Promise‹[CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md)›*

___

###  getForm

▸ **getForm**(`group_id`: number, `type`: string): *Promise‹[GetFormResponse](../interfaces/_src_customer_structures_.getformresponse.md)›*

*Defined in [src/customer/web.ts:309](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L309)*

Returns an empty ticket form of a prechat or postchat survey.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_id` | number | = group id to get form for |
`type` | string | prechat or postchat  |

**Returns:** *Promise‹[GetFormResponse](../interfaces/_src_customer_structures_.getformresponse.md)›*

___

###  getPredictedAgent

▸ **getPredictedAgent**(): *Promise‹[GetPredictedAgentResponse](../interfaces/_src_customer_structures_.getpredictedagentresponse.md)›*

*Defined in [src/customer/web.ts:317](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L317)*

Gets the predicted Agent - the one the Customer will chat with when the chat starts.
To use this method, the Customer needs to be logged in, which can be done via the login method.

**Returns:** *Promise‹[GetPredictedAgentResponse](../interfaces/_src_customer_structures_.getpredictedagentresponse.md)›*

___

###  getURLInfo

▸ **getURLInfo**(`url`: string): *Promise‹[GetURLInfoResponse](../interfaces/_src_customer_structures_.geturlinforesponse.md)›*

*Defined in [src/customer/web.ts:325](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L325)*

It returns the info on a given URL.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | URL to get info about  |

**Returns:** *Promise‹[GetURLInfoResponse](../interfaces/_src_customer_structures_.geturlinforesponse.md)›*

___

###  listChats

▸ **listChats**(`opts?`: [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md)): *Promise‹[ListChatsResponse](../interfaces/_src_customer_structures_.listchatsresponse.md)›*

*Defined in [src/customer/web.ts:37](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L37)*

It returns summaries of the chats a Customer participated in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md) | set of filters and pagination to limit returned entries  |

**Returns:** *Promise‹[ListChatsResponse](../interfaces/_src_customer_structures_.listchatsresponse.md)›*

___

###  listGroupProperties

▸ **listGroupProperties**(`license_id`: number, `group_id`: number, `namespace?`: undefined | string, `name?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/customer/web.ts:242](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L242)*

Returns the properties of a given group. It only returns the properties a Customer has access to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`license_id` | number | ID of license to return properties of |
`group_id` | number | ID of group to return properties of |
`namespace?` | undefined &#124; string | property namespace |
`name?` | undefined &#124; string | property name  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listGroupStatuses

▸ **listGroupStatuses**(`param`: boolean | number[]): *Promise‹[ListGroupStatusesResponse](../interfaces/_src_customer_structures_.listgroupstatusesresponse.md)›*

*Defined in [src/customer/web.ts:283](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L283)*

Lists statuses of groups.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | boolean &#124; number[] | either boolean switch for all groups or list of group ID's to check  |

**Returns:** *Promise‹[ListGroupStatusesResponse](../interfaces/_src_customer_structures_.listgroupstatusesresponse.md)›*

___

###  listLicenseProperties

▸ **listLicenseProperties**(`license_id`: number, `namespace?`: undefined | string, `name?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/customer/web.ts:227](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L227)*

Returns the properties of a given license. It only returns the properties a Customer has access to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`license_id` | number | ID of license to return properties of |
`namespace?` | undefined &#124; string | property namespace |
`name?` | undefined &#124; string | property name  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listThreads

▸ **listThreads**(`chat_id`: string, `opts?`: [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md)): *Promise‹[ListThreadsResponse](../interfaces/_src_customer_structures_.listthreadsresponse.md)›*

*Defined in [src/customer/web.ts:46](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L46)*

Returns threads that the current Customer has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to get threads from |
`opts?` | [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md) | additional options like pagination and sorting  |

**Returns:** *Promise‹[ListThreadsResponse](../interfaces/_src_customer_structures_.listthreadsresponse.md)›*

___

###  markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`: string, `seen_up_to`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:334](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L334)*

Marks events as seen by Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to mark events |
`seen_up_to` | string | date up to which mark events  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  resumeChat

▸ **resumeChat**(`param`: string | [ResumeChatParameters](../interfaces/_src_customer_structures_.resumechatparameters.md)): *Promise‹[ResumeChatResponse](../interfaces/_src_customer_structures_.resumechatresponse.md)›*

*Defined in [src/customer/web.ts:71](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L71)*

Restarts an archived chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | string &#124; [ResumeChatParameters](../interfaces/_src_customer_structures_.resumechatparameters.md) | either string ID of a chat to activate or full initial chat object  |

**Returns:** *Promise‹[ResumeChatResponse](../interfaces/_src_customer_structures_.resumechatresponse.md)›*

___

###  send

▸ **send**(`name`: string, `req`: any): *Promise‹any›*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[send](_src_internal_index_.webapi.md#send)*

*Defined in [src/internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`req` | any |

**Returns:** *Promise‹any›*

___

###  sendEvent

▸ **sendEvent**(`chat_id`: string, `event`: [Event](../modules/_src_objects_index_.md#event), `attach_to_last_thread?`: undefined | false | true): *Promise‹[SendEventResponse](../interfaces/_src_customer_structures_.sendeventresponse.md)›*

*Defined in [src/customer/web.ts:92](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L92)*

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to send event to |
`event` | [Event](../modules/_src_objects_index_.md#event) | Event object |
`attach_to_last_thread?` | undefined &#124; false &#124; true | if true, adds event to last inactive thread  |

**Returns:** *Promise‹[SendEventResponse](../interfaces/_src_customer_structures_.sendeventresponse.md)›*

___

###  sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`: [SendRichMessagePostbackParameters](../interfaces/_src_customer_structures_.sendrichmessagepostbackparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:119](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L119)*

Sends postback for rich message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [SendRichMessagePostbackParameters](../interfaces/_src_customer_structures_.sendrichmessagepostbackparameters.md) | postback data  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  sendSneakPeek

▸ **sendSneakPeek**(`chat_id`: string, `sneak_peek_text`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:129](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L129)*

Sends a sneak peek to a chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to send sneak peek to |
`sneak_peek_text` | string | text to sneak peek  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  setCustomerSessionFields

▸ **setCustomerSessionFields**(`session_fields`: object[]): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:268](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L268)*

Sets session fields for Customer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session_fields` | object[] | fields to set in form of object enclosed key:value pairs  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  startChat

▸ **startChat**(`opts?`: [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md)): *Promise‹[StartChatResponse](../interfaces/_src_customer_structures_.startchatresponse.md)›*

*Defined in [src/customer/web.ts:63](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L63)*

Starts a chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md) | options like initial chat data or continuous switch  |

**Returns:** *Promise‹[StartChatResponse](../interfaces/_src_customer_structures_.startchatresponse.md)›*

___

###  updateChatProperties

▸ **updateChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:138](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L138)*

Updates chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  updateCustomer

▸ **updateCustomer**(`opts`: [CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:260](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L260)*

Updates Customer's properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  updateEventProperties

▸ **updateEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:186](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L186)*

Updates event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to update |
`thread_id` | string | thread ID of event to update |
`event_id` | string | event to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  updateThreadProperties

▸ **updateThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/web.ts:157](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L157)*

Updates thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to update |
`thread_id` | string | thread to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  uploadFile

▸ **uploadFile**(`file`: string | Buffer, `filename`: string): *Promise‹[UploadFileResponse](../interfaces/_src_customer_structures_.uploadfileresponse.md)›*

*Defined in [src/customer/web.ts:105](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/customer/web.ts#L105)*

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | string &#124; Buffer | path of file to upload or Buffer with content |
`filename` | string | filename for uploaded file  |

**Returns:** *Promise‹[UploadFileResponse](../interfaces/_src_customer_structures_.uploadfileresponse.md)›*
