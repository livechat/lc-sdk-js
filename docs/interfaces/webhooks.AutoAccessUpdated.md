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

[webhooks/index.ts:322](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L322)

___

### conditions

• **conditions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domain` | [`Filter`](objects.Filter.md)<{ `exact_match`: `boolean` ; `value`: `string`  }\> |
| `geolocation` | `Pick`<[`Filter`](objects.Filter.md)<{ `city?`: `string` ; `country?`: `string` ; `country_code?`: `string` ; `region?`: `string`  }\>, ``"values"``\> |
| `url` | [`Filter`](objects.Filter.md)<{ `exact_match`: `boolean` ; `value`: `string`  }\> |

#### Defined in

[webhooks/index.ts:325](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L325)

___

### description

• `Optional` **description**: `string`

#### Defined in

[webhooks/index.ts:321](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L321)

___

### id

• **id**: `string`

#### Defined in

[webhooks/index.ts:320](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L320)

___

### next\_id

• `Optional` **next\_id**: `string`

#### Defined in

[webhooks/index.ts:338](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L338)
