import { Injectable } from '@nestjs/common';
import { LivechatConfig } from './livechat.config';
import { AccountsService } from './accounts.service';
import { Agent, Configuration } from '@livechat/lc-sdk-js';
import ConfigurationAPI from '@livechat/lc-sdk-js/lib/src/configuration';
import AgentRtm from '@livechat/lc-sdk-js/lib/src/agent/rtm';

@Injectable()
export class LivechatService {
  public botId: string;
  public configurationWeb: ConfigurationAPI;
  public agentRtm: AgentRtm;

  constructor(
    private cfg: LivechatConfig,
    private accountsService: AccountsService,
  ) {}

  async initialize(authorizationCode: string): Promise<void> {
    const tokenGetter = await this.accountsService.exchangeAuthorizationCode(
      authorizationCode,
    );

    this.configurationWeb = new Configuration.Web(
      this.cfg.clientId,
      tokenGetter,
      { apiUrl: this.cfg.baseApiUrl },
    );

    this.agentRtm = new Agent.RTM({
      apiUrl: this.cfg.baseApiUrl,
    });
    await this.agentRtm.connect();
    await this.agentRtm.login(`Bearer ${tokenGetter().accessToken}`);
  }

  setBotId(botId: string): void {
    this.botId = botId;
    this.configurationWeb.setAuthorId(botId);
    this.agentRtm.setAuthorId(botId);
  }

  verifyWebhookSecret(secret: string) {
    return this.cfg.webhookSecret === secret;
  }
}
