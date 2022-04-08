import { DialogueColumnTmp } from './DialogueColumn.tmp';
import { DialogueColumnProps } from './DialogueColumn.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class DialogueColumn extends Block<DialogueColumnProps> {
  constructor(props: DialogueColumnProps) {
    super(props);
  }

  render() {
    const template = compile(DialogueColumnTmp);
    return this.compile(template, { ...this.props });
  }
}
