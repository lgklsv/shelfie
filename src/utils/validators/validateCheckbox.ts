export const validateCheckbox = (checkboxValue: boolean | undefined) => {
  if (checkboxValue) {
    return {
      checkboxValue,
      checkboxIsValid: true,
      checkboxErrorMessage: '',
    };
  }
  return {
    checkboxValue: false,
    checkboxIsValid: false,
    checkboxErrorMessage: 'Terms should be accepted to submit the form',
  };
};
