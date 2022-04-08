export const MessageItemTmp = `
li.message__item
  .item__avatar
    img(src=urlAvatar, alt='message_item')
  .item__info
    .item__info_user-name= userName
    .item__info_last-message= lastMessage.text
  .message__info
    .message__info_time= lastMessage.time
    .message__info_inread
`;
