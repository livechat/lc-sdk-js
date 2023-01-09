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

[webhooks/index.ts:164](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L164)

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

[webhooks/index.ts:172](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L172)

___

### reason

• **reason**: `string`

#### Defined in

[webhooks/index.ts:167](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L167)

___

### requester\_id

• `Optional` **requester\_id**: `string`

#### Defined in

[webhooks/index.ts:166](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L166)

___

### thread\_id

• `Optional` **thread\_id**: `string`

#### Defined in

[webhooks/index.ts:165](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L165)

___

### transferred\_to

• **transferred\_to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent_ids?` | `string`[] |
| `group_ids?` | `number`[] |

#### Defined in

[webhooks/index.ts:168](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/webhooks/index.ts#L168)
