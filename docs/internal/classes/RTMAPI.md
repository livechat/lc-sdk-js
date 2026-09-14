[**@livechat/lc-sdk-js**](../../README.md)

***

[@livechat/lc-sdk-js](../../README.md) / [internal](../README.md) / RTMAPI

# Class: RTMAPI

Defined in: [internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L79)

## Extended by

- [`default`](../../agent/rtm/classes/default.md)
- [`default`](../../customer/rtm/classes/default.md)

## Constructors

### Constructor

> **new RTMAPI**(`webSocketClass`, `tokenGetter`, `type`, `options?`): `RTMAPI`

Defined in: [internal/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L89)

#### Parameters

##### webSocketClass

`any`

##### tokenGetter

[`TokenGetter`](../../authorization/token_getter/type-aliases/TokenGetter.md)

##### type

`apiType`

##### options?

`RTMAPIOptions`

#### Returns

`RTMAPI`

## Properties

### APIURL

> **APIURL**: `string`

Defined in: [internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L80)

***

### author\_id?

> `optional` **author\_id?**: `string`

Defined in: [internal/index.ts:87](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L87)

***

### heartbeatInterval?

> `optional` **heartbeatInterval?**: `number`

Defined in: [internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L84)

***

### requestsQueue

> **requestsQueue**: `any` = `{}`

Defined in: [internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L85)

***

### socket?

> `optional` **socket?**: `any`

Defined in: [internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L83)

***

### subscribedPushes

> **subscribedPushes**: `Map`\<`string`, `pushCallback`\>

Defined in: [internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L86)

***

### tokenGetter

> `protected` **tokenGetter**: [`TokenGetter`](../../authorization/token_getter/type-aliases/TokenGetter.md)

Defined in: [internal/index.ts:91](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L91)

***

### type

> **type**: `apiType`

Defined in: [internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L82)

***

### version

> **version**: `string`

Defined in: [internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L81)

***

### webSocketClass

> `protected` `readonly` **webSocketClass**: `any`

Defined in: [internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L90)

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Defined in: [internal/index.ts:102](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L102)

#### Returns

`Promise`\<`void`\>

***

### send()

> **send**(`action`, `payload`): `Promise`\<`any`\>

Defined in: [internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L157)

#### Parameters

##### action

`string`

##### payload

`any`

#### Returns

`Promise`\<`any`\>

***

### setAuthorId()

> **setAuthorId**(`author_id?`): `void`

Defined in: [internal/index.ts:191](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L191)

#### Parameters

##### author\_id?

`string`

#### Returns

`void`

***

### subscribePush()

> **subscribePush**\<`P`\>(`push`, `callback`): `void`

Defined in: [internal/index.ts:177](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L177)

#### Type Parameters

##### P

`P`

#### Parameters

##### push

`string`

##### callback

(`payload`) => `void`

#### Returns

`void`

***

### unsubscribePush()

> **unsubscribePush**(`push`): `void`

Defined in: [internal/index.ts:187](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L187)

#### Parameters

##### push

`string`

#### Returns

`void`
