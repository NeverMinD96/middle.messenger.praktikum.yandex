import { MessageItemTmp } from './MessageItem.tmp';
import { MessageItemProps } from './MessageItem.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class MessageItem extends Block<MessageItemProps> {
  constructor(props: MessageItemProps) {
    super(props);
  }

  render() {
    const template = compile(MessageItemTmp);
    return this.compile(template, { ...this.props });
  }
}
