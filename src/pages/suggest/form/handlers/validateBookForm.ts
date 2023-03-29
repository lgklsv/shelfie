import { validate } from '../lib';

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
  } = validate.TextInput(title?.value, 'Title');

  const {
    value: authorValue,
    textIsValid: authorIsValid,
    errorMessage: authorErrorMessage,
  } = validate.TextInput(author?.value, 'Author');

  const { dateValue, dateIsValid, dateErrorMessage } = validate.DateInput(
    date?.value
  );

  const { selectValue, selectIsValid, selectErrorMessage } =
    validate.SelectInput(category?.value, 'Category');

  const { radioValue, radioIsValid, radioErrorMessage } = validate.RadioInputs(
    ebook?.checked,
    printed?.checked
  );

  const { imageValue, imageIsValid, imageErrorMessage } = validate.ImageInput(
    image?.files
  );

  const { checkboxValue, checkboxIsValid, checkboxErrorMessage } =
    validate.CheckboxInput(agreement?.checked);

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
