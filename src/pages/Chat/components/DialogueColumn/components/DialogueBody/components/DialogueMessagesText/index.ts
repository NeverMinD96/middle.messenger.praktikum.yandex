import { DialogueMessagesText } from './DialogueMessagesText';
import fileUploadIcon from '/public/icons/fileUpload-icon.svg';
import TextArea from 'src/components/TextArea';

export const DialogueMessagesTextComponent = new DialogueMessagesText({
  fileUploadIcon: fileUploadIcon,
  TextArea: new TextArea({
    textAreaName: 'message',
    placeholder: 'Write a message...',
  }),
});
