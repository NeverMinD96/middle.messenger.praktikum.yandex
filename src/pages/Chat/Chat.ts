import { ChatTmp } from './Chat.tmp';
import { ChatProps } from './Chat.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    const template = compile(ChatTmp);
    return this.compile(template, { ...this.props });
  }
}
