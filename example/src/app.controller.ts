import { Controller, Get, Post } from '@nestjs/common';
import { InstallationService } from './installation.service';
import { MessagesService } from './messages.service';

@Controller()
export class AppController {
  constructor(
    private readonly installationService: InstallationService,
    private readonly messagesService: MessagesService,
  ) {}

  @Get('install')
  install(): string {
    return this.installationService.install();
  }

  @Post('reply')
  reply(): string {
    return this.messagesService.reply();
  }
}
