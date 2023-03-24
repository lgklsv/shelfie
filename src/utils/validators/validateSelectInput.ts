export const validateSelectInput = (input: HTMLSelectElement | null) => {
  if (!input || !input.value || input.value === 'DEFAULT') {
    return {
      selectValue: 'DEFAULT',
      selectIsValid: false,
      selectErrorMessage: 'Category should be selected',
    };
  }
  return {
    selectValue: input.value,
    selectIsValid: true,
    selectErrorMessage: '',
  };
};
