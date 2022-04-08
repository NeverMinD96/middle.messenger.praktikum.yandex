import { UserDataItemTmp } from './UserDataItem.tmp';
import { UserDataItemProps } from './UserDataItem.type';

import Block from 'src/utils/Block';
import { compile } from 'pug';

export class UserDataItem extends Block<UserDataItemProps> {
  constructor(props: UserDataItemProps) {
    super(props);
  }

  render() {
    const template = compile(UserDataItemTmp);
    return this.compile(template, { ...this.props });
  }
}
