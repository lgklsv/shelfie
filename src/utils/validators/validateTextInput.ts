export const validateTextInput = (text: string | undefined, type: string) => {
  if (text) {
    const cleanText = text.trim();
    if (cleanText.length < 3) {
      return {
        value: cleanText,
        textIsValid: false,
        errorMessage: `${type} should be at least 3 characters`,
      };
    }
    if (cleanText.length > 40) {
      return {
        value: cleanText,
        textIsValid: false,
        errorMessage: `${type} is too long`,
      };
    }
    return {
      value: cleanText,
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
