export interface TextAreaProps {
  textAreaName: string;
  placeholder?: string;
  events?: {
    focusout: (event: Event) => void;
  };
  value?: string;
}
