[@livechat/lc-sdk-js](../README.md) / [webhooks](../modules/webhooks.md) / ChatTransferred

# Interface: ChatTransferred

[webhooks](../modules/webhooks.md).ChatTransferred

## Table of contents

### Properties

- [chat\_id](webhooks.ChatTransferred.md#chat_id)
- [queue](webhooks.ChatTransferred.md#queue)
- [reason](webhooks.ChatTransferred.md#reason)
- [requester\_id](webhooks.ChatTransferred.md#requester_id)
- [thread\_id](webhooks.ChatTransferred.md#thread_id)
- [transferred\_to](webhooks.ChatTransferred.md#transferred_to)

## Properties

### chat\_id

• **chat\_id**: `string`

#### Defined in

[webhooks/index.ts:173](https://github.com/livechat/lc-sdk-js/blob/303bec4/src/webhooks/index.ts#L173)

___

### queue

• `Optional` **queue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `position` | `number` |
| `queued_at` | `string` |
| `wait_time` | `number` |

#### Defined in

[webhooks/index.ts:181](https://github.com/livechat/lc-sdk-js/blob/303bec4/src/webhooks/index.ts#L181)

___

### reason

• **reason**: `string`

#### Defined in

[webhooks/index.ts:176](https://github.com/livechat/lc-sdk-js/blob/303bec4/src/webhooks/index.ts#L176)

___

### requester\_id

• `Optional` **requester\_id**: `string`

#### Defined in

[webhooks/index.ts:175](https://github.com/livechat/lc-sdk-js/blob/303bec4/src/webhooks/index.ts#L175)

___

### thread\_id

• `Optional` **thread\_id**: `string`

#### Defined in

[webhooks/index.ts:174](https://github.com/livechat/lc-sdk-js/blob/303bec4/src/webhooks/index.ts#L174)

___

### transferred\_to

• **transferred\_to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent_ids?` | `string`[] |
| `group_ids?` | `number`[] |

#### Defined in

[webhooks/index.ts:177](https://github.com/livechat/lc-sdk-js/blob/303bec4/src/webhooks/index.ts#L177)
