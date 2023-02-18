import { Injectable } from '@nestjs/common';
import { LivechatService } from './livechat/livechat.service';
import { IncomingEvent } from '@livechat/lc-sdk-js/lib/src/webhooks';

@Injectable()
export class MessagesService {
  constructor(private livechatService: LivechatService) {}

  reply(payload: IncomingEvent) {
    if (payload.event.type !== 'message') {
      return;
    }

    const { chat_id, event } = payload;
    const { postback } = event;

    if (postback?.id == 'transfer' && postback?.value == 'yes') {
      return this.handleTransfer(chat_id);
    }

    return this.sendRichMessage(
      chat_id,
      'Hi! I am an example bot. Do you want to talk to a human?',
    );
  }

  private async handleTransfer(chat_id: string) {
    const { agentRtm, botId } = this.livechatService;
    const agentsForTransfer = await agentRtm.listAgentsForTransfer(chat_id);

    if (agentsForTransfer.length === 0) {
      return this.sendMessage(
        chat_id,
        'There are no available humans at the moment :(',
      );
    }
    const agentIds = agentsForTransfer
      .map((a) => a.agent_id)
      .filter((id) => id !== botId);

    return await agentRtm
      .transferChat(chat_id, {
        target: {
          type: 'agent',
          ids: agentIds,
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
    return this.livechatService.agentRtm.sendEvent(chat_id, {
      type: 'message',
      text: text,
    });
  }

  /***
   * For more information, see our
   * [documentation of Rich Messages]{@link https://developers.livechat.com/docs/extending-chat-widget/rich-messages#rich-messages-overview}
   */
  private sendRichMessage(chat_id: string, text: string) {
    return this.livechatService.agentRtm.sendEvent(chat_id, {
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
    });
  }
}
