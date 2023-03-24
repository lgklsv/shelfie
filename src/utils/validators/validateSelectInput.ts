export const validateSelectInput = (input: HTMLSelectElement | null) => {
  if (!input || !input.value || input.value === 'DEFAULT') {
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
