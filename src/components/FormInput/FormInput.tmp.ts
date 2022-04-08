export const formInputTmp = `
.form__content-item
    label.label__container
      .label__container-input
        input.label__input(
         type=type,
         name=name,
         required=required, 
         value=value
         pattern=patternForInput
         title=errorText
          )
        if error
          .label__text-error= errorText
        else
          .label__text= labelText
`;
