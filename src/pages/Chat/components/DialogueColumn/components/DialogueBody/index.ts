import { DialogueBody } from './DialogueBody';
import { DialogueMessagesTextComponent } from './components/DialogueMessagesText';
import { DialogueMessagesComponent } from './components/DialogueMessages';

export const DialogueBodyComponent = new DialogueBody({
  DialogueMessagesText: DialogueMessagesTextComponent,
  DialogueMessages: DialogueMessagesComponent,
});
