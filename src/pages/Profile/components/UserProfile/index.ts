import { UserProfile } from './UserProfile';
import { UserAvatarComponent } from './components/UserAvatar';
import { UserDataComponent } from './components/UserData';
import { ProfileControllersComponent } from './components/ProfileControllers';

export const UserProfileComponent = new UserProfile({
  UserAvatar: UserAvatarComponent,
  UserData: UserDataComponent,
  ProfileControllers: ProfileControllersComponent,
});
