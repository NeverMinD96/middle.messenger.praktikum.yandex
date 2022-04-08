import { DialogueHeaderTmp } from './DialogueHeader.tmp';
import { DialogueHeaderProps } from './DialogueHeader.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class DialogueHeader extends Block<DialogueHeaderProps> {
  constructor(props: DialogueHeaderProps) {
    super(props);
  }

  render() {
    const template = compile(DialogueHeaderTmp);
    return this.compile(template, { ...this.props });
  }
}
