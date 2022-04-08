import { ProfileControllersTmp } from './ProfileControllers.tmp';
import { ProfileControllersProps } from './ProfileControllers.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class ProfileControllers extends Block<ProfileControllersProps> {
  constructor(props: ProfileControllersProps) {
    super(props);
  }

  render() {
    const template = compile(ProfileControllersTmp);
    return this.compile(template, { ...this.props });
  }
}
