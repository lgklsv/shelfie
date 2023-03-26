export const validateDateInput = (dateValue: string | undefined) => {
  if (dateValue && !Number.isNaN(Date.parse(dateValue))) {
    const enteredDate = Date.parse(dateValue);
    const now = new Date().getTime();
    const difference = now - enteredDate;
    if (difference < 0) {
      return {
        dateValue,
        dateIsValid: false,
        dateErrorMessage: 'Published date should not be in the future',
      };
    }
    return {
      dateValue,
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
