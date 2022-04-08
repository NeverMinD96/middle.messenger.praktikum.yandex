import Button from '../../components/Button';
import FormContainer from 'src/components/FormContainer';

export interface SignInProps {
  footerLink: string;
  formContainer: FormContainer;
  sendButton: Button;
  isValid: boolean;
  errorText?: string;
  events?: {
    submit?: (event: Event) => void;
  };
}
