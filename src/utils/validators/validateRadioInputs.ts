export const validateRadioInputs = (
  input: HTMLInputElement | null,
  input2: HTMLInputElement | null
) => {
  if (input && input2 && (input.checked || input2.checked)) {
    return {
      radioValue: input.checked,
      radioIsValid: true,
      radioErrorMessage: '',
    };
  }
  return {
    radioValue: false,
    radioIsValid: false,
    radioErrorMessage: 'Type should be choosen',
  };
};
