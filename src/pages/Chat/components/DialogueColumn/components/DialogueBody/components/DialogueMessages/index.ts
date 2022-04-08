import { DialogueMessages } from './DialogueMessages';
import DialogueMessagesItem from './components/DialogueMessagesItem';

export const DialogueMessagesComponent = new DialogueMessages({
  MessagesItem: [
    new DialogueMessagesItem({
      textMessage: 'dialogue.freeze',
      dateMessage: '12:20',
      messageSender: 'user',
    }),
    new DialogueMessagesItem({
      textMessage: 'да го по одной стакашке',
      dateMessage: '12:20',
      messageSender: 'interlocutor',
    }),
    new DialogueMessagesItem({
      textMessage: 'не, проектную работу надо сдать ',
      dateMessage: '12:21',
      messageSender: 'user',
    }),
    new DialogueMessagesItem({
      textMessage: 'го по пиву?',
      dateMessage: '12:20',
      messageSender: 'interlocutor',
    }),
  ],
});
