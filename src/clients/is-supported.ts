import { AvailableVersions } from "../internal";
import { UnsupportedClient, UnsupportedClientType, UnsupportedClientVersion } from "../errors";
import { RtmClient, WebClient } from ".";

function getClientFromInstance(instance: unknown): WebClient | RtmClient {
  const client = (instance as any).client;
  if (!client) throw new UnsupportedClient(`Missing property 'client'`);

  return client;
}

export const AllTypes = ["web", "rtm"];

export const AllVersions = [AvailableVersions.V31, AvailableVersions.V32, AvailableVersions.V33, AvailableVersions.V34];

export const VersionsSince32 = [AvailableVersions.V32, AvailableVersions.V33, AvailableVersions.V34];

export function SupportsType(...types: string[]) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const client = getClientFromInstance(this);
      const type = client.getType();
      if (!types.includes(type)) throw new UnsupportedClientType(type);

      return originalMethod.apply(this, args);
    };
  };
}

export function SupportsVersion(...versions: AvailableVersions[]) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const client = getClientFromInstance(this);
      const version = client.getVersion();
      if (!versions.includes(version)) throw new UnsupportedClientVersion(version);

      return originalMethod.apply(this, args);
    };
  };
}
