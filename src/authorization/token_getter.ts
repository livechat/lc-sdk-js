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

  const tokenTypeLower = tokenType.toLowerCase();
  if (tokenTypeLower !== "bearer" && tokenTypeLower !== "basic") {
    throw new Error(`Token.tokenType must be either Bearer or Basic`);
  }
}

function validateStringNonEmpty(name: string, value: unknown) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Token.${name} must be a non-empty string`);
  }
}
