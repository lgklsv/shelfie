export const validateTextInput = (text: string | undefined, type: string) => {
  if (text) {
    if (text.length < 3) {
      return {
        textIsValid: false,
        errorMessage: `${type} should be at least 3 characters`,
      };
    }
    if (text.length > 40) {
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
