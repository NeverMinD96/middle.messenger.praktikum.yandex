import Block from 'src/utils/Block';
import { UserAvatarTmp } from './UserAvatar.tmp';
import { UserAvatarProps } from './UserAvatar.type';
import { compile } from 'pug';

export class UserAvatar extends Block<UserAvatarProps> {
  constructor(props: UserAvatarProps) {
    super(props);
  }

  render() {
    const template = compile(UserAvatarTmp);
    return this.compile(template, { ...this.props });
  }
}
