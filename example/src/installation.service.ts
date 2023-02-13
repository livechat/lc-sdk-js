import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class InstallationService {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly codeExchangeUrl: string;
  private readonly redirectUri: string;

  constructor(private configService: ConfigService) {
    this.clientId = configService.get('CLIENT_ID');
    this.clientSecret = configService.get('CLIENT_SECRET');
    this.codeExchangeUrl = configService.get('ACCOUNTS_URL') + '/token';
    this.redirectUri = configService.get('APP_URL') + '/install';
  }

  async install(code: string): Promise<string> {
    const data = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
    });

    await axios
      .post(this.codeExchangeUrl, data)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));

    return 'install';
  }
}
