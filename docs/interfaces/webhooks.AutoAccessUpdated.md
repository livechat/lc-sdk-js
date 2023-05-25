[@livechat/lc-sdk-js](../README.md) / [webhooks](../modules/webhooks.md) / AutoAccessUpdated

# Interface: AutoAccessUpdated

[webhooks](../modules/webhooks.md).AutoAccessUpdated

## Table of contents

### Properties

- [access](webhooks.AutoAccessUpdated.md#access)
- [conditions](webhooks.AutoAccessUpdated.md#conditions)
- [description](webhooks.AutoAccessUpdated.md#description)
- [id](webhooks.AutoAccessUpdated.md#id)
- [next\_id](webhooks.AutoAccessUpdated.md#next_id)

## Properties

### access

• **access**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `group_ids` | `number`[] |

#### Defined in

[webhooks/index.ts:332](https://github.com/livechat/lc-sdk-js/blob/10347df/src/webhooks/index.ts#L332)

___

### conditions

• **conditions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domain` | [`Filter`](webhooks_structures_structures.Filter.md)<{ `exact_match`: `boolean` ; `value`: `string`  }\> |
| `geolocation` | `Pick`<[`Filter`](webhooks_structures_structures.Filter.md)<{ `city?`: `string` ; `country?`: `string` ; `country_code?`: `string` ; `region?`: `string`  }\>, ``"values"``\> |
| `url` | [`Filter`](webhooks_structures_structures.Filter.md)<{ `exact_match`: `boolean` ; `value`: `string`  }\> |

#### Defined in

[webhooks/index.ts:335](https://github.com/livechat/lc-sdk-js/blob/10347df/src/webhooks/index.ts#L335)

___

### description

• `Optional` **description**: `string`

#### Defined in

[webhooks/index.ts:331](https://github.com/livechat/lc-sdk-js/blob/10347df/src/webhooks/index.ts#L331)

___

### id

• **id**: `string`

#### Defined in

[webhooks/index.ts:330](https://github.com/livechat/lc-sdk-js/blob/10347df/src/webhooks/index.ts#L330)

___

### next\_id

• `Optional` **next\_id**: `string`

#### Defined in

[webhooks/index.ts:348](https://github.com/livechat/lc-sdk-js/blob/10347df/src/webhooks/index.ts#L348)
