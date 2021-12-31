import { APIType, WebClient } from "../../src/clients";
import { Token } from "../../src/authorization";

describe("Web client", () => {
  const tokenGetter = jest.fn<Token, []>(() => ({ organizationID: "", accessToken: "", region: "dal" }));
  const httpClient = {
    get: jest.fn(),
    post: jest.fn(),
  };

  const client = new WebClient(APIType.AgentAPI, tokenGetter, { httpClient, clientID: "clientID" });

  beforeEach(() => {
    httpClient.get.mockReset();
    httpClient.post.mockReset();
  });

  it("should works with `GET` method", async () => {
    type TestData = { test: boolean };
    httpClient.get.mockResolvedValueOnce({ data: { test: true } });

    const response = await client.send<TestData>("list_license_properties", { payload: "random" }, { method: "GET" });
    expect(httpClient.get).toHaveBeenCalled();
    expect(response.test).toBeTruthy();
  });

  it("should works with `POST` method", async () => {
    type TestData = { test: boolean };
    httpClient.post.mockResolvedValueOnce({ data: { test: true } });

    const response = await client.send<TestData>("list_license_properties", { payload: "random" }, { method: "POST" });
    expect(httpClient.post).toHaveBeenCalled();
    expect(response.test).toBeTruthy();
  });

  it("should works with default options", async () => {
    type TestData = { test: boolean };
    httpClient.post.mockResolvedValueOnce({ data: { test: true } });

    const response = await client.send<TestData>("list_license_properties", { payload: "random" });
    expect(httpClient.post).toHaveBeenCalled();
    expect(response.test).toBeTruthy();
  });
});
