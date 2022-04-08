import { DialogueHeader } from './DialogueHeader';
import image from '/public/images/2.png';
import icon from '/public/icons/ellipsis.svg';

export const DialogueHeaderComponent = new DialogueHeader({
  interlocutorImage: image,
  interlocutorName: 'Necr',
  lastActiveTime: '12:20',
  ellipsisIcon: icon,
});
