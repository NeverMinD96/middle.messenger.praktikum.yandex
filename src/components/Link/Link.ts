import Block from 'src/utils/Block';
import { LinkTmp } from './Link.tmp';
import { LinkProps } from './Link.type';
import { compile } from 'pug';

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    const template = compile(LinkTmp);
    return this.compile(template, { ...this.props });
  }
}
