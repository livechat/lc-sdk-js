[lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/internal/index"](../modules/_src_internal_index_.md) › [RTMAPI](_src_internal_index_.rtmapi.md)

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

*Defined in [src/internal/index.ts:71](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [apiType](../modules/_src_internal_index_.md#apitype) |
`license?` | undefined &#124; number |

**Returns:** *[RTMAPI](_src_internal_index_.rtmapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Defined in [src/internal/index.ts:64](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L64)*

___

### `Optional` heartbeatInterval

• **heartbeatInterval**? : *NodeJS.Timeout*

*Defined in [src/internal/index.ts:69](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L69)*

___

### `Optional` license

• **license**? : *undefined | number*

*Defined in [src/internal/index.ts:67](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L67)*

___

###  requestsQueue

• **requestsQueue**: *any*

*Defined in [src/internal/index.ts:70](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L70)*

___

### `Optional` socket

• **socket**? : *ws*

*Defined in [src/internal/index.ts:68](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L68)*

___

###  subscribedPushes

• **subscribedPushes**: *any*

*Defined in [src/internal/index.ts:71](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L71)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Defined in [src/internal/index.ts:66](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L66)*

___

###  version

• **version**: *string*

*Defined in [src/internal/index.ts:65](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L65)*

## Methods

###  connect

▸ **connect**(): *Promise‹any›*

*Defined in [src/internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L82)*

**Returns:** *Promise‹any›*

___

### `Private` handlePush

▸ **handlePush**(`type`: string, `payload`: any): *void*

*Defined in [src/internal/index.ts:121](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload` | any |

**Returns:** *void*

___

### `Private` handleResponse

▸ **handleResponse**(`request_id`: string, `success`: boolean, `payload`: any): *void*

*Defined in [src/internal/index.ts:111](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L111)*

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

*Defined in [src/internal/index.ts:127](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  subscribePush

▸ **subscribePush**(`push`: string, `callback`: Function): *void*

*Defined in [src/internal/index.ts:146](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |
`callback` | Function |

**Returns:** *void*

___

###  unsubscribePush

▸ **unsubscribePush**(`push`: string): *void*

*Defined in [src/internal/index.ts:153](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |

**Returns:** *void*
