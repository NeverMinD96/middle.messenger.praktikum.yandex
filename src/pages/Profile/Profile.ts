import { ProfileProps } from './Profile.type';
import { ProfileTmp } from './Profile.tmp';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super(props);
  }

  render() {
    const template = compile(ProfileTmp);
    return this.compile(template, { ...this.props });
  }
}
