import { compile } from 'pug';
import { ButtonProps } from './Button.type';

import Block from 'src/utils/Block';
import { buttonTmp } from './Button.tmp';

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const template = compile(buttonTmp);
    return this.compile(template, { ...this.props });
  }
}
