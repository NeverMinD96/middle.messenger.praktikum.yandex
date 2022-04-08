import { TextAreaTmp } from './TextArea.tmp';
import { checkValid } from 'src/utils/checkValid';
import { TextAreaProps } from './TextArea.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';

export class TextArea extends Block<TextAreaProps> {
  constructor(props: TextAreaProps) {
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
    const { textAreaName } = this.props;

    const value = (event.target as HTMLInputElement).value;
    const isValid = checkValid(textAreaName, value);

    if (!isValid) {
      this.setProps({
        ...this.props,
        value,
        placeholder: 'You cannot send an empty message',
      });
    } else {
      this.setProps({ ...this.props, value, placeholder: '' });
    }
  }

  render() {
    const template = compile(TextAreaTmp);
    return this.compile(template, { ...this.props });
  }
}
