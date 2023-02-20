import { Module } from '@nestjs/common';
import { LivechatModule } from './livechat/livechat.module';
import { AppController } from './app.controller';
import { InstallationService } from './installation.service';
import { MessagesService } from './messages.service';

@Module({
  imports: [LivechatModule],
  controllers: [AppController],
  providers: [InstallationService, MessagesService],
})
export class AppModule {}
