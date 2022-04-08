import SignInPage from './SignIn';
import { SignInProps } from './SignIn.type';
import renderDOM from 'src/utils/RenderDOM';
import FormInput from 'src/components/FormInput';
import Button from 'src/components/Button';
import { InputNames } from 'src/components/FormInput/FormInput.type';
import FormContainer from '../../components/FormContainer';

document.addEventListener('DOMContentLoaded', () => {
  const propsForPage: SignInProps = {
    footerLink: '../Registration/index.pug',
    formContainer: new FormContainer({
      InputsList: [
        new FormInput({
          name: InputNames.login,
          type: 'text',
          required: true,
          labelText: 'Login',
          errorText: `Incorrect login`,
        }),
        new FormInput({
          name: InputNames.password,
          type: 'password',
          errorText: `Incorrect password`,
          required: true,
          labelText: 'Password',
        }),
      ],
    }),
    sendButton: new Button({
      type: 'submit',
      name: 'sign-in__button',
      text: 'Sign-in',
      typeBtn: 'default',
    }),
    isValid: true,
  };

  const pageContent = new SignInPage(propsForPage);

  renderDOM('#sign-in', pageContent);
});
