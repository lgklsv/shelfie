export const validateSelectInput = (
  value: string | undefined,
  type: string
) => {
  if (!value || value === 'DEFAULT') {
    return {
      selectValue: 'DEFAULT',
      selectIsValid: false,
      selectErrorMessage: `${type} should be selected`,
    };
  }
  return {
    selectValue: value,
    selectIsValid: true,
    selectErrorMessage: '',
  };
};
