[@livechat/lc-sdk-js](../README.md) / [internal](../modules/internal.md) / WebAPI

# Class: WebAPI

[internal](../modules/internal.md).WebAPI

## Hierarchy

- **`WebAPI`**

  ↳ [`default`](agent_web.default.md)

  ↳ [`default`](configuration.default.md)

  ↳ [`default`](customer_web.default.md)

## Table of contents

### Constructors

- [constructor](internal.WebAPI.md#constructor)

### Properties

- [APIURL](internal.WebAPI.md#apiurl)
- [actionsMethodGet](internal.WebAPI.md#actionsmethodget)
- [clientID](internal.WebAPI.md#clientid)
- [tokenGetter](internal.WebAPI.md#tokengetter)
- [type](internal.WebAPI.md#type)
- [version](internal.WebAPI.md#version)

### Methods

- [call](internal.WebAPI.md#call)
- [send](internal.WebAPI.md#send)

## Constructors

### constructor

• **new WebAPI**(`clientID`, `tokenGetter`, `type`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientID` | `string` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization.md#tokengetter) |
| `type` | `apiType` |
| `options?` | [`WebAPIOptions`](../interfaces/objects.WebAPIOptions.md) |

#### Defined in

[internal/index.ts:27](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L27)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L15)

___

### actionsMethodGet

• `Private` `Readonly` **actionsMethodGet**: `string`[]

#### Defined in

[internal/index.ts:17](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L17)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Defined in

[internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L28)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Defined in

[internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L29)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Defined in

[internal/index.ts:30](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L30)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L16)

## Methods

### call

▸ `Private` **call**(`action`, `payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `payload` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[internal/index.ts:49](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L49)

___

### send

▸ **send**<`T`\>(`name`, `req`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `req` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[internal/index.ts:37](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L37)
