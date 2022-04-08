import { UserAvatar } from './components/UserAvatar/UserAvatar';
import { UserData } from './components/UserData/UserData';
import { ProfileControllers } from './components/ProfileControllers/ProfileControllers';

export interface UserProfileProps {
  UserAvatar: UserAvatar;
  UserData: UserData;
  ProfileControllers: ProfileControllers;
}
