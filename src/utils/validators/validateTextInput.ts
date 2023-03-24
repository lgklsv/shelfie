export const validateTextInput = (
  input: HTMLInputElement | null,
  type: string
) => {
  if (input && input.value) {
    if (input.value.length < 3) {
      return {
        textIsValid: false,
        errorMessage: `${type} should be at least 3 characters`,
      };
    }
    if (input.value.length > 40) {
      return {
        textIsValid: false,
        errorMessage: `${type} is too long`,
      };
    }
    return {
      textIsValid: true,
      errorMessage: '',
    };
  }
  return {
    textIsValid: false,
    errorMessage: `${type} should not be empty`,
  };
};
