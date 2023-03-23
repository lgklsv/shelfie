import { validateTextInput } from '../../../utils/validators/validateTextInput';

export const validateBookForm = (
  title: string | undefined,
  author: string | undefined
) => {
  const { textIsValid: titleIsValid, errorMessage: titleErrorMessage } =
    validateTextInput(title, 'Title');
  const { textIsValid: authorIsValid, errorMessage: authorErrorMessage } =
    validateTextInput(author, 'Author');

  const isValid = titleIsValid && authorIsValid;

  return {
    isValid,
    inputs: [
      {
        titleIsValid,
        message: titleErrorMessage,
      },
      {
        authorIsValid,
        message: authorErrorMessage,
      },
    ],
  };
};
