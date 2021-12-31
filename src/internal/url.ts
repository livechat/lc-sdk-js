import { APIType, ApiURL, WebRequestOptions } from "../clients/common";
import { AvailableVersions } from "./constants";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const urlParse = require("url-parse");

type BuildURLOptions = {
  url?: string;
  type: APIType;
  version?: AvailableVersions;
};

export function buildURLForWeb(action: string, reqOptions: WebRequestOptions, urlOptions: BuildURLOptions): string {
  const version = reqOptions.version || urlOptions.version || AvailableVersions.Stable;
  const url = urlParse(attachProtocolToHostname(urlOptions?.url, "https"), {});
  if (url.protocol === "") url.set("protocol", "https");
  if (url.hostname === "") url.set("hostname", ApiURL);

  return url.set("pathname", `/v${version}/${urlOptions.type}/action/${action}`).toString();
}

export function buildURLForRTM(organizationID: string, urlOptions: BuildURLOptions): string {
  const version = urlOptions.version || AvailableVersions.Stable;
  const url = urlParse(attachProtocolToHostname(urlOptions.url, "wss"), {});
  if (url.protocol === "") url.set("protocol", "wss");
  if (url.hostname === "") url.set("hostname", ApiURL);
  if (organizationID) {
    const qs = new URLSearchParams();
    qs.append("organization_id", organizationID);

    url.set("query", qs.toString());
  }

  return url.set("pathname", `/v${version}/${urlOptions.type}/rtm/ws`).toString();
}

function attachProtocolToHostname(hostname = "", protocol: string): string {
  if (!hostname) return "";
  if (hostname.startsWith("http") || hostname.startsWith("ws")) return hostname;
  return `${protocol}://${hostname}`;
}
