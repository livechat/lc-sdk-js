export class SocketNotConnectedError extends Error {
  constructor() {
    super("Socket not connected");
  }
}

export class MissingClientParamError extends Error {
  constructor(paramName: string, clientName: string) {
    super(`'${paramName}' is required to construct ${clientName}`);
  }
}

export class UnsupportedClient extends Error {}

export class UnsupportedClientType extends UnsupportedClient {
  constructor(client: "web" | "rtm") {
    super(`This action is unsupported by ${client.toUpperCase()} client`);
  }
}

export class UnsupportedClientVersion extends UnsupportedClient {
  constructor(version: string) {
    super(`This actions is unsupported in version ${version}`);
  }
}
