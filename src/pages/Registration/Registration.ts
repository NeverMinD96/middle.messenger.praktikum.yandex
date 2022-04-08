import Block from '../../utils/Block';
import { RegistrationTmp } from './Registration.tmp';
import { RegistrationProps } from './Registration.type';
import { compile } from 'pug';
import { checkValid } from 'src/utils/checkValid';
import { InputNames } from 'src/components/FormInput/FormInput.type';

export class RegistrationPage extends Block<RegistrationProps> {
  constructor(props: RegistrationProps) {
    super({
      ...props,
      events: {
        submit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          const data = {
            [InputNames.email]: formData.get('email'),
            [InputNames.login]: formData.get('login'),
            [InputNames.first_name]: formData.get('first_name'),
            [InputNames.second_name]: formData.get('second_name'),
            [InputNames.phone]: formData.get('phone'),
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
    const template = compile(RegistrationTmp);
    return this.compile(template, { ...this.props });
  }
}
