import axios, { AxiosError } from "axios";
import WebSocket = require("isomorphic-ws");
import { v4 } from "uuid";
import { TokenGetter } from "../authorization";
import { ApiURL, ApiVersion } from "./constants";
import { Push, RTMRequest, RTMAPIOptions, WebAPIOptions } from "../objects";

type apiType = "agent" | "customer" | "configuration";

function isAxiosError<T = unknown>(e: unknown): e is AxiosError<T> {
  return typeof e === "object" && null !== e && "isAxiosError" in e;
}

export class WebAPI {
  APIURL: string;
  version: string;
  private readonly actionsMethodGet = [
    "list_license_properties",
    "list_group_properties",
    "get_dynamic_configuration",
    "get_configuration",
    "get_localization",
    "get_organization_id",
    "get_license_id",
  ];

  constructor(
    protected readonly clientID: string,
    protected readonly tokenGetter: TokenGetter,
    protected readonly type: apiType,
    options?: WebAPIOptions,
  ) {
    this.APIURL = options?.apiUrl || ApiURL;
    this.version = ApiVersion;
  }

  async send<T = unknown>(name: string, req: any): Promise<T> {
    try {
      const response = await this.call(name, req || {});
      return response.data;
    } catch (e) {
      if (isAxiosError<APIError>(e) && e.response) {
        throw e.response?.data.error;
      }
      throw e;
    }
  }

  private async call(action: string, payload: any): Promise<any> {
    const url = ["http:/", this.APIURL, `v${this.version}`, this.type, "action", action].join("/");
    const token = this.tokenGetter();
    const method = this.actionsMethodGet.indexOf(action) >= 0 ? "GET" : "POST";

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.accessToken}`,
      "X-Region": token.region,
    };
    if (typeof window === "undefined") {
      headers["User-Agent"] = `JS SDK Application ${this.clientID}`;
    }

    let params = method === "GET" ? payload : {};
    if (this.type === "customer") {
      params = { ...params, organization_id: token.organizationID };
    }

    return axios({
      method,
      url,
      data: payload,
      params,
      headers,
    });
  }
}

export class RTMAPI {
  APIURL: string;
  version: string;
  type: apiType;
  organization_id?: string;
  socket?: WebSocket;
  heartbeatInterval?: NodeJS.Timeout;
  requestsQueue: any = {};
  subscribedPushes: any = {};

  constructor(type: apiType, organization_id?: string, options?: RTMAPIOptions) {
    this.APIURL = options?.apiUrl || ApiURL;
    this.version = ApiVersion;
    this.type = type;

    if (organization_id) {
      this.organization_id = organization_id;
    }
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const qs = new URLSearchParams({});
      if (this.organization_id) {
        qs.append("organization_id", this.organization_id);
      }
      const wsURL =
        `wss://${this.APIURL}/v${this.version}/${this.type}/rtm/ws` + (this.organization_id ? `?${qs.toString()}` : "");

      this.socket = new WebSocket(wsURL);
      this.socket.onopen = () => {
        this.heartbeatInterval = setInterval(() => this.send("ping", undefined), 10000);
        resolve();
      };

      this.socket.onmessage = (msg) => {
        let parsedMessage;
        try {
          parsedMessage = JSON.parse(msg.data.toString());
        } catch (e) {
          return;
        }
        const { request_id, action, success, type, payload } = parsedMessage;
        switch (type) {
          case "response": {
            return this.handleResponse(request_id, success, payload);
          }
          case "push": {
            return this.handlePush(action, payload);
          }
        }
      };

      this.socket.onerror = reject;
    });
  }

  private handleResponse(request_id: string, success: boolean, payload: any) {
    const enqueuedRequest = this.requestsQueue[request_id];
    if (enqueuedRequest) {
      success ? enqueuedRequest.resolve(payload) : enqueuedRequest.reject(payload);
      delete this.requestsQueue[request_id];
    }
  }

  private handlePush(type: string, payload: Push) {
    if (this.subscribedPushes[type]) {
      this.subscribedPushes[type](payload);
    }
  }

  send(action: string, payload: any): Promise<any> {
    if (this.socket?.readyState !== 1) {
      return Promise.reject(new Error("socket not connected"));
    }
    const request_id = v4();
    const req: RTMRequest = {
      request_id,
      action,
      payload,
    };

    return new Promise((resolve, reject) => {
      this.socket?.send(JSON.stringify(req));
      this.requestsQueue[request_id] = { resolve, reject };
    });
  }

  subscribePush(push: string, callback: (payload: Push) => void): void {
    if (this.subscribedPushes[push]) {
      throw new Error("Push already subscribed");
    }
    this.subscribedPushes[push] = callback;
  }

  unsubscribePush(push: string): void {
    delete this.subscribedPushes[push];
  }
}

export interface APIError {
  error: {
    type: string;
    message: string;
    data?: unknown;
  };
}
