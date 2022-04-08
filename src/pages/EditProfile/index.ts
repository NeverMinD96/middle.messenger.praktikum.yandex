import { EditProfile } from './EditProfile';
import BackComponent from '../../components/Back';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import renderDOM from '../../utils/RenderDOM';
import { InputNames } from '../../components/FormInput/FormInput.type';
import FormContainer from 'src/components/FormContainer';

document.addEventListener('DOMContentLoaded', () => {
  const editProfilePage = new EditProfile({
    Back: BackComponent,
    formContainer: new FormContainer({
      InputsList: [
        new FormInput({
          type: 'email',
          name: InputNames.email,
          required: false,
          labelText: 'email',
          errorText: `Incorrect email`,
        }),
        new FormInput({
          type: 'text',
          name: InputNames.login,
          required: false,
          labelText: 'Login',
          errorText: `Incorrect login`,
        }),
        new FormInput({
          type: 'text',
          name: InputNames.first_name,
          required: false,
          labelText: 'First Name',
          errorText: `Incorrect First Name`,
        }),
        new FormInput({
          type: 'text',
          name: InputNames.second_name,
          required: false,
          labelText: 'Second Name',
          errorText: `Incorrect Second Name`,
        }),
        new FormInput({
          type: 'text',
          name: InputNames.display_name,
          required: false,
          labelText: 'Nick Name',
          errorText: `Incorrect Nick Name`,
        }),
        new FormInput({
          type: 'tel',
          name: InputNames.phone,
          required: false,
          labelText: 'Phone',
          errorText: `Incorrect Phone`,
        }),
      ],
    }),
    sendButton: new Button({
      name: 'save-changes__button',
      type: 'submit',
      typeBtn: 'primary',
      text: 'Save',
    }),
    isValid: true,
  });

  renderDOM('#edit-data', editProfilePage);
});
