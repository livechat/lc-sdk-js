export interface Token {
  licenseID: number;
  accessToken: string;
  region: string;
}

export type TokenGetter = () => Token;
