import { SearchTmp } from './Search.tmp';
import { SearchProps } from './Search.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class Search extends Block<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }

  render() {
    const template = compile(SearchTmp);
    return this.compile(template, { ...this.props });
  }
}
