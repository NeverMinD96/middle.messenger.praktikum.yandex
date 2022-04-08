export interface UserDataItemProps {
  category:
    | 'Email'
    | 'Login'
    | 'First Name'
    | 'Second Name'
    | 'Nick Name'
    | 'Phone Number';
  userData: string;
}
