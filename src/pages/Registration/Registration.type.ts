import Button from '../../components/Button';

import FormContainer from '../../components/FormContainer';

export interface RegistrationProps {
  footerLink: string;
  formContainer: FormContainer;
  sendButton: Button;
  isValid?: boolean;
  errorText?: string;
  events?: {
    submit?: (event: Event) => void;
  };
}
