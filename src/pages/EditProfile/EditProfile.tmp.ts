export const EditProfileTmp = `
.page__profile
  | !{Back}
  section.user__profile
    form.profile__data
        h1.form__title Change Data
        | !{formContainer}
        .profile__controllers
          | !{sendButton}
          .form__error-text= errorText
`;
