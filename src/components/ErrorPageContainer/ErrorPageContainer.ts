import Block from 'src/utils/Block';
import { ErrorPageContainerTmp } from './ErrorPageContainer.tmp';
import { ErrorPageContainerProps } from './ErrorPageContainer.type';
import { compile } from 'pug';

export class ErrorPageContainer extends Block<ErrorPageContainerProps> {
  constructor(props: ErrorPageContainerProps) {
    super(props);
  }

  protected render() {
    const template = compile(ErrorPageContainerTmp);
    return this.compile(template, { ...this.props });
  }
}
