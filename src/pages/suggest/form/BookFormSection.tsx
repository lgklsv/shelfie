import React from 'react';

import {
  CheckboxInput,
  ImageInput,
  RadioInput,
  SelectInput,
  TextLikeInput,
  PopupNotification,
} from 'shared/ui';
import { bookCategories } from 'shared/model/book-categories';
import { validateBookForm } from './handlers/validateBookForm';
import styles from './BookFormSection.module.scss';

type PopupState = {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
};

type BooksFromProps = {
  addBook: (book: SuggestedBook) => void;
};

const BookFormSection: React.FC<BooksFromProps> = ({ addBook }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const titleInputRef = React.useRef<HTMLInputElement>(null);
  const authorInputRef = React.useRef<HTMLInputElement>(null);
  const dateInputRef = React.useRef<HTMLInputElement>(null);
  const categoryInputRef = React.useRef<HTMLSelectElement>(null);
  const typeEBookInputRef = React.useRef<HTMLInputElement>(null);
  const typePrintedInputRef = React.useRef<HTMLInputElement>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const agreementInputRef = React.useRef<HTMLInputElement>(null);

  const [formState, setFormState] = React.useState({
    titleMessage: '',
    authorMessage: '',
    dateMessage: '',
    selectMessage: '',
    radioMessage: '',
    imageMessage: '',
    checkboxMessage: '',
  });
  const [popupState, setPopupState] = React.useState<PopupState>({
    isVisible: false,
    type: 'error',
    message: '',
  });

  const handlePopUpunmount = () => {
    setPopupState({
      isVisible: false,
      type: 'error',
      message: 'Error',
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current;
    const enteredAuthor = authorInputRef.current;
    const enteredDate = dateInputRef.current;
    const enteredCategory = categoryInputRef.current;
    const enteredTypeEbook = typeEBookInputRef.current;
    const enteredTypePrited = typePrintedInputRef.current;
    const enteredImage = imageInputRef.current;
    const enteredAgreement = agreementInputRef.current;

    const { isValid, report } = validateBookForm(
      enteredTitle,
      enteredAuthor,
      enteredDate,
      enteredCategory,
      enteredTypeEbook,
      enteredTypePrited,
      enteredImage,
      enteredAgreement
    );

    const newBook: SuggestedBook = {
      id: new Date().getTime().toString(),
      title: report.title.value,
      authors: [report.author.value],
      publishedDate: report.date.value,
      isEbook: report.radio.value,
      categories: [report.select.value],
      imageLinks: {
        thumbnail: report.image.value,
      },
    };

    setFormState({
      titleMessage: report.title.message,
      authorMessage: report.author.message,
      dateMessage: report.date.message,
      selectMessage: report.select.message,
      radioMessage: report.radio.message,
      imageMessage: report.image.message,
      checkboxMessage: report.checkbox.message,
    });

    if (!isValid) {
      setPopupState({
        isVisible: true,
        type: 'error',
        message: 'All form fields are required !',
      });
      return;
    }

    formRef.current?.reset();
    addBook(newBook);

    setPopupState({
      isVisible: true,
      type: 'success',
      message: 'Your suggestion successfully added! 🎉',
    });
  };

  return (
    <section className="container">
      <div className={styles.form_container}>
        <form
          ref={formRef}
          onSubmit={submitHandler}
          className={`${styles.form} container_sm`}
          noValidate
        >
          <h3 className={styles.form__title}>Book details</h3>
          <TextLikeInput
            innerRef={titleInputRef}
            type="text"
            name="title"
            id="title"
            message={formState.titleMessage}
            placeholder="Title"
          />
          <TextLikeInput
            innerRef={authorInputRef}
            type="text"
            name="author"
            id="author"
            message={formState.authorMessage}
            placeholder="Author"
          />
          <div className={styles.form__split}>
            <TextLikeInput
              innerRef={dateInputRef}
              type="date"
              name="published"
              id="published"
              message={formState.dateMessage}
              placeholder="Published date"
            />
            <SelectInput
              innerRef={categoryInputRef}
              name="category"
              id="category"
              defaultText="Choose category"
              message={formState.selectMessage}
              options={bookCategories}
            />
          </div>
          <div className={styles.form__split_half}>
            <div className={styles.form__radio}>
              <div className={styles.form__radio__group}>
                <RadioInput
                  innerRef={typeEBookInputRef}
                  name="book-type"
                  id="e-book"
                  text="eBook"
                />
                <RadioInput
                  innerRef={typePrintedInputRef}
                  name="book-type"
                  id="print"
                  text="Printed Book"
                />
              </div>
              <span className={styles.error__message}>
                {formState.radioMessage}
              </span>
            </div>
            <ImageInput
              innerRef={imageInputRef}
              name="image"
              id="image"
              text="Choose image"
              message={formState.imageMessage}
            />
          </div>
          <div className={styles.form__checkboxarea}>
            <CheckboxInput
              innerRef={agreementInputRef}
              name="agreement"
              id="agreement"
              text="I have read and agree to the Terms of Service"
              message={formState.checkboxMessage}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-primary ${styles.form__btn}`}
          >
            Submit
          </button>
        </form>
      </div>
      {popupState.isVisible && (
        <PopupNotification
          type={popupState.type}
          message={popupState.message}
          unmountMe={handlePopUpunmount}
        />
      )}
    </section>
  );
};

export default BookFormSection;
