export type Token = {
  organizationID: string;
  accessToken: string;
  region: string;
};

export type TokenGetter = () => Token;
