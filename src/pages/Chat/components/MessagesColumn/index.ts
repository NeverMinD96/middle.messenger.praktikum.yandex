import { MessagesColumn } from './MessageColumn';
import {
  userHeaderAvatar,
  messageAvatar1,
  messageAvatar2,
  messageAvatar3,
  messageAvatar4,
  messageAvatar5,
  messageAvatar6,
} from './media';
import MessageItem from './components/MessageItem';
import { SearchComponent } from './components/Search';

export const MessagesColumnComponent = new MessagesColumn({
  linkForUserProfile: '../Profile/index.pug',
  userHeaderAvatar: userHeaderAvatar,
  messagesItems: [
    new MessageItem({
      userName: 'Mestniy',
      lastMessage: {
        text: 'Махаца бушь?',
        time: '13:21',
      },
      urlAvatar: messageAvatar1,
    }),
    new MessageItem({
      userName: 'Necr',
      lastMessage: {
        text: 'lorem lorem lorem lorem',
        time: '03:03',
      },
      urlAvatar: messageAvatar2,
    }),
    new MessageItem({
      userName: 'User',
      lastMessage: {
        text: 'продаю гараж',
        time: '14:47',
      },
      urlAvatar: messageAvatar3,
    }),
    new MessageItem({
      userName: 'Kizaru',
      lastMessage: {
        text: 'где даги, там напряги',
        time: '07:11',
      },
      urlAvatar: messageAvatar4,
    }),
    new MessageItem({
      userName: 'MMMM',
      lastMessage: {
        text: 'чингис из казахстании',
        time: '00:01',
      },
      urlAvatar: messageAvatar5,
    }),
    new MessageItem({
      userName: 'No name',
      lastMessage: {
        text: 'жарю плов на канистре',
        time: '04:16',
      },
      urlAvatar: messageAvatar6,
    }),
  ],
  Search: SearchComponent,
});
