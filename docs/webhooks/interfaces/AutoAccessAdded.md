[**@livechat/lc-sdk-js**](../../README.md)

***

[@livechat/lc-sdk-js](../../README.md) / [webhooks](../README.md) / AutoAccessAdded

# Interface: AutoAccessAdded

Defined in: [webhooks/index.ts:306](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L306)

## Properties

### access

> **access**: `object`

Defined in: [webhooks/index.ts:309](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L309)

#### group\_ids

> **group\_ids**: `number`[]

***

### conditions

> **conditions**: `object`

Defined in: [webhooks/index.ts:312](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L312)

#### domain

> **domain**: [`Filter`](../structures/structures/interfaces/Filter.md)\<\{ `exact_match`: `boolean`; `value`: `string`; \}\>

#### geolocation

> **geolocation**: `Pick`\<[`Filter`](../structures/structures/interfaces/Filter.md)\<\{ `city?`: `string`; `country?`: `string`; `country_code?`: `string`; `region?`: `string`; \}\>, `"values"`\>

#### url

> **url**: [`Filter`](../structures/structures/interfaces/Filter.md)\<\{ `exact_match`: `boolean`; `value`: `string`; \}\>

***

### description

> **description**: `string`

Defined in: [webhooks/index.ts:308](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L308)

***

### id

> **id**: `string`

Defined in: [webhooks/index.ts:307](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L307)

***

### next\_id?

> `optional` **next\_id?**: `string`

Defined in: [webhooks/index.ts:325](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L325)
