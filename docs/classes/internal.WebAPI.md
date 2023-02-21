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

[internal/index.ts:17](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L17)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:10](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L10)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L15)

___

### clientID

• **clientID**: `string`

#### Defined in

[internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L11)

___

### tokenGetter

• **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L14)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L13)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L12)

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

[internal/index.ts:34](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L34)

___

### send

▸ **send**(`name`, `req`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `req` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L25)

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

[internal/index.ts:75](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/internal/index.ts#L75)
