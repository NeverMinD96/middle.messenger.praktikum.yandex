import { InputNames } from '../components/FormInput/FormInput.type';

interface InputRegExp {
  pattern: RegExp;
}

export const checkValid = (
  inputName: InputNames | string,
  value: string | FormDataEntryValue | null,
): boolean => {
  if (!value) return false;

  const fields: Record<InputNames | string, InputRegExp> = {
    [InputNames.email]: {
      pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
    },
    [InputNames.login]: {
      pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
    },
    [InputNames.password]: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    },
    [InputNames.first_name]: {
      pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
    },
    [InputNames.second_name]: {
      pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
    },
    [InputNames.phone]: {
      pattern: /^[+-d]?\d{10,15}$/,
    },
    [InputNames.display_name]: {
      pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
    },
    [InputNames.message]: {
      pattern: /(.|\s)*\S(.|\s)*/,
    },
    [InputNames.oldPassword]: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    },
    [InputNames.newPassword]: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    },
    [InputNames.repeatPassword]: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    },
  };

  const hasPattern = fields[inputName].pattern;

  return hasPattern.test(value as string);
};
