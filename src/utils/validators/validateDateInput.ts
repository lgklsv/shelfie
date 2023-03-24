export const validateDateInput = (date: string | undefined) => {
  if (date) {
    const enteredDate = Date.parse(date);
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
