import axios, { AxiosError } from "axios";
import { TokenGetter } from "./token_getter";

const globalAccountsURL = "https://accounts.livechat.com";

export async function tokenGetterFromPAT(accountID: string, token: string): Promise<TokenGetter> {
  const { organization_id, region } = await getOrganizationForPAT(accountID, token);

  return () => ({
    accessToken: btoa(`${accountID}:${token}`),
    organizationID: organization_id,
    region: region,
    tokenType: "Basic",
  });
}

interface ResponseOrganization {
  organization_id: string;
  region: string;
}

interface ResponseOrganizationError {
  error_description: string;
}

async function getOrganizationForPAT(accountID: string, token: string): Promise<ResponseOrganization> {
  const encodedData = btoa(`${accountID}:${token}`);
  const authorizationHeader = `Basic ${encodedData}`;

  try {
    const response = await axios.get<ResponseOrganization>(`${globalAccountsURL}/v2/organizations/my`, {
      headers: { Authorization: authorizationHeader },
    });
    return response.data;
  } catch (e) {
    if (isAxiosError<ResponseOrganizationError>(e) && e.response) {
      const errorMessage = e.response?.data.error_description ?? e;
      throw new Error(`Unable to get organization for PAT: ${errorMessage}`);
    }
    throw new Error(`Unable to get organization for PAT: ${e}`);
  }
}

function isAxiosError<T = unknown>(e: unknown): e is AxiosError<T> {
  return typeof e === "object" && null !== e && "isAxiosError" in e;
}
