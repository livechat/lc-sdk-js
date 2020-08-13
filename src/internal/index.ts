import axios from "axios";
import ws from "ws";
import { v4 } from "uuid";
import { TokenGetter } from "../authorization";
import { ApiURL, ApiVersion } from "./constants";
import { RTMRequest, RTMResponse } from "../objects";

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
    const url = [
      "https:/",
      this.APIURL,
      this.version,
      this.type,
      "action",
      action,
    ].join("/");
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
        "User-Agent": `JS SDK Application ${this.clientID}`,
        "X-Region": token.region,
      },
    });
  }
}

export class RTMAPI {
  APIURL: string;
  version: string;
  type: apiType;
  license?: number;
  socket?: ws;
  heartbeatInterval?: NodeJS.Timeout;
  requestsQueue: any = {};
  subscribedPushes: any = {};

  constructor(type: apiType, license?: number) {
    this.APIURL = ApiURL;
    this.version = ApiVersion;
    this.type = type;
    if (license) {
      this.license = license;
    }
  }

  connect(): Promise<any> {
    return new Promise((resolve, reject) => {
      const wsURL =
        `wss://${this.APIURL}/${this.version}/${this.type}/rtm/ws` + (this.license ? `?license_id=${this.license}` : "");
      this.socket = new ws(wsURL, {origin: "https://secure.livechatinc.com"});
      this.socket.on("open", () => {
        this.heartbeatInterval = setInterval(() => this.socket?.ping(), 10000);
        resolve();
      });

      this.socket.on("message", (msg) => {
        const { request_id, action, success, type, payload } = JSON.parse(
          msg.toString()
        );
        console.log(this.type, msg.toString());
        if (type === "response") {
          console.log("Response", request_id);
          this.handleResponse(request_id, success, payload);
        }

        if (type === "push") {
          this.handlePush(action, payload);
        }
      });

      this.socket.on("error", reject);
    });
  }

  private handleResponse(request_id: string, success: boolean, payload: any) {
    const enqueuedRequest = this.requestsQueue[request_id];
    if (enqueuedRequest) {
      success
        ? enqueuedRequest.resolve(payload)
        : enqueuedRequest.reject(payload);
      delete this.requestsQueue[request_id];
    }
  }

  private handlePush(type: string, payload: any) {
    if (this.subscribedPushes[type]) {
      this.subscribedPushes[type](payload);
    }
  }

  send(action: string, payload: any): Promise<any> {
    if (this.socket?.readyState != ws.OPEN) {
      return Promise.reject(new Error("socket not connected"));
    }
    const request_id = v4();
    const req: RTMRequest = {
      request_id,
      action,
      payload,
    };

    return new Promise((resolve, reject) => {
      this.socket?.send(JSON.stringify(req), (err) => {
        console.log("send req", action, request_id);
        this.requestsQueue[request_id] = { resolve, reject };
      });
    });
  }

  subscribePush(push: string, callback: Function) {
    if (this.subscribedPushes[push]) {
      throw new Error("Push already subscribed");
    }
    this.subscribedPushes[push] = callback;
  }

  unsubscribePush(push: string) {
    delete this.subscribedPushes[push];
  }
}

export interface APIError {
  type: string;
  message: string;
}
