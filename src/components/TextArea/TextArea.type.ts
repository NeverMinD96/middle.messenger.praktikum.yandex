import { InputNames } from 'src/components/FormInput/FormInput.type';

export interface TextAreaProps {
  textAreaName: InputNames;
  placeholder?: string;
  events?: {
    focusout: (event: Event) => void;
  };
  value?: string;
}
