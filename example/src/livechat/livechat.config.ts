import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LivechatConfig {
  public readonly baseApiUrl: string;
  public readonly clientId: string;
  public readonly clientSecret: string;
  public readonly codeExchangeUrl: string;
  public readonly redirectUri: string;
  public readonly webhookSecret: string;

  constructor(private configService: ConfigService) {
    this.baseApiUrl = configService.get('BASE_API_URL');
    this.clientId = configService.get('CLIENT_ID');
    this.clientSecret = configService.get('CLIENT_SECRET');
    this.codeExchangeUrl = configService.get('ACCOUNTS_URL') + '/token';
    this.redirectUri = configService.get('APP_URL') + '/install';
    this.webhookSecret = configService.get('WEBHOOK_SECRET');
  }
}
