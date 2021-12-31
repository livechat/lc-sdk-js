import { UnsupportedClient, UnsupportedClientType, UnsupportedClientVersion } from "../../src/errors";
import { AvailableVersions } from "../../src/internal";
import { ClassSupportsType, ClassSupportsVersion, ExampleMissingClient } from "./supports-class-example";

describe("@Supports decorator", () => {
  const client = {
    getType: jest.fn(),
    getVersion: jest.fn(),
    send: jest.fn(),
  };

  beforeEach(() => {
    client.getType.mockReset();
    client.getVersion.mockReset();
    client.send.mockReset();
  });

  describe("@SupportsType", () => {
    const api = new ClassSupportsType(client);

    it("should throw an error if client supports different type than method", async () => {
      try {
        client.getType.mockReturnValue("rtm");
        await api.someAction();
      } catch (e) {
        expect(e).toBeInstanceOf(UnsupportedClientType);
      }
    });

    it("should return expected value if client supports the same type", async () => {
      client.getType.mockReturnValue("web");
      client.send.mockResolvedValue(12);
      const response = await api.someAction();
      expect(response).toEqual(12);
    });

    test("missing client in object instance", async () => {
      try {
        const missingApi = new ExampleMissingClient();
        await missingApi.someTypeAction();
      } catch (e) {
        expect(e).toBeInstanceOf(UnsupportedClient);
      }
    });
  });

  describe("@SupportsVersion", () => {
    const api = new ClassSupportsVersion(client);

    it("should throw an error if client supports different version than method", async () => {
      try {
        client.getVersion.mockReturnValue(AvailableVersions.V33);
        await api.someAction();
      } catch (e) {
        expect(e).toBeInstanceOf(UnsupportedClientVersion);
      }
    });

    it("should return expected value if client supports the same version", async () => {
      client.getVersion.mockReturnValue(AvailableVersions.V31);
      client.send.mockResolvedValue(12);
      const response = await api.someAction();
      expect(response).toEqual(12);
    });

    test("missing client in object instance", async () => {
      try {
        const missingApi = new ExampleMissingClient();
        await missingApi.someVersionAction();
      } catch (e) {
        expect(e).toBeInstanceOf(UnsupportedClient);
      }
    });
  });
});
