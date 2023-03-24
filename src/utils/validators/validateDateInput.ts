export const validateDateInput = (dateInput: HTMLInputElement | null) => {
  if (dateInput && dateInput.value) {
    const enteredDate = Date.parse(dateInput.value);
    const now = new Date().getTime();
    const difference = now - enteredDate;
    if (difference < 0) {
      return {
        dateIsValid: false,
        dateErrorMessage: 'Published date should not be in the future',
      };
    }
    return {
      dateIsValid: true,
      dateErrorMessage: '',
    };
  }
  return {
    dateIsValid: false,
    dateErrorMessage: 'Published should not be empty',
  };
};
