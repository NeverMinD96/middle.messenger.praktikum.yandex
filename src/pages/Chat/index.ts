import renderDOM from 'src/utils/RenderDOM';
import { Chat } from './Chat';
import { MessagesColumnComponent } from './components/MessagesColumn';
import { DialogueColumnComponent } from './components/DialogueColumn';

document.addEventListener('DOMContentLoaded', () => {
  const chatPage = new Chat({
    MessagesColumn: MessagesColumnComponent,
    DialogueColumn: DialogueColumnComponent,
  });

  renderDOM('#chat-page', chatPage);
});
