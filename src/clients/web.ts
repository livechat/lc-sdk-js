import httpClient, { Axios, AxiosError } from "axios";
import { TokenGetter } from "../authorization";
import { AvailableVersions } from "../internal";
import { ApiURL, APIType, ResponseError, RequestClient, WebRequestOptions } from "./common";
import { MissingClientParamError } from "../errors";
import { buildURLForWeb } from "../internal/url";

type axios = Pick<Axios, "get" | "post">;

export type WebClientOptions = {
  apiUrl?: string;
  httpClient?: axios;
  clientID?: string;
};

function isAxiosError<T = unknown>(e: unknown): e is AxiosError<T> {
  return typeof e === "object" && null !== e && "isAxiosError" in e;
}

export class WebClient implements RequestClient<"web"> {
  private readonly APIURL: string;
  private readonly httpClient: axios;
  private readonly clientID: string;

  constructor(private readonly type: APIType, private readonly tokenGetter: TokenGetter, options?: WebClientOptions) {
    this.APIURL = options?.apiUrl || ApiURL;
    if (!this.APIURL.startsWith("http")) {
      this.APIURL = `https://${this.APIURL}`;
    }

    this.httpClient = httpClient;
    if (options?.httpClient) {
      this.httpClient = options.httpClient;
    }

    if (typeof window === "undefined" && !options?.clientID) {
      throw new MissingClientParamError("clientID", "WebClient");
    }
    if (options?.clientID) {
      this.clientID = options?.clientID;
    }
  }

  getType(): "web" | "rtm" {
    return "web";
  }

  getVersion(): AvailableVersions {
    return AvailableVersions.Stable;
  }

  async send<T = unknown>(name: string, req: Record<string, any> = {}, opts?: WebRequestOptions): Promise<T> {
    const requestOptions: WebRequestOptions = {
      method: "POST",
      version: AvailableVersions.Stable,
      headers: {},
      ...opts,
    };

    try {
      const response = await this.call(name, req || {}, requestOptions);
      return response.data;
    } catch (e) {
      if (isAxiosError<ResponseError>(e) && e.response) {
        throw e.response?.data.error;
      }
      throw e;
    }
  }

  private async call(action: string, payload: Record<string, unknown>, opts: WebRequestOptions = {}) {
    const url = buildURLForWeb(action, opts, { type: this.type, url: this.APIURL });
    const token = this.tokenGetter();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.accessToken}`,
      "X-Region": token.region,
      ...opts.headers,
    };
    if (typeof window === "undefined") {
      headers["User-Agent"] = `JS SDK Application ${this.clientID}`;
    }

    let params = opts.method === "GET" ? payload : {};
    if (this.type === APIType.CustomerAPI) {
      params = { ...params, organization_id: token.organizationID };
    }

    switch (opts.method) {
      case "GET":
        return this.httpClient.get(url, { params, headers });
      case "POST":
      default:
        return this.httpClient.post(url, payload, { params, headers });
    }
  }
}
