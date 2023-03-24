export const validateTextInput = (
  input: HTMLInputElement | null,
  type: string
) => {
  if (input && input.value) {
    if (input.value.length < 3) {
      return {
        value: input.value,
        textIsValid: false,
        errorMessage: `${type} should be at least 3 characters`,
      };
    }
    if (input.value.length > 40) {
      return {
        value: input.value,
        textIsValid: false,
        errorMessage: `${type} is too long`,
      };
    }
    return {
      value: input.value,
      textIsValid: true,
      errorMessage: '',
    };
  }
  return {
    value: '',
    textIsValid: false,
    errorMessage: `${type} should not be empty`,
  };
};
