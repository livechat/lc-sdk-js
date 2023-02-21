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
- [organization\_id](internal.RTMAPI.md#organization_id)
- [requestsQueue](internal.RTMAPI.md#requestsqueue)
- [socket](internal.RTMAPI.md#socket)
- [subscribedPushes](internal.RTMAPI.md#subscribedpushes)
- [type](internal.RTMAPI.md#type)
- [version](internal.RTMAPI.md#version)

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

• **new RTMAPI**(`type`, `organization_id?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `apiType` |
| `organization_id?` | `string` |
| `options?` | `RTMAPIOptions` |

#### Defined in

[internal/index.ts:96](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L96)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L86)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Defined in

[internal/index.ts:94](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L94)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `Timeout`

#### Defined in

[internal/index.ts:91](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L91)

___

### organization\_id

• `Optional` **organization\_id**: `string`

#### Defined in

[internal/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L89)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:92](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L92)

___

### socket

• `Optional` **socket**: `WebSocket`

#### Defined in

[internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L90)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Defined in

[internal/index.ts:93](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L93)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:88](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L88)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:87](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L87)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L106)

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

[internal/index.ts:151](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L151)

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

[internal/index.ts:143](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L143)

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

[internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L157)

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

[internal/index.ts:188](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L188)

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

[internal/index.ts:177](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L177)

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

[internal/index.ts:184](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/internal/index.ts#L184)
