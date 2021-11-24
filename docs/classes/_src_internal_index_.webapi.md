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
* [actionsMethodGet](_src_internal_index_.webapi.md#private-readonly-actionsmethodget)
* [clientID](_src_internal_index_.webapi.md#protected-readonly-clientid)
* [tokenGetter](_src_internal_index_.webapi.md#protected-readonly-tokengetter)
* [type](_src_internal_index_.webapi.md#protected-readonly-type)
* [version](_src_internal_index_.webapi.md#version)

### Methods

* [call](_src_internal_index_.webapi.md#private-call)
* [send](_src_internal_index_.webapi.md#send)

## Constructors

###  constructor

\+ **new WebAPI**(`clientID`: string, `tokenGetter`: [TokenGetter](../modules/_src_authorization_index_.md#tokengetter), `type`: [apiType](../modules/_src_internal_index_.md#apitype), `options?`: [WebAPIOptions](../interfaces/_src_objects_index_.webapioptions.md)): *[WebAPI](_src_internal_index_.webapi.md)*

*Defined in [src/internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`clientID` | string |
`tokenGetter` | [TokenGetter](../modules/_src_authorization_index_.md#tokengetter) |
`type` | [apiType](../modules/_src_internal_index_.md#apitype) |
`options?` | [WebAPIOptions](../interfaces/_src_objects_index_.webapioptions.md) |

**Returns:** *[WebAPI](_src_internal_index_.webapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L15)*

___

### `Private` `Readonly` actionsMethodGet

• **actionsMethodGet**: *string[]* = [
    "list_license_properties",
    "list_group_properties",
    "get_dynamic_configuration",
    "get_configuration",
    "get_localization",
    "get_organization_id",
    "get_license_id",
  ]

*Defined in [src/internal/index.ts:17](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L17)*

___

### `Protected` `Readonly` clientID

• **clientID**: *string*

*Defined in [src/internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L28)*

___

### `Protected` `Readonly` tokenGetter

• **tokenGetter**: *[TokenGetter](../modules/_src_authorization_index_.md#tokengetter)*

*Defined in [src/internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L29)*

___

### `Protected` `Readonly` type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Defined in [src/internal/index.ts:30](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L30)*

___

###  version

• **version**: *string*

*Defined in [src/internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L16)*

## Methods

### `Private` call

▸ **call**(`action`: string, `payload`: any): *Promise‹any›*

*Defined in [src/internal/index.ts:49](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  send

▸ **send**‹**T**›(`name`: string, `req`: any): *Promise‹T›*

*Defined in [src/internal/index.ts:37](https://github.com/livechat/lc-sdk-js/blob/9364105/src/internal/index.ts#L37)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`req` | any |

**Returns:** *Promise‹T›*
