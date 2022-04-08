import Block from '../../utils/Block';
import { formInputTmp } from './FormInput.tmp';
import { FormInputProps } from './FormInput.type';
import { compile } from 'pug';
import { checkValid } from 'src/utils/checkValid';

export class FormInput extends Block<FormInputProps> {
  constructor(props: FormInputProps) {
    super({
      ...props,
      events: {
        focusout: (event) => {
          this.handleBlur(event);
        },
      },
    });
  }

  public handleBlur(event: Event) {
    const { name } = this.props;

    const value = (event.target as HTMLInputElement).value;
    const isValid = checkValid(name, value);

    this.setProps({ ...this.props, error: !isValid, value });
  }

  protected render() {
    const template = compile(formInputTmp);
    return this.compile(template, { ...this.props });
  }
}
