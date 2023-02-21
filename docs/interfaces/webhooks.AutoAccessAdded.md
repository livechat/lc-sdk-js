[@livechat/lc-sdk-js](../README.md) / [webhooks](../modules/webhooks.md) / AutoAccessAdded

# Interface: AutoAccessAdded

[webhooks](../modules/webhooks.md).AutoAccessAdded

## Table of contents

### Properties

- [access](webhooks.AutoAccessAdded.md#access)
- [conditions](webhooks.AutoAccessAdded.md#conditions)
- [description](webhooks.AutoAccessAdded.md#description)
- [id](webhooks.AutoAccessAdded.md#id)
- [next\_id](webhooks.AutoAccessAdded.md#next_id)

## Properties

### access

• **access**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `group_ids` | `number`[] |

#### Defined in

[webhooks/index.ts:300](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/index.ts#L300)

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

[webhooks/index.ts:303](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/index.ts#L303)

___

### description

• **description**: `string`

#### Defined in

[webhooks/index.ts:299](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/index.ts#L299)

___

### id

• **id**: `string`

#### Defined in

[webhooks/index.ts:298](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/index.ts#L298)

___

### next\_id

• `Optional` **next\_id**: `string`

#### Defined in

[webhooks/index.ts:316](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/index.ts#L316)
