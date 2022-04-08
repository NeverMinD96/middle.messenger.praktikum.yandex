import { DialogueBodyProps } from './DialogueBody.type';
import { DialogueBodyTmp } from './DialogueBody.tmp';

import Block from 'src/utils/Block';
import { compile } from 'pug';

export class DialogueBody extends Block<DialogueBodyProps> {
  constructor(props: DialogueBodyProps) {
    super(props);
  }

  render() {
    const template = compile(DialogueBodyTmp);
    return this.compile(template, { ...this.props });
  }
}
