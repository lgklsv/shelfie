export const validateCheckbox = (checkbox: HTMLInputElement | null) => {
  if (checkbox && checkbox.checked) {
    return {
      checkboxIsValid: true,
      checkboxErrorMessage: '',
    };
  }
  return {
    checkboxIsValid: false,
    checkboxErrorMessage: 'Terms should be accepted to submit the form',
  };
};
