import WS, { WebSocket } from "isomorphic-ws";
import { SocketNotConnectedError } from "../errors";
import { Push } from "../objects";

export interface RawSocket {
  readonly readyState:
    | typeof WebSocket.CONNECTING
    | typeof WebSocket.OPEN
    | typeof WebSocket.CLOSING
    | typeof WebSocket.CLOSED;

  send(data: any, cb?: (err?: Error) => void): void;

  on(event: "open", listener: (this: WebSocket) => void): this;
  on(event: "close", listener: (this: WebSocket, code: number, reason: Buffer) => void): this;
  on(event: "error", listener: (this: WebSocket, err: Error) => void): this;
  on(event: "message", listener: (this: WebSocket, data: WS.RawData, isBinary: boolean) => void): this;
}

type RtmRequest<P = unknown> = {
  request_id?: string;
  action: string;
  payload?: P;
};
export type RtmResponse<P = unknown> = {
  request_id?: string;
  action: string;
  payload: P;
  type: "response";
  success: boolean;
};
type RtmEvent = Push | RtmResponse;

type AdapterOptions = {
  pingInterval?: number;
};

export interface WebsocketAdapter {
  connect(): Promise<void>;
  disconnect(): void;

  on(eventType: "push" | "response", cb: (event: RtmEvent) => void): void;
  send(payload: RtmRequest): void;
}

export class StandardAdapter {
  private readonly heartbeatInterval: number;

  private heartbeat: ReturnType<typeof setInterval>;
  private emittersForPush: Array<(event: Push) => void> = [];
  private emittersForResponse: Array<(event: RtmResponse) => void> = [];

  constructor(private readonly socket: RawSocket, opts?: AdapterOptions) {
    this.heartbeatInterval = opts?.pingInterval || 10000;
  }

  connect(): Promise<void> {
    this.socket.on("message", (data) => {
      try {
        const message = JSON.parse(data.toString());
        if (!this.isValidMessage(message)) {
          return;
        }

        if (message.type === "response") {
          this.emittersForResponse.forEach((emitter) => emitter(message));
        }
        if (message.type === "push") {
          this.emittersForPush.forEach((emitter) => emitter(message));
        }
      } catch (e) {}
    });

    return new Promise((resolve, reject) => {
      clearInterval(this.heartbeat);
      this.socket.on("error", () => {
        clearInterval(this.heartbeat);
        reject();
      });

      this.socket.on("close", () => {
        clearInterval(this.heartbeat);
        reject();
      });

      this.socket.on("open", () => {
        this.heartbeat = setInterval(() => this.send({ action: "ping" }), this.heartbeatInterval);
        resolve();
      });
    });
  }

  disconnect(): void {
    clearInterval(this.heartbeat);
  }

  on(eventType: "push" | "response", cb: (event: RtmEvent) => void): void {
    if (eventType === "push") this.emittersForPush.push(cb);
    if (eventType === "response") this.emittersForResponse.push(cb);
  }

  send(payload: RtmRequest): void {
    if (this.socket.readyState !== WebSocket.OPEN) throw new SocketNotConnectedError();
    this.socket.send(payload);
  }

  private isValidMessage(message: unknown): message is RtmEvent {
    if (typeof message !== "object") return false;
    if (!message) return false;

    return "request_id" in message && "action" in message && "type" in message;
  }
}
