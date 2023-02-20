import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { LivechatConfig } from './livechat.config';
import { Auth } from '@livechat/lc-sdk-js';

/**
 * For more information, see our
 * [documentation of Authorization code grant]{@link https://developers.livechat.com/docs/authorization/agent-authorization#authorization-code-grant}
 *
 * If you need OAuth flow wrapper check out our
 * [Accounts SDK github]{@link https://github.com/livechat/accounts-sdk}
 */
@Injectable()
export class AccountsService {
  constructor(private cfg: LivechatConfig) {}

  async exchangeAuthorizationCode(
    authorizationCode: string,
  ): Promise<Auth.TokenGetter> {
    const authorizationQuery = new URLSearchParams({
      grant_type: 'authorization_code',
      code: authorizationCode,
      client_id: this.cfg.clientId,
      client_secret: this.cfg.clientSecret,
      redirect_uri: this.cfg.redirectUri,
    });
    const url = `${this.cfg.codeExchangeUrl}?${authorizationQuery.toString()}`;

    return axios
      .post<CodeExchangeResponse>(url)
      .then(({ data: { access_token } }) => {
        const tokenPrefix = access_token.split(':')[0];

        return () => ({
          licenseID: this.cfg.licenseId,
          accessToken: access_token,
          region: tokenPrefix,
        });
      });
  }
}

interface CodeExchangeResponse {
  token_type: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  account_id: string;
  organization_id: string;
}
