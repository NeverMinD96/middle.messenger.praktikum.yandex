import { DialogueMessagesText } from './DialogueMessagesText';
import fileUploadIcon from '/public/icons/fileUpload-icon.svg';
import { InputNames } from 'src/components/FormInput/FormInput.type';
import TextArea from 'src/components/TextArea';

export const DialogueMessagesTextComponent = new DialogueMessagesText({
  fileUploadIcon: fileUploadIcon,
  TextArea: new TextArea({
    textAreaName: InputNames.message,
    placeholder: 'Write s message...',
  }),
});
