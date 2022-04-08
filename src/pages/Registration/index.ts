import { RegistrationPage } from './Registration';
import { RegistrationProps } from './Registration.type';
import FormContainer from '../../components/FormContainer';
import FormInput from '../../components/FormInput';
import renderDOM from 'src/utils/RenderDOM';
import Button from 'src/components/Button';
import { InputNames } from '../../components/FormInput/FormInput.type';

document.addEventListener('DOMContentLoaded', () => {
  const pageProps: RegistrationProps = {
    footerLink: '../SignIn/index.pug',
    formContainer: new FormContainer({
      InputsList: [
        new FormInput({
          type: 'email',
          name: InputNames.email,
          required: true,
          labelText: 'Email',
          errorText: `Incorrect email`,
        }),
        new FormInput({
          type: 'text',
          name: InputNames.login,
          errorText: `Incorrect login`,
          required: true,
          labelText: 'Login',
        }),
        new FormInput({
          type: 'password',
          name: InputNames.password,
          required: true,
          errorText: `the password must contain between 8 and 40 characters,
          at least one capital letter and number required`,
          labelText: 'Password',
        }),
        new FormInput({
          type: 'text',
          name: InputNames.first_name,
          errorText: `Incorrect first name`,
          required: true,
          labelText: 'First Name',
        }),
        new FormInput({
          type: 'text',
          name: InputNames.second_name,
          errorText: `Incorrect second name`,
          required: true,
          labelText: 'Second Name',
        }),
        new FormInput({
          type: 'tel',
          name: InputNames.phone,
          required: true,
          labelText: 'Phone',
          errorText: 'Incorrect phone',
        }),
      ],
    }),
    sendButton: new Button({
      type: 'submit',
      typeBtn: 'default',
      text: 'Registration',
      name: 'registration__button',
    }),
    isValid: true,
  };

  const pageContent = new RegistrationPage(pageProps);

  renderDOM('#registration-page', pageContent);
});
