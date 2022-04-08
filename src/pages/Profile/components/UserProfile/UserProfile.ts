import Block from 'src/utils/Block';
import { UserProfileProps } from './UserProfile.type';
import { UserProfileTmp } from './UserProfile.tmp';
import { compile } from 'pug';

export class UserProfile extends Block<UserProfileProps> {
  constructor(props: UserProfileProps) {
    super(props);
  }

  render() {
    const template = compile(UserProfileTmp);
    return this.compile(template, { ...this.props });
  }
}
