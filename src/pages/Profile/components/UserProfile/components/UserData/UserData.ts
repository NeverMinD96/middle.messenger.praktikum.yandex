import { UserDataTmp } from './UserData.tmp';
import { UserDataProps } from './UserData.type';

import Block from 'src/utils/Block';
import { compile } from 'pug';

export class UserData extends Block<UserDataProps> {
  constructor(props: UserDataProps) {
    super(props);
  }

  render() {
    const template = compile(UserDataTmp);
    return this.compile(template, { ...this.props });
  }
}
