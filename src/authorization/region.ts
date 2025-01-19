import axios, { AxiosError } from "axios";

const globalMapperURL = "https://api.text.com/globalmapper";

interface ResponseRegion {
  region: string;
}

interface ResponseError {
  error_message: string;
}

function isAxiosError<T = unknown>(e: unknown): e is AxiosError<T> {
  return typeof e === "object" && null !== e && "isAxiosError" in e;
}

export async function getRegionForOrganization(organizationID: string): Promise<string> {
  try {
    const response = await axios.get<ResponseRegion>(`${globalMapperURL}/organization_id/${organizationID}/region`);
    return response.data.region;
  } catch (e) {
    if (isAxiosError<ResponseError>(e) && e.response) {
      throw e.response?.data.error_message;
    }
    throw e;
  }
}
