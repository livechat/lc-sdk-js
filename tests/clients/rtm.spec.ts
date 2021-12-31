import { RtmClient } from "../../src/clients";

describe("RTM client", () => {
  const adapter = {
    connect: jest.fn(),
    disconnect: jest.fn(),
    on: jest.fn(),
    send: jest.fn(),
  };
  const client = new RtmClient(adapter);

  beforeEach(() => {
    adapter.connect.mockReset();
    adapter.disconnect.mockReset();
    adapter.on.mockReset();
    adapter.send.mockReset();
  });

  it("subscribes for `push` and `response` events", async () => {
    await client.connect();
    expect(adapter.on).toHaveBeenNthCalledWith(1, "push", expect.anything());
    expect(adapter.on).toHaveBeenNthCalledWith(2, "response", expect.anything());
  });

  describe("sending and receiving messages", () => {
    it("should allow to send and receive message", async () => {
      adapter.on.mockImplementation((eventType, cb) => {
        if (eventType !== "response") return;
        setTimeout(() => {
          cb({ request_id: "abcd", success: true, payload: { data: "lorem ipsum" } });
        }, 50);
      });

      await client.connect();
      const response = await client.send("login", { login: "lorem ipsum" }, { uuid: "abcd" });
      expect(adapter.send).toHaveBeenCalled();
      expect((response as any).data).toEqual("lorem ipsum");
    });

    it("should allow to send and receive error message", async () => {
      adapter.on.mockImplementation((eventType, cb) => {
        if (eventType !== "response") return;
        setTimeout(() => {
          cb({ request_id: "abcd", success: false, payload: { data: "lorem ipsum" } });
        }, 50);
      });

      await client.connect();

      try {
        await client.send("login", { login: "lorem ipsum" }, { uuid: "abcd" });
      } catch (e) {
        expect(adapter.send).toHaveBeenCalled();
        expect(e.data).toEqual("lorem ipsum");
      }
    });
  });

  describe("receiving pushes", () => {
    afterEach(() => {
      client.unsubscribePush("login");
    });

    it("should be not possible to subscribe to the same push twice", () => {
      try {
        client.subscribePush("login", expect.anything());
        client.subscribePush("login", expect.anything());
      } catch (e) {
        expect(e.message).toEqual("Push already subscribed");
      }
    });

    it("should be possible to subscribe for specific push", (done) => {
      adapter.on.mockImplementation((eventType, cb) => {
        if (eventType !== "push") return;
        setTimeout(() => {
          cb({ request_id: "abcd", action: "login", payload: { data: "lorem ipsum" } });
        }, 50);
      });

      client.connect();
      client.subscribePush("login", (payload) => {
        expect((payload as any).data).toEqual("lorem ipsum");
        done();
      });
    });
  });
});
