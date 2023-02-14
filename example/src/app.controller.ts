import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { InstallationService } from './installation.service';
import { MessagesService } from './messages.service';
import { IncomingEvent, Webhook } from '@livechat/lc-sdk-js/lib/src/webhooks';
import { SendEventResponse } from '@livechat/lc-sdk-js/lib/src/agent/structures';
import { LivechatService } from './livechat/livechat.service';

@Controller()
export class AppController {
  constructor(
    private livechatService: LivechatService,
    private readonly installationService: InstallationService,
    private readonly messagesService: MessagesService,
  ) {}

  @Get('install')
  async install(@Query('code') code: string): Promise<string> {
    return await this.installationService.install(code);
  }

  @Post('reply')
  reply(@Body() { secret_key, payload }: Webhook): Promise<SendEventResponse> {
    if (!this.livechatService.verifyWebhookSecret(secret_key)) {
      throw new UnauthorizedException('Invalid webhook secret key.');
    }
    return this.messagesService.reply(payload as IncomingEvent);
  }
}
