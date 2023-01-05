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

• **new RTMAPI**(`type`, `license?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `apiType` |
| `license?` | `number` |

#### Defined in

[internal/index.ts:63](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L63)

## Properties

### APIURL

• **APIURL**: `string`

#### Defined in

[internal/index.ts:54](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L54)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `Timeout`

#### Defined in

[internal/index.ts:59](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L59)

___

### license

• `Optional` **license**: `number`

#### Defined in

[internal/index.ts:57](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L57)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Defined in

[internal/index.ts:60](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L60)

___

### socket

• `Optional` **socket**: `WebSocket`

#### Defined in

[internal/index.ts:58](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L58)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Defined in

[internal/index.ts:61](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L61)

___

### type

• **type**: `apiType`

#### Defined in

[internal/index.ts:56](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L56)

___

### version

• **version**: `string`

#### Defined in

[internal/index.ts:55](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L55)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[internal/index.ts:72](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L72)

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

[internal/index.ts:114](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L114)

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

[internal/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L106)

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

[internal/index.ts:120](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L120)

___

### subscribePush

▸ **subscribePush**(`push`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |
| `callback` | (`payload`: `any`) => `void` |

#### Returns

`void`

#### Defined in

[internal/index.ts:138](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L138)

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

[internal/index.ts:145](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L145)
