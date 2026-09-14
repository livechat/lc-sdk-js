[**@livechat/lc-sdk-js**](../../README.md)

***

[@livechat/lc-sdk-js](../../README.md) / [internal](../README.md) / WebAPI

# Class: WebAPI

Defined in: [internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L13)

## Extended by

- [`default`](../../agent/web/classes/default.md)
- [`default`](../../configuration/classes/default.md)
- [`default`](../../customer/web/classes/default.md)

## Constructors

### Constructor

> **new WebAPI**(`clientID`, `tokenGetter`, `type`, `options?`): `WebAPI`

Defined in: [internal/index.ts:19](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L19)

#### Parameters

##### clientID

`string`

##### tokenGetter

[`TokenGetter`](../../authorization/token_getter/type-aliases/TokenGetter.md)

##### type

`apiType`

##### options?

`WebAPIOptions`

#### Returns

`WebAPI`

## Properties

### APIURL

> **APIURL**: `string`

Defined in: [internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L14)

***

### author\_id?

> `optional` **author\_id?**: `string`

Defined in: [internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L16)

***

### clientID

> `protected` `readonly` **clientID**: `string`

Defined in: [internal/index.ts:20](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L20)

***

### tokenGetter

> `protected` `readonly` **tokenGetter**: [`TokenGetter`](../../authorization/token_getter/type-aliases/TokenGetter.md)

Defined in: [internal/index.ts:21](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L21)

***

### type

> `protected` `readonly` **type**: `apiType`

Defined in: [internal/index.ts:22](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L22)

***

### version

> **version**: `string`

Defined in: [internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L15)

## Methods

### send()

> **send**\<`T`\>(`name`, `req`): `Promise`\<`T`\>

Defined in: [internal/index.ts:31](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L31)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### name

`string`

##### req

`any`

#### Returns

`Promise`\<`T`\>

***

### setAuthorId()

> **setAuthorId**(`author_id?`): `void`

Defined in: [internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L74)

#### Parameters

##### author\_id?

`string`

#### Returns

`void`
