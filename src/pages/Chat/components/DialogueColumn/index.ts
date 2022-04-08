import { DialogueColumn } from './DialogueColumn';
import { DialogueHeaderComponent } from './components/DialogueHeader';
import { DialogueBodyComponent } from './components/DialogueBody';

export const DialogueColumnComponent = new DialogueColumn({
  DialogueHeader: DialogueHeaderComponent,
  DialogueBody: DialogueBodyComponent,
});
