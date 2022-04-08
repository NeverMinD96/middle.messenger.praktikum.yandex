export const RegistrationTmp = `
form.registration__container
  h1.form__title Registration
  | !{ formContainer }
  .form__footer
        | !{ sendButton }
        .form__error-text= errorText
        .form__footer-link
          a(href=footerLink) Already have an account?
`;
