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
| `options?` | [`RTMAPIOptions`](../interfaces/objects.RTMAPIOptions.md) |

#### Defined in

[internal/index.ts:88](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L88)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L79)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `Timeout`

#### Defined in

[internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L84)

___

### organization\_id

• `Optional` **organization\_id**: `string`

#### Defined in

[internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L82)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L85)

___

### socket

• `Optional` **socket**: `WebSocket`

#### Defined in

[internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L83)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Defined in

[internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L86)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L81)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L80)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:98](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L98)

___

### handlePush

▸ `Private` **handlePush**(`type`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `payload` | [`Push`](../interfaces/objects.Push.md)<`unknown`\> |

#### Returns

`void`

#### Defined in

[internal/index.ts:143](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L143)

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

[internal/index.ts:135](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L135)

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

[internal/index.ts:149](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L149)

___

### subscribePush

▸ **subscribePush**(`push`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |
| `callback` | (`payload`: [`Push`](../interfaces/objects.Push.md)<`unknown`\>) => `void` |

#### Returns

`void`

#### Defined in

[internal/index.ts:166](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L166)

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

[internal/index.ts:173](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L173)
