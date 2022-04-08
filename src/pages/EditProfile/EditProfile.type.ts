import { Back } from 'src/components/Back/Back';
import Button from 'src/components/Button';
import FormContainer from 'src/components/FormContainer';

export interface EditProfileProps {
  Back: Back;
  formContainer: FormContainer;
  sendButton: Button;
  isValid?: boolean;
  errorText?: string;
  events?: {
    submit: (event: Event) => void;
  };
}
