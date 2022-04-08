import { BackTmp } from './Back.tmp';
import { BackProps } from './Back.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class Back extends Block<BackProps> {
  constructor(props: BackProps) {
    super(props);
  }

  render() {
    const template = compile(BackTmp);
    return this.compile(template, { ...this.props });
  }
}
