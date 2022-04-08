export const DialogueHeaderTmp = `
.dialogue__header
  .dialogue__header-user
    .header__user-avatar
      img(src=interlocutorImage)
    .header__user-info
      .user__info-name= interlocutorName
      .user__info-activity
        .activity-text last active
        .activity-time= lastActiveTime
  .dialogue__header-settings
    img(src=ellipsisIcon)
`;
