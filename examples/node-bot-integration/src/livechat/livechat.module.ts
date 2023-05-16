import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LivechatConfig } from './livechat.config';
import { AccountsService } from './accounts.service';
import { LivechatService } from './livechat.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [LivechatConfig, AccountsService, LivechatService],
  exports: [LivechatService],
})
export class LivechatModule {}
