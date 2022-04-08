import Block from '../../utils/Block';
import { SignInTmp } from './SignIn.tmp';
import { SignInProps } from './SignIn.type';
import { compile } from 'pug';
import { InputNames } from 'src/components/FormInput/FormInput.type';
import { checkValid } from 'src/utils/checkValid';

export default class SignInPage extends Block<SignInProps> {
  constructor(props: SignInProps) {
    super({
      ...props,
      events: {
        submit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          const data = {
            [InputNames.login]: formData.get('login'),
            [InputNames.password]: formData.get('password'),
          };
          const isValid = Object.entries(data).every(([input, value]) =>
            //@ts-ignore
            checkValid(input, value),
          );

          if (!isValid) {
            this.setProps({
              ...this.props,
              isValid,
              errorText: 'Check the correctness of the entered data',
            });
          } else {
            this.setProps({
              ...this.props,
              isValid,
              errorText: '',
            });
          }
          console.log(data);
        },
      },
    });
  }

  render() {
    const template = compile(SignInTmp);
    return this.compile(template, { ...this.props });
  }
}
