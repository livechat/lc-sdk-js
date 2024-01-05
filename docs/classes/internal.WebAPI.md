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
- [author\_id](internal.WebAPI.md#author_id)
- [clientID](internal.WebAPI.md#clientid)
- [tokenGetter](internal.WebAPI.md#tokengetter)
- [type](internal.WebAPI.md#type)
- [version](internal.WebAPI.md#version)

### Methods

- [call](internal.WebAPI.md#call)
- [send](internal.WebAPI.md#send)
- [setAuthorId](internal.WebAPI.md#setauthorid)

## Constructors

### constructor

• **new WebAPI**(`clientID`, `tokenGetter`, `type`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientID` | `string` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization.md#tokengetter) |
| `type` | `apiType` |
| `options?` | `WebAPIOptions` |

#### Defined in

[internal/index.ts:26](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L26)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L13)

___

### actionsMethodGet

• `Private` `Readonly` **actionsMethodGet**: `string`[]

#### Defined in

[internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L16)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L15)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Defined in

[internal/index.ts:27](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L27)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Defined in

[internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L28)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Defined in

[internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L29)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L14)

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

[internal/index.ts:48](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L48)

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

[internal/index.ts:36](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L36)

___

### setAuthorId

▸ **setAuthorId**(`author_id?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author_id?` | `string` |

#### Returns

`void`

#### Defined in

[internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/internal/index.ts#L79)
