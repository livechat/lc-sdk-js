[@livechat/lc-sdk-js](../README.md) / [internal](../modules/internal.md) / RTMAPI

# Class: RTMAPI

[internal](../modules/internal.md).RTMAPI

## Hierarchy

- **`RTMAPI`**

  ↳ [`default`](agent_rtm.default.md)

  ↳ [`default`](customer_rtm.default.md)

## Table of contents

### Constructors

- [constructor](internal.RTMAPI.md#constructor)

### Properties

- [APIURL](internal.RTMAPI.md#apiurl)
- [author\_id](internal.RTMAPI.md#author_id)
- [heartbeatInterval](internal.RTMAPI.md#heartbeatinterval)
- [requestsQueue](internal.RTMAPI.md#requestsqueue)
- [socket](internal.RTMAPI.md#socket)
- [subscribedPushes](internal.RTMAPI.md#subscribedpushes)
- [tokenGetter](internal.RTMAPI.md#tokengetter)
- [type](internal.RTMAPI.md#type)
- [version](internal.RTMAPI.md#version)
- [webSocketClass](internal.RTMAPI.md#websocketclass)

### Methods

- [connect](internal.RTMAPI.md#connect)
- [handlePush](internal.RTMAPI.md#handlepush)
- [handleResponse](internal.RTMAPI.md#handleresponse)
- [send](internal.RTMAPI.md#send)
- [setAuthorId](internal.RTMAPI.md#setauthorid)
- [subscribePush](internal.RTMAPI.md#subscribepush)
- [unsubscribePush](internal.RTMAPI.md#unsubscribepush)

## Constructors

### constructor

• **new RTMAPI**(`webSocketClass`, `tokenGetter`, `type`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `webSocketClass` | `any` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter) |
| `type` | `apiType` |
| `options?` | `RTMAPIOptions` |

#### Defined in

[internal/index.ts:94](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L94)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L85)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Defined in

[internal/index.ts:92](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L92)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `number`

#### Defined in

[internal/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L89)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L90)

___

### socket

• `Optional` **socket**: `any`

#### Defined in

[internal/index.ts:88](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L88)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Defined in

[internal/index.ts:91](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L91)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter)

#### Defined in

[internal/index.ts:96](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L96)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:87](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L87)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L86)

___

### webSocketClass

• `Protected` `Readonly` **webSocketClass**: `any`

#### Defined in

[internal/index.ts:95](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L95)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:107](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L107)

___

### handlePush

▸ `Private` **handlePush**(`type`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `payload` | `any` |

#### Returns

`void`

#### Defined in

[internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L157)

___

### handleResponse

▸ `Private` **handleResponse**(`request_id`, `success`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request_id` | `string` |
| `success` | `boolean` |
| `payload` | `any` |

#### Returns

`void`

#### Defined in

[internal/index.ts:149](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L149)

___

### send

▸ **send**(`action`, `payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `payload` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[internal/index.ts:163](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L163)

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

[internal/index.ts:194](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L194)

___

### subscribePush

▸ **subscribePush**<`P`\>(`push`, `callback`): `void`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |
| `callback` | (`payload`: `P`) => `void` |

#### Returns

`void`

#### Defined in

[internal/index.ts:183](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L183)

___

### unsubscribePush

▸ **unsubscribePush**(`push`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |

#### Returns

`void`

#### Defined in

[internal/index.ts:190](https://github.com/livechat/lc-sdk-js/blob/b363d91/src/internal/index.ts#L190)
