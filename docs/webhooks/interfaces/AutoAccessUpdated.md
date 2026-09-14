[**@livechat/lc-sdk-js**](../../README.md)

***

[@livechat/lc-sdk-js](../../README.md) / [webhooks](../README.md) / AutoAccessUpdated

# Interface: AutoAccessUpdated

Defined in: [webhooks/index.ts:332](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L332)

## Properties

### access

> **access**: `object`

Defined in: [webhooks/index.ts:335](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L335)

#### group\_ids

> **group\_ids**: `number`[]

***

### conditions

> **conditions**: `object`

Defined in: [webhooks/index.ts:338](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L338)

#### domain

> **domain**: [`Filter`](../structures/structures/interfaces/Filter.md)\<\{ `exact_match`: `boolean`; `value`: `string`; \}\>

#### geolocation

> **geolocation**: `Pick`\<[`Filter`](../structures/structures/interfaces/Filter.md)\<\{ `city?`: `string`; `country?`: `string`; `country_code?`: `string`; `region?`: `string`; \}\>, `"values"`\>

#### url

> **url**: [`Filter`](../structures/structures/interfaces/Filter.md)\<\{ `exact_match`: `boolean`; `value`: `string`; \}\>

***

### description?

> `optional` **description?**: `string`

Defined in: [webhooks/index.ts:334](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L334)

***

### id

> **id**: `string`

Defined in: [webhooks/index.ts:333](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L333)

***

### next\_id?

> `optional` **next\_id?**: `string`

Defined in: [webhooks/index.ts:351](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/webhooks/index.ts#L351)
