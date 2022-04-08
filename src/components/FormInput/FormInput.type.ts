export interface FormInputProps {
  type:
    | 'email'
    | 'search'
    | 'tel'
    | 'url'
    | 'number'
    | 'text'
    | 'range'
    | 'time'
    | 'password';
  name: InputNames;
  required: boolean;
  errorText?: string;
  labelText?: string;
  events?: {
    click?: () => void;
    focusout?: (event: Event) => void;
    change?: (event: Event) => void;
  };
  value?: string;
  validationRegExp?: string;
  error?: boolean;
}

export enum InputNames {
  email = 'email',
  login = 'login',
  password = 'password',
  first_name = 'first_name',
  second_name = 'second_name',
  phone = 'phone',
  message = 'message',
  display_name = 'display_name',
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
  repeatPassword = 'repeatPassword',
}
