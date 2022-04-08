import { MessageColumnTmp } from './MessageColumn.tmp';
import { MessageColumnProps } from './MessageColumn.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class MessagesColumn extends Block<MessageColumnProps> {
  constructor(props: MessageColumnProps) {
    super(props);
  }
  render() {
    const template = compile(MessageColumnTmp);
    return this.compile(template, { ...this.props });
  }
}
