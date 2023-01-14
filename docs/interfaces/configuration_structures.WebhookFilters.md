[@livechat/lc-sdk-js](../README.md) / [configuration/structures](../modules/configuration_structures.md) / WebhookFilters

# Interface: WebhookFilters

[configuration/structures](../modules/configuration_structures.md).WebhookFilters

## Table of contents

### Properties

- [author\_type](configuration_structures.WebhookFilters.md#author_type)
- [chat\_presence](configuration_structures.WebhookFilters.md#chat_presence)
- [only\_my\_chats](configuration_structures.WebhookFilters.md#only_my_chats)
- [source\_type](configuration_structures.WebhookFilters.md#source_type)

## Properties

### author\_type

• `Optional` **author\_type**: `string`

#### Defined in

[configuration/structures.ts:148](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/structures.ts#L148)

___

### chat\_presence

• `Optional` **chat\_presence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `my_bots` | `boolean` |
| `user_ids?` | [`Filter`](objects.Filter.md)<`string`\> |

#### Defined in

[configuration/structures.ts:150](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/structures.ts#L150)

___

### only\_my\_chats

• `Optional` **only\_my\_chats**: `boolean`

#### Defined in

[configuration/structures.ts:149](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/structures.ts#L149)

___

### source\_type

• `Optional` **source\_type**: `WebhookSourceType`[]

#### Defined in

[configuration/structures.ts:154](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/structures.ts#L154)