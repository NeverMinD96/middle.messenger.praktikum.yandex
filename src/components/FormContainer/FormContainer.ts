import { FormContainerType } from './FormContainer.type';
import { FormContainerTmp } from './FormContainer.tmp';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class FormContainer extends Block<FormContainerType> {
  constructor(props: FormContainerType) {
    super(props);
  }

  render() {
    const template = compile(FormContainerTmp);
    return this.compile(template, { ...this.props });
  }
}
