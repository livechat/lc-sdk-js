import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  reply(): string {
    return 'reply';
  }
}
