[@livechat/lc-sdk-js](../README.md) / [agent/structures/filters](../modules/agent_structures_filters.md) / ArchivesFilters

# Interface: ArchivesFilters

[agent/structures/filters](../modules/agent_structures_filters.md).ArchivesFilters

## Table of contents

### Properties

- [agent\_response](agent_structures_filters.ArchivesFilters.md#agent_response)
- [agent\_types](agent_structures_filters.ArchivesFilters.md#agent_types)
- [agents](agent_structures_filters.ArchivesFilters.md#agents)
- [event\_types](agent_structures_filters.ArchivesFilters.md#event_types)
- [from](agent_structures_filters.ArchivesFilters.md#from)
- [goals](agent_structures_filters.ArchivesFilters.md#goals)
- [greetings](agent_structures_filters.ArchivesFilters.md#greetings)
- [group\_ids](agent_structures_filters.ArchivesFilters.md#group_ids)
- [properties](agent_structures_filters.ArchivesFilters.md#properties)
- [query](agent_structures_filters.ArchivesFilters.md#query)
- [sales](agent_structures_filters.ArchivesFilters.md#sales)
- [surveys](agent_structures_filters.ArchivesFilters.md#surveys)
- [tags](agent_structures_filters.ArchivesFilters.md#tags)
- [thread\_ids](agent_structures_filters.ArchivesFilters.md#thread_ids)
- [to](agent_structures_filters.ArchivesFilters.md#to)

## Properties

### agent\_response

• `Optional` **agent\_response**: [`AgentResponseFilter`](agent_structures_filters.AgentResponseFilter.md)

#### Defined in

[agent/structures/filters.ts:70](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L70)

___

### agent\_types

• `Optional` **agent\_types**: [`AgentTypesFilter`](agent_structures_filters.AgentTypesFilter.md)

#### Defined in

[agent/structures/filters.ts:63](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L63)

___

### agents

• `Optional` **agents**: [`FilterType`](agent_structures_filters.FilterType.md)<`string`\>

#### Defined in

[agent/structures/filters.ts:62](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L62)

___

### event\_types

• `Optional` **event\_types**: `Omit`<[`FilterType`](agent_structures_filters.FilterType.md)<`string`\>, ``"exists"``\>

#### Defined in

[agent/structures/filters.ts:68](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L68)

___

### from

• `Optional` **from**: `string`

#### Defined in

[agent/structures/filters.ts:57](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L57)

___

### goals

• `Optional` **goals**: [`FilterType`](agent_structures_filters.FilterType.md)<`number`\>

#### Defined in

[agent/structures/filters.ts:66](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L66)

___

### greetings

• `Optional` **greetings**: [`GreetingsFilter`](agent_structures_filters.GreetingsFilter.md)

#### Defined in

[agent/structures/filters.ts:69](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L69)

___

### group\_ids

• `Optional` **group\_ids**: `number`[]

#### Defined in

[agent/structures/filters.ts:60](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L60)

___

### properties

• `Optional` **properties**: [`PropertiesFilter`](agent_structures_structures.PropertiesFilter.md)

#### Defined in

[agent/structures/filters.ts:61](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L61)

___

### query

• `Optional` **query**: `string`

#### Defined in

[agent/structures/filters.ts:56](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L56)

___

### sales

• `Optional` **sales**: [`FilterType`](agent_structures_filters.FilterType.md)<`number`\>

#### Defined in

[agent/structures/filters.ts:65](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L65)

___

### surveys

• `Optional` **surveys**: [`SurveyFilter`](agent_structures_filters.SurveyFilter.md)[]

#### Defined in

[agent/structures/filters.ts:67](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L67)

___

### tags

• `Optional` **tags**: [`FilterType`](agent_structures_filters.FilterType.md)<`string`\>

#### Defined in

[agent/structures/filters.ts:64](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L64)

___

### thread\_ids

• `Optional` **thread\_ids**: `string`[]

#### Defined in

[agent/structures/filters.ts:59](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L59)

___

### to

• `Optional` **to**: `string`

#### Defined in

[agent/structures/filters.ts:58](https://github.com/livechat/lc-sdk-js/blob/7985816/src/agent/structures/filters.ts#L58)
