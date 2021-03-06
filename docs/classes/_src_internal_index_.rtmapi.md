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
* [license](_src_internal_index_.rtmapi.md#optional-license)
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

\+ **new RTMAPI**(`type`: [apiType](../modules/_src_internal_index_.md#apitype), `license?`: undefined | number, `options?`: [RTMAPIOptions](../interfaces/_src_objects_index_.rtmapioptions.md)): *[RTMAPI](_src_internal_index_.rtmapi.md)*

*Defined in [src/internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [apiType](../modules/_src_internal_index_.md#apitype) |
`license?` | undefined &#124; number |
`options?` | [RTMAPIOptions](../interfaces/_src_objects_index_.rtmapioptions.md) |

**Returns:** *[RTMAPI](_src_internal_index_.rtmapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Defined in [src/internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L74)*

___

### `Optional` heartbeatInterval

• **heartbeatInterval**? : *NodeJS.Timeout*

*Defined in [src/internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L79)*

___

### `Optional` license

• **license**? : *undefined | number*

*Defined in [src/internal/index.ts:77](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L77)*

___

###  requestsQueue

• **requestsQueue**: *any*

*Defined in [src/internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L80)*

___

### `Optional` socket

• **socket**? : *WebSocket*

*Defined in [src/internal/index.ts:78](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L78)*

___

###  subscribedPushes

• **subscribedPushes**: *any*

*Defined in [src/internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L81)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Defined in [src/internal/index.ts:76](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L76)*

___

###  version

• **version**: *string*

*Defined in [src/internal/index.ts:75](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L75)*

## Methods

###  connect

▸ **connect**(): *Promise‹void›*

*Defined in [src/internal/index.ts:92](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L92)*

**Returns:** *Promise‹void›*

___

### `Private` handlePush

▸ **handlePush**(`type`: string, `payload`: [Push](../interfaces/_src_objects_index_.push.md)): *void*

*Defined in [src/internal/index.ts:134](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload` | [Push](../interfaces/_src_objects_index_.push.md) |

**Returns:** *void*

___

### `Private` handleResponse

▸ **handleResponse**(`request_id`: string, `success`: boolean, `payload`: any): *void*

*Defined in [src/internal/index.ts:126](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L126)*

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

*Defined in [src/internal/index.ts:140](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  subscribePush

▸ **subscribePush**(`push`: string, `callback`: function): *void*

*Defined in [src/internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L157)*

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

*Defined in [src/internal/index.ts:164](https://github.com/livechat/lc-sdk-js/blob/04572ce/src/internal/index.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |

**Returns:** *void*
