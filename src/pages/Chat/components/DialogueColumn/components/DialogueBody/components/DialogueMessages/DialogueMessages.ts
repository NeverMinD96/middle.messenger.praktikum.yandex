import { DialogueMessagesTmp } from './DialogueMessages.tmp';
import { DialogueMessagesProps } from './DialogueMessages.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class DialogueMessages extends Block<DialogueMessagesProps> {
  constructor(props: DialogueMessagesProps) {
    super(props);
  }

  render() {
    const template = compile(DialogueMessagesTmp);
    return this.compile(template, { ...this.props });
  }
}
