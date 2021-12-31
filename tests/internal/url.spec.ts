import { APIType } from "../../src/clients";
import { ApiURL, AvailableVersions } from "../../src/internal";
import { buildURLForWeb, buildURLForRTM } from "../../src/internal/url";

describe("Build URL", () => {
  describe("for WEB", () => {
    it("should build default production url when there are no additional options", () => {
      const url = buildURLForWeb("list_chats", {}, { type: APIType.AgentAPI });
      expect(url).toEqual(`https://${ApiURL}/v3.4/agent/action/list_chats`);
    });

    it("should be possible to build url for different version", () => {
      const url = buildURLForWeb("list_chats", {}, { version: AvailableVersions.V32, type: APIType.AgentAPI });
      expect(url).toEqual(`https://${ApiURL}/v3.2/agent/action/list_chats`);
    });

    it("should be possible to build url with different protocol", () => {
      const url = buildURLForWeb("list_chats", {}, { url: "http://", type: APIType.AgentAPI });
      expect(url).toEqual(`http://${ApiURL}/v3.4/agent/action/list_chats`);
    });

    it("should be possible to build url with different hostname", () => {
      const url = buildURLForWeb("list_chats", {}, { url: "random.url", type: APIType.AgentAPI });
      expect(url).toEqual(`https://random.url/v3.4/agent/action/list_chats`);
    });

    it("should be possible to build url with different protocol and hostname", () => {
      const url = buildURLForWeb("list_chats", {}, { url: "http://random.url", type: APIType.AgentAPI });
      expect(url).toEqual(`http://random.url/v3.4/agent/action/list_chats`);
    });

    test("request options has precedence over url options", () => {
      const url = buildURLForWeb(
        "list_chats",
        { version: "3.3" },
        { version: AvailableVersions.V32, type: APIType.AgentAPI },
      );
      expect(url).toEqual(`https://${ApiURL}/v3.3/agent/action/list_chats`);
    });
  });

  describe("for RTM", () => {
    it("should build default production url when there are no additional options", () => {
      const url = buildURLForRTM("", { type: APIType.AgentAPI });
      expect(url).toEqual(`wss://${ApiURL}/v3.4/agent/rtm/ws`);
    });

    it("should be possible to build url for different version", () => {
      const url = buildURLForRTM("", { version: AvailableVersions.V32, type: APIType.AgentAPI });
      expect(url).toEqual(`wss://${ApiURL}/v3.2/agent/rtm/ws`);
    });

    it("should be possible to build url with different protocol", () => {
      const url = buildURLForRTM("", { url: "ws://", type: APIType.AgentAPI });
      expect(url).toEqual(`ws://${ApiURL}/v3.4/agent/rtm/ws`);
    });

    it("should be possible to build url with different hostname", () => {
      const url = buildURLForRTM("", { url: "random.url", type: APIType.AgentAPI });
      expect(url).toEqual(`wss://random.url/v3.4/agent/rtm/ws`);
    });

    it("should be possible to build url with different protocol and hostname", () => {
      const url = buildURLForRTM("", { url: "ws://random.url", type: APIType.AgentAPI });
      expect(url).toEqual(`ws://random.url/v3.4/agent/rtm/ws`);
    });

    it("should be possible to build url with organization ID", () => {
      const url = buildURLForRTM("some-random-org-id", { version: AvailableVersions.V32, type: APIType.AgentAPI });
      expect(url).toEqual(`wss://${ApiURL}/v3.2/agent/rtm/ws?organization_id=some-random-org-id`);
    });
  });
});
