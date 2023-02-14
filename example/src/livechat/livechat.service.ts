import { Injectable } from '@nestjs/common';
import { LivechatConfig } from './livechat.config';
import { AccountsService } from './accounts.service';
import { Agent, Configuration } from '@livechat/lc-sdk-js';
import ConfigurationAPI from '@livechat/lc-sdk-js/lib/src/configuration';
import AgentWeb from '@livechat/lc-sdk-js/lib/src/agent/web';

@Injectable()
export class LivechatService {
  public configurationWeb: ConfigurationAPI;
  public agentWeb: AgentWeb;

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

    this.agentWeb = new Agent.Web(this.cfg.clientId, tokenGetter, {
      apiUrl: this.cfg.baseApiUrl,
    });
  }
}
