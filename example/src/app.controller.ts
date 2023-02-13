import { Controller, Get, Post, Query } from '@nestjs/common';
import { InstallationService } from './installation.service';
import { MessagesService } from './messages.service';

@Controller()
export class AppController {
  constructor(
    private readonly installationService: InstallationService,
    private readonly messagesService: MessagesService,
  ) {}

  @Get('install')
  async install(@Query('code') code: string): Promise<string> {
    return await this.installationService.install(code);
  }

  @Post('reply')
  reply(): string {
    return this.messagesService.reply();
  }
}
