export const validateCheckbox = (checkbox: HTMLInputElement | null) => {
  if (checkbox && checkbox.checked) {
    return {
      checkboxValue: checkbox.checked,
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
