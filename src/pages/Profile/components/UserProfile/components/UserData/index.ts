import UserDataItem from '../UserDataItem';
import { UserData } from './UserData';

export const UserDataComponent = new UserData({
  userDataEmail: new UserDataItem({
    category: 'Email',
    userData: 'mail@yandex.ru',
  }),
  userDataLogin: new UserDataItem({ category: 'Login', userData: 'NeverMore' }),
  userDataFirstName: new UserDataItem({
    category: 'First Name',
    userData: 'Stanislav',
  }),
  userDataSecondName: new UserDataItem({
    category: 'Second Name',
    userData: 'Batalov',
  }),
  userDataNickName: new UserDataItem({
    category: 'Nick Name',
    userData: 'Never',
  }),
  userDataPhone: new UserDataItem({
    category: 'Phone Number',
    userData: '8-942-146-14-88',
  }),
});
