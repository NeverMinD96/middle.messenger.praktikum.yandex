import renderDOM from '../../utils/RenderDOM';
import BackComponent from '../../components/Back';
import { Profile } from './Profile';
import { UserProfileComponent } from './components/UserProfile';

document.addEventListener('DOMContentLoaded', () => {
  const profilePage = new Profile({
    UserProfile: UserProfileComponent,
    Back: BackComponent,
  });

  renderDOM('#page-profile', profilePage);
});
