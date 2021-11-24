[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/internal/index"](../modules/_src_internal_index_.md) › [RTMAPI](_src_internal_index_.rtmapi.md)

# Class: RTMAPI

## Hierarchy

* **RTMAPI**

  ↳ [RTM](_src_agent_rtm_.rtm.md)

  ↳ [RTM](_src_customer_rtm_.rtm.md)

## Index

### Constructors

* [constructor](_src_internal_index_.rtmapi.md#constructor)

### Properties

* [APIURL](_src_internal_index_.rtmapi.md#apiurl)
* [heartbeatInterval](_src_internal_index_.rtmapi.md#optional-heartbeatinterval)
* [organization_id](_src_internal_index_.rtmapi.md#optional-organization_id)
* [requestsQueue](_src_internal_index_.rtmapi.md#requestsqueue)
* [socket](_src_internal_index_.rtmapi.md#optional-socket)
* [subscribedPushes](_src_internal_index_.rtmapi.md#subscribedpushes)
* [type](_src_internal_index_.rtmapi.md#type)
* [version](_src_internal_index_.rtmapi.md#version)

### Methods

* [connect](_src_internal_index_.rtmapi.md#connect)
* [handlePush](_src_internal_index_.rtmapi.md#private-handlepush)
* [handleResponse](_src_internal_index_.rtmapi.md#private-handleresponse)
* [send](_src_internal_index_.rtmapi.md#send)
* [subscribePush](_src_internal_index_.rtmapi.md#subscribepush)
* [unsubscribePush](_src_internal_index_.rtmapi.md#unsubscribepush)

## Constructors

###  constructor

\+ **new RTMAPI**(`type`: [apiType](../modules/_src_internal_index_.md#apitype), `organization_id?`: undefined | string, `options?`: [RTMAPIOptions](../interfaces/_src_objects_index_.rtmapioptions.md)): *[RTMAPI](_src_internal_index_.rtmapi.md)*

*Defined in [src/internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [apiType](../modules/_src_internal_index_.md#apitype) |
`organization_id?` | undefined &#124; string |
`options?` | [RTMAPIOptions](../interfaces/_src_objects_index_.rtmapioptions.md) |

**Returns:** *[RTMAPI](_src_internal_index_.rtmapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Defined in [src/internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L79)*

___

### `Optional` heartbeatInterval

• **heartbeatInterval**? : *NodeJS.Timeout*

*Defined in [src/internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L84)*

___

### `Optional` organization_id

• **organization_id**? : *undefined | string*

*Defined in [src/internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L82)*

___

###  requestsQueue

• **requestsQueue**: *any*

*Defined in [src/internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L85)*

___

### `Optional` socket

• **socket**? : *[WebSocket](../modules/_src_internal_index_.md#websocket)*

*Defined in [src/internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L83)*

___

###  subscribedPushes

• **subscribedPushes**: *any*

*Defined in [src/internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L86)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Defined in [src/internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L81)*

___

###  version

• **version**: *string*

*Defined in [src/internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L80)*

## Methods

###  connect

▸ **connect**(): *Promise‹void›*

*Defined in [src/internal/index.ts:98](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L98)*

**Returns:** *Promise‹void›*

___

### `Private` handlePush

▸ **handlePush**(`type`: string, `payload`: [Push](../interfaces/_src_objects_index_.push.md)): *void*

*Defined in [src/internal/index.ts:143](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload` | [Push](../interfaces/_src_objects_index_.push.md) |

**Returns:** *void*

___

### `Private` handleResponse

▸ **handleResponse**(`request_id`: string, `success`: boolean, `payload`: any): *void*

*Defined in [src/internal/index.ts:135](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`request_id` | string |
`success` | boolean |
`payload` | any |

**Returns:** *void*

___

###  send

▸ **send**(`action`: string, `payload`: any): *Promise‹any›*

*Defined in [src/internal/index.ts:149](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  subscribePush

▸ **subscribePush**(`push`: string, `callback`: function): *void*

*Defined in [src/internal/index.ts:166](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L166)*

**Parameters:**

▪ **push**: *string*

▪ **callback**: *function*

▸ (`payload`: [Push](../interfaces/_src_objects_index_.push.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [Push](../interfaces/_src_objects_index_.push.md) |

**Returns:** *void*

___

###  unsubscribePush

▸ **unsubscribePush**(`push`: string): *void*

*Defined in [src/internal/index.ts:173](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |

**Returns:** *void*
