import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InstallationService } from './installation.service';
import { MessagesService } from './messages.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [InstallationService, MessagesService],
})
export class AppModule {}
