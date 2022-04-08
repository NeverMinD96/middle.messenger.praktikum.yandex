import { TextArea } from 'src/components/TextArea/TextArea';

export interface DialogueMessagesTextProps {
  fileUploadIcon: string;
  TextArea: TextArea;
  events?: {
    change: (event: Event) => void;
  };
}
