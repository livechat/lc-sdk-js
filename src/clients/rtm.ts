import { v4 } from "uuid";
import { AvailableVersions } from "../internal";
import { Push } from "../objects";
import { ApiURL, RequestClient } from "./common";
import { WebsocketAdapter } from "./websocket";

export type RtmClientOptions = {
  apiUrl?: string;
  rtmClient?: WebsocketAdapter;
  organizationID?: string;
  version?: AvailableVersions;
};

type RtmRequestOptions = {
  uuid: string;
};

type RtmResponse<P = unknown> = {
  request_id?: string;
  action: string;
  type: "response" | "push";
  success: boolean;
  payload: P | Push<P>;
};

export class RtmClient implements RequestClient<"rtm"> {
  private readonly APIURL: string;
  private readonly version: AvailableVersions;

  private requestsQueue: Record<
    string,
    {
      resolve: (value: RtmResponse["payload"]) => void;
      reject: (value: RtmResponse["payload"]) => void;
    }
  > = {};
  private subscribedPushes: Record<string, (push: Push["payload"]) => void> = {};

  constructor(private readonly ws: WebsocketAdapter, options?: RtmClientOptions) {
    this.version = options?.version || AvailableVersions.Stable;
    this.APIURL = options?.apiUrl || ApiURL;
    if (!this.APIURL.startsWith("http")) {
      this.APIURL = `wss://${this.APIURL}`;
    }
  }

  getVersion(): AvailableVersions {
    return this.version;
  }

  getType(): "web" | "rtm" {
    return "rtm";
  }

  async connect(): Promise<void> {
    this.ws.on("push", (push) => {
      const pushHandler = this.subscribedPushes[push.action];
      if (!pushHandler) {
        return;
      }
      pushHandler(push.payload);
    });

    this.ws.on("response", (message) => {
      if (!message.request_id) return;

      const enqueuedRequest = this.requestsQueue[message.request_id];
      if (!enqueuedRequest) return;

      (message as any).success ? enqueuedRequest.resolve(message.payload) : enqueuedRequest.reject(message.payload);
      delete this.requestsQueue[message.request_id];
    });

    await this.ws.connect();
  }

  async send<T = unknown>(action: string, payload: Record<string, any> = {}, opts?: RtmRequestOptions): Promise<T> {
    const requestId = opts?.uuid || v4();
    const req = {
      request_id: requestId,
      action,
      payload,
    };

    return new Promise((resolve, reject) => {
      this.ws.send(req);
      this.requestsQueue[requestId] = { resolve, reject };
    });
  }

  subscribePush(push: string, callback: (payload: Push["payload"]) => void): () => void {
    if (this.subscribedPushes[push]) {
      throw new Error("Push already subscribed");
    }
    this.subscribedPushes[push] = callback;

    return () => {
      this.unsubscribePush(push);
    };
  }

  unsubscribePush(push: string): void {
    delete this.subscribedPushes[push];
  }
}
