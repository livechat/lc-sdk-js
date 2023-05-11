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
import { LivechatService } from './livechat/livechat.service';
import { IncomingEvent, Webhook } from '@livechat/lc-sdk-js/lib/src/webhooks';

@Controller()
export class AppController {
  constructor(
    private livechatService: LivechatService,
    private readonly installationService: InstallationService,
    private readonly messagesService: MessagesService,
  ) {}

  @Get('install')
  async install(@Query('code') code: string) {
    return await this.installationService.install(code);
  }

  @Post('reply')
  reply(@Body() { secret_key, payload }: Webhook) {
    if (!this.livechatService.verifyWebhookSecret(secret_key)) {
      throw new UnauthorizedException('Invalid webhook secret key.');
    }
    return this.messagesService.reply(payload as IncomingEvent);
  }
}
