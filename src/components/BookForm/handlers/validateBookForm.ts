import { validateCheckbox } from '../../../utils/validators/validateCheckbox';
import { validateDateInput } from '../../../utils/validators/validateDateInput';
import { validateImageInput } from '../../../utils/validators/validateImageInput';
import { validateRadioInputs } from '../../../utils/validators/validateRadioInputs';
import { validateSelectInput } from '../../../utils/validators/validateSelectInput';
import { validateTextInput } from '../../../utils/validators/validateTextInput';

export const validateBookForm = (
  title: HTMLInputElement | null,
  author: HTMLInputElement | null,
  date: HTMLInputElement | null,
  category: HTMLSelectElement | null,
  ebook: HTMLInputElement | null,
  printed: HTMLInputElement | null,
  image: HTMLInputElement | null,
  agreement: HTMLInputElement | null
) => {
  const {
    value: titleValue,
    textIsValid: titleIsValid,
    errorMessage: titleErrorMessage,
  } = validateTextInput(title?.value, 'Title');

  const {
    value: authorValue,
    textIsValid: authorIsValid,
    errorMessage: authorErrorMessage,
  } = validateTextInput(author?.value, 'Author');

  const { dateValue, dateIsValid, dateErrorMessage } = validateDateInput(
    date?.value
  );

  const { selectValue, selectIsValid, selectErrorMessage } =
    validateSelectInput(category?.value, 'Category');

  const { radioValue, radioIsValid, radioErrorMessage } = validateRadioInputs(
    ebook?.checked,
    printed?.checked
  );

  const { imageValue, imageIsValid, imageErrorMessage } = validateImageInput(
    image?.files
  );

  const { checkboxValue, checkboxIsValid, checkboxErrorMessage } =
    validateCheckbox(agreement?.checked);

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
    report: {
      title: {
        value: titleValue,
        titleIsValid,
        message: titleErrorMessage,
      },
      author: {
        value: authorValue,
        authorIsValid,
        message: authorErrorMessage,
      },
      date: {
        value: dateValue,
        dateIsValid,
        message: dateErrorMessage,
      },
      select: {
        value: selectValue,
        selectIsValid,
        message: selectErrorMessage,
      },
      radio: {
        value: radioValue,
        radioIsValid,
        message: radioErrorMessage,
      },
      image: {
        value:
          typeof imageValue === 'string'
            ? imageValue
            : URL.createObjectURL(imageValue),
        imageIsValid,
        message: imageErrorMessage,
      },
      checkbox: {
        value: checkboxValue,
        checkboxIsValid,
        message: checkboxErrorMessage,
      },
    },
  };
};
