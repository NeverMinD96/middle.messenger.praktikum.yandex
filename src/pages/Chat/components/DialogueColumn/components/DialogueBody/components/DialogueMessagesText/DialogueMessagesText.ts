import { DialogueMessagesTextTmp } from './DialogueMessagesText.tmp';
import { DialogueMessagesTextProps } from './DialogueMessagesText.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class DialogueMessagesText extends Block<DialogueMessagesTextProps> {
  constructor(props: DialogueMessagesTextProps) {
    super(props);
  }

  render() {
    const template = compile(DialogueMessagesTextTmp);
    return this.compile(template, { ...this.props });
  }
}
