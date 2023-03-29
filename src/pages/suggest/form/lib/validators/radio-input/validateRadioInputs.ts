export const validateRadioInputs = (
  checkedFirst: boolean | undefined,
  checkedSecond: boolean | undefined
) => {
  if (
    checkedFirst !== undefined &&
    checkedSecond !== undefined &&
    !(checkedFirst && checkedSecond) &&
    (checkedFirst || checkedSecond)
  ) {
    return {
      radioValue: checkedFirst,
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
