import { DialogueMessagesItemTmp } from './DialogueMessagesItem.tmp';
import { DialogueMessagesItemProps } from './DialogueMessagesItem.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class DialogueMessagesItem extends Block<DialogueMessagesItemProps> {
  constructor(props: DialogueMessagesItemProps) {
    super(props);
  }
  render() {
    const template = compile(DialogueMessagesItemTmp);
    return this.compile(template, { ...this.props });
  }
}
