import { WebSocket } from "isomorphic-ws";
import { StandardAdapter } from "../../src/clients";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("WebSocket adapter", () => {
  const socket = {
    readyState: WebSocket.OPEN,
    send: jest.fn(),
    on: jest.fn(),
  };

  const adapter = new StandardAdapter(socket, { pingInterval: 100 });

  beforeEach(() => {
    socket.on.mockReset();
    socket.send.mockReset();

    socket.on.mockImplementation((eventType, cb) => {
      if (eventType === "open") cb();
    });
  });
  afterAll(() => {
    adapter.disconnect();
  });

  it("should start listening for proper event types", async () => {
    await adapter.connect();
    expect(socket.on).toHaveBeenNthCalledWith(1, "message", expect.anything());
    expect(socket.on).toHaveBeenNthCalledWith(2, "error", expect.anything());
    expect(socket.on).toHaveBeenNthCalledWith(3, "close", expect.anything());
    expect(socket.on).toHaveBeenNthCalledWith(4, "open", expect.anything());
  });

  it("should pinging every 100 ms", (done) => {
    adapter
      .connect()
      .then(() => delay(222))
      .then(() => {
        expect(socket.send).toHaveBeenCalledTimes(2);
        done();
      })
      .catch((err) => done(err));
  });

  it("should stop pinging on disconnect", (done) => {
    socket.send.mockImplementation((req) => {
      if (req.action !== "ping") return;
      done(new Error("should not send any ping message"));
    });

    adapter
      .connect()
      .then(() => adapter.disconnect())
      .then(() => delay(222))
      .then(() => done())
      .catch((err) => done(err));
  });

  it("should propagate `push` to all listeners", (done) => {
    const mock = jest.fn();
    adapter.on("push", mock);
    adapter.on("push", mock);

    socket.on.mockImplementation((eventType, cb) => {
      if (eventType === "open") cb();
      if (eventType === "message")
        cb(
          JSON.stringify({
            type: "push",
            request_id: "some id",
            action: "some action",
          }),
        );
    });

    adapter
      .connect()
      .then(() => delay(100))
      .then(() => {
        expect(mock).toHaveBeenCalledTimes(2);
        done();
      })
      .catch((err) => done(err));
  }, 200);

  it("should propagate `response` to all listeners", (done) => {
    const mock = jest.fn();
    adapter.on("response", mock);
    adapter.on("response", mock);

    socket.on.mockImplementation((eventType, cb) => {
      if (eventType === "open") cb();
      if (eventType === "message")
        cb(
          JSON.stringify({
            type: "response",
            request_id: "some id",
            action: "some action",
          }),
        );
    });

    adapter
      .connect()
      .then(() => delay(100))
      .then(() => {
        expect(mock).toHaveBeenCalledTimes(2);
        done();
      })
      .catch((err) => done(err));
  }, 200);

  it("should not mix `push` and `response` listeners", (done) => {
    const mockPush = jest.fn();
    const mockResponse = jest.fn();
    adapter.on("push", mockPush);
    adapter.on("response", mockResponse);

    socket.on.mockImplementation((eventType, cb) => {
      if (eventType === "open") cb();
      if (eventType === "message")
        cb(
          JSON.stringify({
            type: "push",
            request_id: "some id",
            action: "some action",
          }),
        );
    });

    adapter
      .connect()
      .then(() => delay(100))
      .then(() => {
        expect(mockPush).toHaveBeenCalled();
        expect(mockResponse).not.toHaveBeenCalled();
        done();
      })
      .catch((err) => done(err));
  });
});
