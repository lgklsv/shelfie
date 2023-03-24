export const validateSelectInput = (value: string | undefined) => {
  if (!value || value === 'DEFAULT') {
    return {
      selectIsValid: false,
      selectErrorMessage: 'Category should be selected',
    };
  }
  return {
    selectIsValid: true,
    selectErrorMessage: '',
  };
};
