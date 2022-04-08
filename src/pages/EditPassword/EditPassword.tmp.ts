export const EditPasswordTmp = `
.page__profile
  | !{Back}
  section.user__profile
    form.profile__data
        h1.form__title Change Password
        | !{formContainer}
        .profile__controllers
          | !{sendButton}
          .form__error-text= errorText
`;
