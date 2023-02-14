import { Injectable } from '@nestjs/common';
import { LivechatService } from './livechat/livechat.service';
import { RoutingStatus } from '@livechat/lc-sdk-js/lib/src/agent/structures';

@Injectable()
export class InstallationService {
  constructor(private livechatService: LivechatService) {}

  async install(code: string): Promise<string> {
    await this.livechatService.initialize(code);
    const { configurationWeb, agentWeb } = this.livechatService;

    return configurationWeb
      .createBot({
        name: 'Example bot',
      })
      .then(({ id }) =>
        agentWeb.setRoutingStatus(RoutingStatus.AcceptingChats, id),
      )
      .then(() => 'Example integration installed');
  }
}
