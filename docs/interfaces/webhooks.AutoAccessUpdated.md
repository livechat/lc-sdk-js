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

[webhooks/index.ts:339](https://github.com/livechat/lc-sdk-js/blob/a90d101/src/webhooks/index.ts#L339)

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

[webhooks/index.ts:342](https://github.com/livechat/lc-sdk-js/blob/a90d101/src/webhooks/index.ts#L342)

___

### description

• `Optional` **description**: `string`

#### Defined in

[webhooks/index.ts:338](https://github.com/livechat/lc-sdk-js/blob/a90d101/src/webhooks/index.ts#L338)

___

### id

• **id**: `string`

#### Defined in

[webhooks/index.ts:337](https://github.com/livechat/lc-sdk-js/blob/a90d101/src/webhooks/index.ts#L337)

___

### next\_id

• `Optional` **next\_id**: `string`

#### Defined in

[webhooks/index.ts:355](https://github.com/livechat/lc-sdk-js/blob/a90d101/src/webhooks/index.ts#L355)
