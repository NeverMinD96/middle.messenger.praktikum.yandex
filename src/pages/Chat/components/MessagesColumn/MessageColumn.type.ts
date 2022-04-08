import MessageItem from './components/MessageItem';
import { Search } from './components/Search/Search';

export interface MessageColumnProps {
  linkForUserProfile: string;
  userHeaderAvatar: string;
  messagesItems: MessageItem[] | MessageItem;
  Search: Search;
}
