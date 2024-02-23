export interface EmptyResponse {}

export interface ErrorResponse {
  error: {
    type: string;
    message: string;
  };
}

export interface BatchResponse<T> {
  responses: (T | ErrorResponse)[];
}

export interface CreateAgentResponse {
  id: string;
}

export interface CreateBotResponse {
  id: string;
   secret: string;
}

export interface CreateBotTemplateResponse {
  id: string;
  secret: string;
}

export interface CreateGroupResponse {
  id: string;
}

export interface IssueBotTokenResponse {
  token: string;
}

export interface RegisterWebhookResponse {
  id: string;
}

export interface ResetBotSecretResponse {
  secret: string;
}

export interface ResetBotTemplateSecretResponse {
  secret: string;
}

export interface AddAutoAccessResponse {
  id: string;
}

export interface GetOrganizationIDResponse {
  organization_id: string;
}

export interface GetLicenseIDResponse {
  license_id: string;
}
