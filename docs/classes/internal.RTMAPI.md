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
- [license](internal.RTMAPI.md#license)
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

• **new RTMAPI**(`type`, `license?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `apiType` |
| `license?` | `number` |
| `options?` | [`RTMAPIOptions`](../interfaces/objects.RTMAPIOptions.md) |

#### Defined in

[internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L83)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L74)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `Timeout`

#### Defined in

[internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L79)

___

### license

• `Optional` **license**: `number`

#### Defined in

[internal/index.ts:77](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L77)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L80)

___

### socket

• `Optional` **socket**: `WebSocket`

#### Defined in

[internal/index.ts:78](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L78)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Defined in

[internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L81)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:76](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L76)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:75](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L75)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:92](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L92)

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

[internal/index.ts:134](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L134)

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

[internal/index.ts:126](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L126)

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

[internal/index.ts:140](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L140)

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

[internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L157)

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

[internal/index.ts:164](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L164)
