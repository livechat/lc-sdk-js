import { RequestClient, SupportsType, SupportsVersion } from "../../src/clients";
import { AvailableVersions } from "../../src/internal";

export class ClassSupportsType {
  constructor(private readonly client: RequestClient<"rtm">) {}

  @SupportsType("web")
  async someAction(): Promise<number> {
    return this.client.send("random", undefined);
  }
}

export class ClassSupportsVersion {
  constructor(private readonly client: RequestClient<"rtm">) {}

  @SupportsVersion(AvailableVersions.V31, AvailableVersions.V32)
  async someAction(): Promise<number> {
    return this.client.send("random", undefined);
  }
}

export class ExampleMissingClient {
  @SupportsVersion(AvailableVersions.V31)
  async someVersionAction(): Promise<number> {
    return 12;
  }

  @SupportsType("web")
  async someTypeAction(): Promise<number> {
    return 14;
  }
}
