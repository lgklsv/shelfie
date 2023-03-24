import { validateDateInput } from '../../../utils/validators/validateDateInput';
import { validateSelectInput } from '../../../utils/validators/validateSelectInput';
import { validateTextInput } from '../../../utils/validators/validateTextInput';

export const validateBookForm = (
  title: string | undefined,
  author: string | undefined,
  date: string | undefined,
  category: string | undefined
) => {
  const { textIsValid: titleIsValid, errorMessage: titleErrorMessage } =
    validateTextInput(title, 'Title');
  const { textIsValid: authorIsValid, errorMessage: authorErrorMessage } =
    validateTextInput(author, 'Author');
  const { dateIsValid, dateErrorMessage } = validateDateInput(date);
  const { selectIsValid, selectErrorMessage } = validateSelectInput(category);

  const isValid = titleIsValid && authorIsValid && dateIsValid && selectIsValid;

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
      {
        dateIsValid,
        message: dateErrorMessage,
      },
      {
        selectIsValid,
        message: selectErrorMessage,
      },
    ],
  };
};
