import { Back } from 'src/components/Back/Back';
import Button from 'src/components/Button';
import FormContainer from '../../components/FormContainer';

export interface EditPasswordProps {
  Back: Back;
  formContainer: FormContainer;
  sendButton: Button;
  errorText?: string;
  events?: {
    submit: (event: Event) => void;
  };
  isValid: boolean;
}
