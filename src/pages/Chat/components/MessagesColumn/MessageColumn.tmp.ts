export const MessageColumnTmp = `
.messages__column
  .messages__header
    a.messages__header-avatar(href=linkForUserProfile)
      img(src=userHeaderAvatar, alt='user_avatar')
    | !{Search}
  .messages__content
    ul.messages__list
      | !{messagesItems}
`;
