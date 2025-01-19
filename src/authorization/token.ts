export type TokenType = "Bearer" | "Basic";

export interface Token {
  accessToken: string;
  organizationID: string;
  region: string;
  tokenType: TokenType;
}

export type TokenGetter = () => Token;

export function validateTokenGetter(tokenGetter: TokenGetter) {
  const { accessToken, organizationID, region, tokenType } = tokenGetter();

  validateStringNonEmpty("accessToken", accessToken);
  validateStringNonEmpty("organizationID", organizationID);
  validateStringNonEmpty("region", region);
  validateStringNonEmpty("tokenType", tokenType);
}

function validateStringNonEmpty(name: string, value: unknown) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Token.${name} must be a non-empty string`);
  }
}
