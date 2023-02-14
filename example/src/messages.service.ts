import { Injectable } from '@nestjs/common';
import { LivechatService } from './livechat/livechat.service';
import { IncomingEvent } from '@livechat/lc-sdk-js/lib/src/webhooks';
import { Message } from '@livechat/lc-sdk-js/lib/src/webhooks/structures';
import { Event } from '@livechat/lc-sdk-js/lib/src/agent/structures';

@Injectable()
export class MessagesService {
  constructor(private livechatService: LivechatService) {}

  reply(payload: IncomingEvent) {
    const { chat_id, event } = payload;
    const { postback } = event as Message;

    if (postback?.id == 'transfer' && postback?.value == 'yes') {
      return this.handleTransfer(chat_id);
    }

    return this.sendMessage(
      chat_id,
      'Hi! I am an example bot. Do you want to talk to a human?',
    );
  }

  private async handleTransfer(chat_id: string) {
    const { agentRtm } = this.livechatService;
    const agentsForTransfer = await agentRtm.listAgentsForTransfer(chat_id);

    if (agentsForTransfer.length === 0) {
      return this.sendMessage(
        chat_id,
        'There are no available humans at the moment :(',
      );
    }

    return await agentRtm
      .transferChat(chat_id, {
        target: {
          type: 'agent',
          ids: agentsForTransfer.map((a) => a.agent_id),
        },
      })
      .catch(() =>
        this.sendMessage(
          chat_id,
          'Got error when trying to transfer the chat :(',
        ),
      );
  }

  private sendMessage(chat_id: string, text: string) {
    const { agentRtm, botId } = this.livechatService;
    return agentRtm.sendEvent(chat_id, this.getRichMessageEvent(text, botId));
  }

  private getRichMessageEvent(text: string, botId: string): Event {
    return {
      author_id: botId,
      type: 'rich_message',
      template_id: 'quick_replies',
      elements: [
        {
          title: text,
          buttons: [
            {
              text: 'Yes, I want human',
              type: 'message',
              value: 'yes',
              postback_id: 'transfer',
              user_ids: [],
            },
            {
              text: 'No, bot is fine',
              type: 'message',
              value: 'no',
              postback_id: 'transfer',
              user_ids: [],
            },
          ],
        },
      ],
    } as Event;
  }
}
