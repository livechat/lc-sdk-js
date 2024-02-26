[@livechat/lc-sdk-js](../README.md) / [configuration/structures/structures](../modules/configuration_structures_structures.md) / WebhookFilters

# Interface: WebhookFilters

[configuration/structures/structures](../modules/configuration_structures_structures.md).WebhookFilters

## Table of contents

### Properties

- [author\_type](configuration_structures_structures.WebhookFilters.md#author_type)
- [chat\_presence](configuration_structures_structures.WebhookFilters.md#chat_presence)
- [only\_my\_chats](configuration_structures_structures.WebhookFilters.md#only_my_chats)
- [source\_type](configuration_structures_structures.WebhookFilters.md#source_type)

## Properties

### author\_type

• `Optional` **author\_type**: `string`

#### Defined in

[configuration/structures/structures.ts:141](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/structures/structures.ts#L141)

___

### chat\_presence

• `Optional` **chat\_presence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `my_bots` | `boolean` |
| `user_ids?` | [`Filter`](configuration_structures_structures.Filter.md)<`string`\> |

#### Defined in

[configuration/structures/structures.ts:143](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/structures/structures.ts#L143)

___

### only\_my\_chats

• `Optional` **only\_my\_chats**: `boolean`

#### Defined in

[configuration/structures/structures.ts:142](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/structures/structures.ts#L142)

___

### source\_type

• `Optional` **source\_type**: `WebhookSourceType`[]

#### Defined in

[configuration/structures/structures.ts:147](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/structures/structures.ts#L147)
