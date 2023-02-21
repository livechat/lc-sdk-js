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

[webhooks/index.ts:296](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/webhooks/index.ts#L296)

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

[webhooks/index.ts:299](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/webhooks/index.ts#L299)

___

### description

• **description**: `string`

#### Defined in

[webhooks/index.ts:295](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/webhooks/index.ts#L295)

___

### id

• **id**: `string`

#### Defined in

[webhooks/index.ts:294](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/webhooks/index.ts#L294)

___

### next\_id

• `Optional` **next\_id**: `string`

#### Defined in

[webhooks/index.ts:312](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/webhooks/index.ts#L312)
