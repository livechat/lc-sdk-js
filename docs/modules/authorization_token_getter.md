[@livechat/lc-sdk-js](../README.md) / authorization/token\_getter

# Module: authorization/token\_getter

## Table of contents

### Interfaces

- [Token](../interfaces/authorization_token_getter.Token.md)

### Type Aliases

- [TokenGetter](authorization_token_getter.md#tokengetter)
- [TokenType](authorization_token_getter.md#tokentype)

### Functions

- [validateTokenGetter](authorization_token_getter.md#validatetokengetter)

## Type Aliases

### TokenGetter

Ƭ **TokenGetter**: () => [`Token`](../interfaces/authorization_token_getter.Token.md)

#### Type declaration

▸ (): [`Token`](../interfaces/authorization_token_getter.Token.md)

##### Returns

[`Token`](../interfaces/authorization_token_getter.Token.md)

#### Defined in

[authorization/token_getter.ts:10](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/authorization/token_getter.ts#L10)

___

### TokenType

Ƭ **TokenType**: ``"Bearer"`` \| ``"Basic"``

#### Defined in

[authorization/token_getter.ts:1](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/authorization/token_getter.ts#L1)

## Functions

### validateTokenGetter

▸ **validateTokenGetter**(`tokenGetter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenGetter` | [`TokenGetter`](authorization_token_getter.md#tokengetter) |

#### Returns

`void`

#### Defined in

[authorization/token_getter.ts:12](https://github.com/livechat/lc-sdk-js/blob/1b4de27/src/authorization/token_getter.ts#L12)
