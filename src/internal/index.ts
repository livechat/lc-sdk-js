import axios from "axios";

import { TokenGetter } from "../authorization";
import { ApiURL, ApiVersion } from "./constants";

type apiType = "agent" | "customer" | "configuration";

export class WebAPI {
  APIURL: string;
  clientID: string;
  version: string;
  type: apiType;
  tokenGetter: TokenGetter;

  constructor(clientID: string, tokenGetter: TokenGetter, type: apiType) {
    this.APIURL = ApiURL;
    this.version = ApiVersion;
    this.clientID = clientID;
    this.type = type;
    this.tokenGetter = tokenGetter;
  }

  async handleAction(name: string, req: any): Promise<any> {
    try {
	  const response = await this.call(name, req || {});
	  return response.data;
    } catch (e) {
      return Promise.reject(e.response.data.error as APIError);
    }
  }

  private async call(action: string, payload: any): Promise<any> {
    const url = [this.APIURL, this.version, this.type, "action", action].join(
      "/"
    );
    const token = this.tokenGetter();
    const method =
      action in ["list_license_properties", "list_group_properties"]
        ? "GET"
        : "POST";

    return axios({
      method,
      url,
      data: payload,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.accessToken}`,
        "User-agent": `JS SDK Application ${this.clientID}`,
        "X-Region": token.region,
      },
    });
  }
}

export interface APIError {
  type: string;
  message: string;
}
