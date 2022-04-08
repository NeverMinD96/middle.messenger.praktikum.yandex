import { UserAvatar } from './UserAvatar';
// @ts-ignore
import image from '/public/images/avatar-2.jpg';
// @ts-ignore
import editIcon from '/public/icons/edit-avatar.svg';

export const UserAvatarComponent = new UserAvatar({
  userAvatar: image,
  editIcon: editIcon,
});
