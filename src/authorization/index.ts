export interface Token {
  licenseID: number;
  organizationID: string;
  accessToken: string;
  region: string;
}

export type TokenGetter = () => Token;
