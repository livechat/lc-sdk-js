import { TokenGetter, TokenType } from "@livechat/lc-sdk-js/src/authorization";
import axios, { AxiosError } from "axios";

const customerTokenURL = "https://accounts.livechat.com/v2/customer/token";

interface RequestCustomerToken {
  organization_id: string;
  client_id: string;
  redirect_uri: string;
  grant_type: string;
}

interface ResponseCustomerToken {
  access_token: string;
  entity_id: string;
  expires_in: number;
  organization_id: string;
  token_type: TokenType;
}

export async function initCustomerTokenGetter(
  organizationID: string,
  clientID: string,
  redirectURI: string,
): Promise<TokenGetter> {
  const requestPayload: RequestCustomerToken = {
    organization_id: organizationID,
    client_id: clientID,
    redirect_uri: redirectURI,
    grant_type: "cookie",
  };

  try {
    const response = await axios.post<ResponseCustomerToken>(customerTokenURL, requestPayload);

    const { access_token: accessToken, token_type: tokenType } = response.data;
    const region = accessToken.split(":")[0];

    return () => ({ accessToken, organizationID, region, tokenType });
  } catch (error) {
    throw new Error(`Unable to initialize customer's TokenGetter: ${stringifyError(error)}`);
  }
}

function stringifyError(error: unknown): string {
  if (error instanceof AxiosError) {
    const status = error?.response?.status;
    const responseBody = JSON.stringify(error.response?.data);

    return `response code: ${status}, body: ${responseBody}`;
  }

  return JSON.stringify(error);
}
