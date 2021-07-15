import axios from "axios";
import WebSocket = require("isomorphic-ws");
import { v4 } from "uuid";
import { TokenGetter } from "../authorization";
import { ApiURL, ApiVersion } from "./constants";
import { Push, RTMRequest, RTMAPIOptions, WebAPIOptions } from "../objects";

type apiType = "agent" | "customer" | "configuration";

export class WebAPI {
  APIURL: string;
  clientID: string;
  version: string;
  type: apiType;
  tokenGetter: TokenGetter;

  constructor(clientID: string, tokenGetter: TokenGetter, type: apiType, options?: WebAPIOptions) {
    this.APIURL = options?.apiUrl || ApiURL;
    this.version = ApiVersion;
    this.clientID = clientID;
    this.type = type;
    this.tokenGetter = tokenGetter;
  }

  async send(name: string, req: any): Promise<any> {
    try {
      const response = await this.call(name, req || {});
      return response.data;
    } catch (e) {
      return Promise.reject(e.response.data.error as APIError);
    }
  }

  private async call(action: string, payload: any): Promise<any> {
    const url = ["https:/", this.APIURL, `v${this.version}`, this.type, "action", action].join("/");
    const token = this.tokenGetter();
    const method =
      action in
      [
        "list_license_properties",
        "list_group_properties",
        "get_dynamic_configuration",
        "get_configuration",
        "get_localization",
      ]
        ? "GET"
        : "POST";

    const headers: any = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.accessToken}`,
      "X-Region": token.region,
    };
    if (typeof window === "undefined") {
      headers["User-Agent"] = `JS SDK Application ${this.clientID}`;
    }

    let params: any;
    if (this.type === "customer") {
      params = { license_id: token.licenseID };
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
  license?: number;
  socket?: WebSocket;
  heartbeatInterval?: NodeJS.Timeout;
  requestsQueue: any = {};
  subscribedPushes: any = {};

  constructor(type: apiType, license?: number, options?: RTMAPIOptions) {
    this.APIURL = options?.apiUrl || ApiURL;
    this.version = ApiVersion;
    this.type = type;
    if (license) {
      this.license = license;
    }
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const wsURL =
        `wss://${this.APIURL}/v${this.version}/${this.type}/rtm/ws` +
        (this.license ? `?license_id=${this.license}` : "");

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
  type: string;
  message: string;
}
