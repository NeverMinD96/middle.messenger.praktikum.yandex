export const SignInTmp = `
form.sign-in__container
    h1.form__title Sign In
    | !{formContainer}
    .form__footer
      | !{sendButton}
      if !isValid
      .form__error-text= errorText
      .form__footer-link
        a(href=footerLink) Create account
`;
