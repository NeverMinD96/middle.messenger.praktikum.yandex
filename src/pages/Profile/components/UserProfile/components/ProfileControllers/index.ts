import { ProfileControllers } from './ProfileControllers';
import Link from 'src/components/Link';
import Button from 'src/components/Button';

export const ProfileControllersComponent = new ProfileControllers({
  DataChange: new Link({
    text: 'Change Data',
    href: '../EditProfile/index.pug',
    typeLink: 'primary',
  }),
  PasswordChange: new Link({
    text: 'Change Password',
    href: '../EditPassword/index.pug',
    typeLink: 'primary',
  }),
  ExitButton: new Button({
    text: 'Exit',
    type: 'button',
    name: 'exit-button',
    typeBtn: 'exit',
  }),
});
