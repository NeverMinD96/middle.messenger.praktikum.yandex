import { EditPasswordTmp } from './EditPassword.tmp';
import { EditPasswordProps } from './EditPassword.type';
import Block from 'src/utils/Block';
import { compile } from 'pug';
import { checkValid } from 'src/utils/checkValid';
import { InputNames } from 'src/components/FormInput/FormInput.type';

export class EditPassword extends Block<EditPasswordProps> {
  constructor(props: EditPasswordProps) {
    super({
      ...props,
      events: {
        submit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          const data = {
            [InputNames.oldPassword]: formData.get('oldPassword'),
            [InputNames.newPassword]: formData.get('newPassword'),
            [InputNames.repeatPassword]: formData.get('repeatPassword'),
          };
          const isValid = Object.entries(data).some(([input, value]) =>
            //@ts-ignore
            checkValid(input, value),
          );

          const { newPassword, repeatPassword } = data;

          if (!isValid || repeatPassword !== newPassword) {
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
    const template = compile(EditPasswordTmp);
    return this.compile(template, { ...this.props });
  }
}
