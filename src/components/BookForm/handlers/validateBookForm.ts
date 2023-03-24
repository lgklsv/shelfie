import { validateCheckbox } from '../../../utils/validators/validateCheckbox';
import { validateDateInput } from '../../../utils/validators/validateDateInput';
import { validateImageInput } from '../../../utils/validators/validateImageInput';
import { validateRadioInputs } from '../../../utils/validators/validateRadioInputs';
import { validateSelectInput } from '../../../utils/validators/validateSelectInput';
import { validateTextInput } from '../../../utils/validators/validateTextInput';

export const validateBookForm = (
  title: string | undefined,
  author: string | undefined,
  date: string | undefined,
  category: string | undefined,
  ebook: HTMLInputElement | null,
  printed: HTMLInputElement | null,
  image: HTMLInputElement | null,
  agreement: HTMLInputElement | null
) => {
  const { textIsValid: titleIsValid, errorMessage: titleErrorMessage } =
    validateTextInput(title, 'Title');
  const { textIsValid: authorIsValid, errorMessage: authorErrorMessage } =
    validateTextInput(author, 'Author');
  const { dateIsValid, dateErrorMessage } = validateDateInput(date);
  const { selectIsValid, selectErrorMessage } = validateSelectInput(category);
  const { radioIsValid, radioErrorMessage } = validateRadioInputs(
    ebook,
    printed
  );
  const { imageIsValid, imageErrorMessage } = validateImageInput(image);
  const { checkboxIsValid, checkboxErrorMessage } = validateCheckbox(agreement);

  const isValid =
    titleIsValid &&
    authorIsValid &&
    dateIsValid &&
    selectIsValid &&
    radioIsValid &&
    imageIsValid &&
    checkboxIsValid;

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
      {
        radioIsValid,
        message: radioErrorMessage,
      },
      {
        imageIsValid,
        message: imageErrorMessage,
      },
      {
        checkboxIsValid,
        message: checkboxErrorMessage,
      },
    ],
  };
};
