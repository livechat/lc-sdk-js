[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/internal/index"](../modules/_src_internal_index_.md) › [WebAPI](_src_internal_index_.webapi.md)

# Class: WebAPI

## Hierarchy

* **WebAPI**

  ↳ [Web](_src_agent_web_.web.md)

  ↳ [Web](_src_customer_web_.web.md)

  ↳ [ConfigurationAPI](_src_configuration_index_.configurationapi.md)

## Index

### Constructors

* [constructor](_src_internal_index_.webapi.md#constructor)

### Properties

* [APIURL](_src_internal_index_.webapi.md#apiurl)
* [clientID](_src_internal_index_.webapi.md#clientid)
* [tokenGetter](_src_internal_index_.webapi.md#tokengetter)
* [type](_src_internal_index_.webapi.md#type)
* [version](_src_internal_index_.webapi.md#version)

### Methods

* [call](_src_internal_index_.webapi.md#private-call)
* [send](_src_internal_index_.webapi.md#send)

## Constructors

###  constructor

\+ **new WebAPI**(`clientID`: string, `tokenGetter`: [TokenGetter](../modules/_src_authorization_index_.md#tokengetter), `type`: [apiType](../modules/_src_internal_index_.md#apitype)): *[WebAPI](_src_internal_index_.webapi.md)*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`clientID` | string |
`tokenGetter` | [TokenGetter](../modules/_src_authorization_index_.md#tokengetter) |
`type` | [apiType](../modules/_src_internal_index_.md#apitype) |

**Returns:** *[WebAPI](_src_internal_index_.webapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Defined in [src/internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L11)*

___

###  clientID

• **clientID**: *string*

*Defined in [src/internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L12)*

___

###  tokenGetter

• **tokenGetter**: *[TokenGetter](../modules/_src_authorization_index_.md#tokengetter)*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L15)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Defined in [src/internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L14)*

___

###  version

• **version**: *string*

*Defined in [src/internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L13)*

## Methods

### `Private` call

▸ **call**(`action`: string, `payload`: any): *Promise‹any›*

*Defined in [src/internal/index.ts:34](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  send

▸ **send**(`name`: string, `req`: any): *Promise‹any›*

*Defined in [src/internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/8143b05/src/internal/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`req` | any |

**Returns:** *Promise‹any›*
