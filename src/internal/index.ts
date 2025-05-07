import { TokenGetter, validateTokenGetter } from "../authorization";
import { ApiURL, ApiVersion } from "./constants";
import axios from "axios";
import { v4 } from "uuid";

type apiType = "agent" | "customer" | "configuration";

export class WebAPI {
  APIURL: string;
  clientID: string;
  version: string;
  type: apiType;
  tokenGetter: TokenGetter;
  author_id?: string;
  private readonly actionsMethodGet = ["get_dynamic_configuration", "get_configuration", "get_localization"];

  constructor(clientID: string, tokenGetter: TokenGetter, type: apiType, options?: WebAPIOptions) {
    this.APIURL = options?.apiUrl || ApiURL;
    this.version = ApiVersion;
    this.clientID = clientID;
    this.type = type;
    this.tokenGetter = tokenGetter;

    validateTokenGetter(tokenGetter);
  }

  async send(name: string, req: any): Promise<any> {
    try {
      const response = await this.call(name, req || {});
      return response.data;
    } catch (e: any) {
      return Promise.reject(e.response.data.error as APIError);
    }
  }

  private async call(action: string, payload: any): Promise<any> {
    const url = ["https:/", this.APIURL, `v${this.version}`, this.type, "action", action].join("/");
    const { accessToken, licenseID, region, tokenType } = this.tokenGetter();
    const method = this.actionsMethodGet.indexOf(action) >= 0 ? "GET" : "POST";

    const headers: any = {
      "Content-Type": "application/json",
      Authorization: `${tokenType} ${accessToken}`,
      "X-Region": region,
    };
    if (typeof window === "undefined") {
      headers["User-Agent"] = `JS SDK Application ${this.clientID}`;
    }
    if (this.author_id) {
      headers["X-Author-Id"] = this.author_id;
    }

    let params: any;
    if (this.type === "customer") {
      params = { license_id: licenseID };
    }

    return axios({
      method,
      url,
      data: payload,
      params,
      headers,
    });
  }

  setAuthorId(author_id?: string) {
    this.author_id = author_id;
  }
}

export class RTMAPI {
  APIURL: string;
  version: string;
  type: apiType;
  socket?: any;
  heartbeatInterval?: number;
  requestsQueue: any = {};
  subscribedPushes: any = {};
  author_id?: string;

  constructor(
    protected readonly webSocketClass: any,
    protected readonly tokenGetter: TokenGetter,
    type: apiType,
    options?: RTMAPIOptions,
  ) {
    this.APIURL = options?.apiUrl || ApiURL;
    this.version = ApiVersion;
    this.type = type;

    validateTokenGetter(tokenGetter);
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const { licenseID, region } = this.tokenGetter();
      const qs = new URLSearchParams({});
      qs.append("region", region);
      qs.append("license_id", licenseID.toString(10));

      const wsURL = `wss://${this.APIURL}/v${this.version}/${this.type}/rtm/ws?` + qs.toString();

      this.socket = new this.webSocketClass(wsURL);
      this.socket.onopen = () => {
        this.heartbeatInterval = setInterval(
          () => this.send("ping", undefined).catch(() => clearInterval(this.heartbeatInterval)),
          10000,
        );
        resolve();
      };

      this.socket.onmessage = (msg: any) => {
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

  private handlePush(type: string, payload: any) {
    if (this.subscribedPushes[type]) {
      this.subscribedPushes[type](payload);
    }
  }

  send(action: string, payload: any): Promise<any> {
    if (this.socket?.readyState !== 1) {
      return Promise.reject(new Error("Socket not connected"));
    }
    const request_id = v4();
    const req: RTMRequest = {
      request_id,
      action,
      payload,
    };
    if (this.author_id) {
      req.author_id = this.author_id;
    }

    return new Promise((resolve, reject) => {
      this.socket?.send(JSON.stringify(req));
      this.requestsQueue[request_id] = { resolve, reject };
    });
  }

  subscribePush<P>(push: string, callback: (payload: P) => void): void {
    if (this.subscribedPushes[push]) {
      throw new Error("Push already subscribed");
    }
    this.subscribedPushes[push] = callback;
  }

  unsubscribePush(push: string): void {
    delete this.subscribedPushes[push];
  }

  setAuthorId(author_id?: string) {
    this.author_id = author_id;
  }
}

interface WebAPIOptions {
  apiUrl?: string;
}

interface RTMAPIOptions {
  apiUrl?: string;
}

interface RTMRequest {
  action: string;
  payload: any;
  author_id?: string;
  request_id?: string;
  version?: string;
}

interface APIError<P = unknown> {
  type: string;
  message: string;
  data?: P;
}
