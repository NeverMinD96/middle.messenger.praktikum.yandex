export const DialogueMessagesItemTmp = `
if messageSender === 'user'
  .messages__item(class='user__message')
    .messages__item-text= textMessage
    .messages__item-date= dateMessage
else
  .messages__item
    .messages__item-text= textMessage
    .messages__item-date= dateMessage
`;
