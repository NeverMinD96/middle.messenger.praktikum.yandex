import { EditProfileProps } from './EditProfile.type';
import { EditProfileTmp } from './EditProfile.tmp';
import Block from 'src/utils/Block';
import { compile } from 'pug';
import { InputNames } from 'src/components/FormInput/FormInput.type';
import { checkValid } from '../../utils/checkValid';

export class EditProfile extends Block<EditProfileProps> {
  constructor(props: EditProfileProps) {
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
            [InputNames.display_name]: formData.get('display_name'),
          };
          const isValid = Object.entries(data).some(([input, value]) =>
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
    const template = compile(EditProfileTmp);
    return this.compile(template, { ...this.props });
  }
}
