import axios, { AxiosError } from "axios";
import { TokenGetter } from "./token_getter";

const globalAccountsURL = "https://accounts.livechat.com";
const globalMapperURL = "https://api.text.com/globalmapper";

export async function tokenGetterFromPAT(accountID: string, token: string): Promise<TokenGetter> {
  const organizationID = await getOrganizationForPAT(accountID, token);
  const region = await getRegionForOrganization(organizationID);

  return () => ({
    accessToken: btoa(`${accountID}:${token}`),
    organizationID: organizationID,
    region: region,
    tokenType: "Basic",
  });
}

interface ResponseOrganization {
  organization_id: string;
}

interface ResponseOrganizationError {
  error_description: string;
}

async function getOrganizationForPAT(accountID: string, token: string): Promise<string> {
  const encodedData = btoa(`${accountID}:${token}`);
  const authorizationHeader = `Basic ${encodedData}`;

  try {
    const response = await axios.get<ResponseOrganization>(`${globalAccountsURL}/v2/organizations/my`, {
      headers: { Authorization: authorizationHeader },
    });
    return response.data.organization_id;
  } catch (e) {
    if (isAxiosError<ResponseOrganizationError>(e) && e.response) {
      const errorMessage = e.response?.data.error_description ?? e;
      throw new Error(`Unable to get organization for PAT: ${errorMessage}`);
    }
    throw new Error(`Unable to get organization for PAT: ${e}`);
  }
}

interface ResponseRegion {
  region: string;
}

interface ResponseRegionError {
  error_message: string;
}

async function getRegionForOrganization(organizationID: string): Promise<string> {
  try {
    const response = await axios.get<ResponseRegion>(`${globalMapperURL}/organization_id/${organizationID}/region`);
    return response.data.region;
  } catch (e) {
    if (isAxiosError<ResponseRegionError>(e) && e.response) {
      const errorMessage = e.response?.data.error_message ?? e;
      throw new Error(`Unable to get region for organization ${organizationID}: ${errorMessage}`);
    }
    throw new Error(`Unable to get region for organization ${organizationID}: ${e}`);
  }
}

function isAxiosError<T = unknown>(e: unknown): e is AxiosError<T> {
  return typeof e === "object" && null !== e && "isAxiosError" in e;
}
