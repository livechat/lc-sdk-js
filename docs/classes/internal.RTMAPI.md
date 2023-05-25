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
- [license](internal.RTMAPI.md#license)
- [requestsQueue](internal.RTMAPI.md#requestsqueue)
- [socket](internal.RTMAPI.md#socket)
- [subscribedPushes](internal.RTMAPI.md#subscribedpushes)
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

• **new RTMAPI**(`webSocketClass`, `type`, `license?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `webSocketClass` | `any` |
| `type` | `apiType` |
| `license?` | `number` |
| `options?` | `RTMAPIOptions` |

#### Defined in

[internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L90)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L80)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Defined in

[internal/index.ts:88](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L88)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `any`

#### Defined in

[internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L85)

___

### license

• `Optional` **license**: `number`

#### Defined in

[internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L83)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L86)

___

### socket

• `Optional` **socket**: `any`

#### Defined in

[internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L84)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Defined in

[internal/index.ts:87](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L87)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L82)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L81)

___

### webSocketClass

• `Protected` `Readonly` **webSocketClass**: `any`

#### Defined in

[internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L90)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:99](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L99)

___

### handlePush

▸ `Private` **handlePush**(`type`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `payload` | `Push`<`unknown`\> |

#### Returns

`void`

#### Defined in

[internal/index.ts:141](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L141)

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

[internal/index.ts:133](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L133)

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

[internal/index.ts:147](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L147)

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

[internal/index.ts:178](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L178)

___

### subscribePush

▸ **subscribePush**(`push`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |
| `callback` | (`payload`: `Push`<`unknown`\>) => `void` |

#### Returns

`void`

#### Defined in

[internal/index.ts:167](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L167)

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

[internal/index.ts:174](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L174)
