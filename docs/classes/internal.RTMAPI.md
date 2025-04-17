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
| `tokenGetter` | [`TokenGetter`](../modules/authorization.md#tokengetter) |
| `type` | `apiType` |
| `options?` | `RTMAPIOptions` |

#### Defined in

[internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L82)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:73](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L73)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Defined in

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L80)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `number`

#### Defined in

[internal/index.ts:77](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L77)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:78](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L78)

___

### socket

• `Optional` **socket**: `any`

#### Defined in

[internal/index.ts:76](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L76)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Defined in

[internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L79)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Defined in

[internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L84)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:75](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L75)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L74)

___

### webSocketClass

• `Protected` `Readonly` **webSocketClass**: `any`

#### Defined in

[internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L83)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:95](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L95)

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

[internal/index.ts:145](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L145)

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

[internal/index.ts:137](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L137)

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

[internal/index.ts:151](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L151)

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

[internal/index.ts:182](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L182)

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

[internal/index.ts:171](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L171)

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

[internal/index.ts:178](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/internal/index.ts#L178)
