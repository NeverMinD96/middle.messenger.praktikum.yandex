export interface ButtonProps {
  name: string;
  text: string;
  type: 'submit' | 'button';
  typeBtn: 'default' | 'primary' | 'exit';
  events?: {
    click?: (event: Event) => void;
    submit?: (event: Event) => void;
  };
}
