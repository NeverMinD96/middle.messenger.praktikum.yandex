import { EditPassword } from './EditPassword';
import BackComponent from '../../components/Back';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import renderDOM from '../../utils/RenderDOM';
import { InputNames } from '../../components/FormInput/FormInput.type';
import FormContainer from 'src/components/FormContainer';

document.addEventListener('DOMContentLoaded', () => {
  const editPasswordPage = new EditPassword({
    Back: BackComponent,
    formContainer: new FormContainer({
      InputsList: [
        new FormInput({
          type: 'password',
          name: InputNames.oldPassword,
          labelText: 'Old Password',
          required: false,
          errorText: `Incorrect password`,
        }),
        new FormInput({
          type: 'password',
          name: InputNames.newPassword,
          labelText: 'New Password',
          required: false,
          errorText: `Incorrect password`,
        }),
        new FormInput({
          type: 'password',
          name: InputNames.repeatPassword,
          labelText: 'Repeat Password',
          required: false,
          errorText: `Incorrect password`,
        }),
      ],
    }),
    sendButton: new Button({
      name: 'save-newPassword__button',
      text: 'Save',
      type: 'submit',
      typeBtn: 'primary',
    }),
    isValid: true,
  });

  renderDOM('#edit-password', editPasswordPage);
});
