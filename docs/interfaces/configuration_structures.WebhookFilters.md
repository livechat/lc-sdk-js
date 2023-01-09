[@livechat/lc-sdk-js](../README.md) / [configuration/structures](../modules/configuration_structures.md) / WebhookFilters

# Interface: WebhookFilters

[configuration/structures](../modules/configuration_structures.md).WebhookFilters

## Table of contents

### Properties

- [author\_type](configuration_structures.WebhookFilters.md#author_type)
- [chat\_presence](configuration_structures.WebhookFilters.md#chat_presence)
- [only\_my\_chats](configuration_structures.WebhookFilters.md#only_my_chats)

## Properties

### author\_type

• `Optional` **author\_type**: `string`

#### Defined in

[configuration/structures.ts:130](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/structures.ts#L130)

___

### chat\_presence

• `Optional` **chat\_presence**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `my_bots` | `boolean` |
| `user_ids?` | [`Filter`](objects.Filter.md)<`string`\> |

#### Defined in

[configuration/structures.ts:132](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/structures.ts#L132)

___

### only\_my\_chats

• `Optional` **only\_my\_chats**: `boolean`

#### Defined in

[configuration/structures.ts:131](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/structures.ts#L131)
