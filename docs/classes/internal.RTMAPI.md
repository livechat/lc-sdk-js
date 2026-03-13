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

[internal/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L89)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L80)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Defined in

[internal/index.ts:87](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L87)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `number`

#### Defined in

[internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L84)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L85)

___

### socket

• `Optional` **socket**: `any`

#### Defined in

[internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L83)

___

### subscribedPushes

• **subscribedPushes**: `Map`<`string`, `pushCallback`\>

#### Defined in

[internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L86)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter)

#### Defined in

[internal/index.ts:91](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L91)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L82)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L81)

___

### webSocketClass

• `Protected` `Readonly` **webSocketClass**: `any`

#### Defined in

[internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L90)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:102](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L102)

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

[internal/index.ts:150](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L150)

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

[internal/index.ts:142](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L142)

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

[internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L157)

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

[internal/index.ts:191](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L191)

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

[internal/index.ts:177](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L177)

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

[internal/index.ts:187](https://github.com/livechat/lc-sdk-js/blob/99c5b92/src/internal/index.ts#L187)
