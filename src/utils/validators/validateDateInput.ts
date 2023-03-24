export const validateDateInput = (dateInput: HTMLInputElement | null) => {
  if (dateInput && dateInput.value) {
    const enteredDate = Date.parse(dateInput.value);
    const now = new Date().getTime();
    const difference = now - enteredDate;
    if (difference < 0) {
      return {
        dateValue: dateInput.value,
        dateIsValid: false,
        dateErrorMessage: 'Published date should not be in the future',
      };
    }
    return {
      dateValue: dateInput.value,
      dateIsValid: true,
      dateErrorMessage: '',
    };
  }
  return {
    dateValue: '1970-01-01',
    dateIsValid: false,
    dateErrorMessage: 'Published date should not be empty',
  };
};
