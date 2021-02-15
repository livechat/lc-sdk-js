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

\+ **new RTMAPI**(`type`: [apiType](../modules/_src_internal_index_.md#apitype), `license?`: undefined | number): *[RTMAPI](_src_internal_index_.rtmapi.md)*

*Defined in [src/internal/index.ts:61](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [apiType](../modules/_src_internal_index_.md#apitype) |
`license?` | undefined &#124; number |

**Returns:** *[RTMAPI](_src_internal_index_.rtmapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Defined in [src/internal/index.ts:54](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L54)*

___

### `Optional` heartbeatInterval

• **heartbeatInterval**? : *NodeJS.Timeout*

*Defined in [src/internal/index.ts:59](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L59)*

___

### `Optional` license

• **license**? : *undefined | number*

*Defined in [src/internal/index.ts:57](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L57)*

___

###  requestsQueue

• **requestsQueue**: *any*

*Defined in [src/internal/index.ts:60](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L60)*

___

### `Optional` socket

• **socket**? : *ws*

*Defined in [src/internal/index.ts:58](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L58)*

___

###  subscribedPushes

• **subscribedPushes**: *any*

*Defined in [src/internal/index.ts:61](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L61)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Defined in [src/internal/index.ts:56](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L56)*

___

###  version

• **version**: *string*

*Defined in [src/internal/index.ts:55](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L55)*

## Methods

###  connect

▸ **connect**(): *Promise‹void›*

*Defined in [src/internal/index.ts:72](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L72)*

**Returns:** *Promise‹void›*

___

### `Private` handlePush

▸ **handlePush**(`type`: string, `payload`: any): *void*

*Defined in [src/internal/index.ts:114](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload` | any |

**Returns:** *void*

___

### `Private` handleResponse

▸ **handleResponse**(`request_id`: string, `success`: boolean, `payload`: any): *void*

*Defined in [src/internal/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L106)*

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

*Defined in [src/internal/index.ts:120](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  subscribePush

▸ **subscribePush**(`push`: string, `callback`: function): *void*

*Defined in [src/internal/index.ts:138](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L138)*

**Parameters:**

▪ **push**: *string*

▪ **callback**: *function*

▸ (`payload`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *void*

___

###  unsubscribePush

▸ **unsubscribePush**(`push`: string): *void*

*Defined in [src/internal/index.ts:145](https://github.com/livechat/lc-sdk-js/blob/21d7a55/src/internal/index.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |

**Returns:** *void*
