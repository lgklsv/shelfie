import React from 'react';

import {
  CheckboxInput,
  ImageInput,
  RadioInput,
  SelectInput,
  TextLikeInput,
  PopupNotification,
} from 'shared/ui';
import { bookCategories } from '../../const/book-categories';
import { validateBookForm } from './handlers/validateBookForm';
import styles from './BookForm.module.scss';

class BookForm extends React.Component<BooksFromProps, BookFormState> {
  private formRef = React.createRef<HTMLFormElement>();
  private titleInputRef = React.createRef<HTMLInputElement>();
  private authorInputRef = React.createRef<HTMLInputElement>();
  private dateInputRef = React.createRef<HTMLInputElement>();
  private categoryInputRef = React.createRef<HTMLSelectElement>();
  private typeEBookInputRef = React.createRef<HTMLInputElement>();
  private typePrintedInputRef = React.createRef<HTMLInputElement>();
  private imageInputRef = React.createRef<HTMLInputElement>();
  private agreementInputRef = React.createRef<HTMLInputElement>();
  constructor(props: BooksFromProps) {
    super(props);
    this.state = {
      titleMessage: '',
      authorMessage: '',
      dateMessage: '',
      selectMessage: '',
      radioMessage: '',
      imageMessage: '',
      checkboxMessage: '',
      popup: {
        isVisible: false,
        type: 'error',
        message: '',
      },
    };

    this.handlePopUpunmount = this.handlePopUpunmount.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handlePopUpunmount() {
    this.setState(() => ({
      popup: {
        isVisible: false,
        type: 'error',
        message: 'Error',
      },
    }));
  }

  submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredTitle = this.titleInputRef.current;
    const enteredAuthor = this.authorInputRef.current;
    const enteredDate = this.dateInputRef.current;
    const enteredCategory = this.categoryInputRef.current;
    const enteredTypeEbook = this.typeEBookInputRef.current;
    const enteredTypePrited = this.typePrintedInputRef.current;
    const enteredImage = this.imageInputRef.current;
    const enteredAgreement = this.agreementInputRef.current;

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

    this.setState(() => ({
      titleMessage: report.title.message,
      authorMessage: report.author.message,
      dateMessage: report.date.message,
      selectMessage: report.select.message,
      radioMessage: report.radio.message,
      imageMessage: report.image.message,
      checkboxMessage: report.checkbox.message,
    }));

    if (!isValid) {
      this.setState(() => ({
        popup: {
          isVisible: true,
          type: 'error',
          message: 'All form fields are required !',
        },
      }));
      return;
    }

    this.formRef.current?.reset();
    this.props.addBook(newBook);

    this.setState(() => ({
      popup: {
        isVisible: true,
        type: 'success',
        message: 'Your suggestion successfully added! 🎉',
      },
    }));
  }

  render() {
    return (
      <section className="container">
        <div className={styles.form_container}>
          <form
            ref={this.formRef}
            onSubmit={this.submitHandler}
            className={`${styles.form} container_sm`}
            noValidate
          >
            <h3 className={styles.form__title}>Book details</h3>
            <TextLikeInput
              innerRef={this.titleInputRef}
              type="text"
              name="title"
              id="title"
              message={this.state.titleMessage}
              placeholder="Title"
            />
            <TextLikeInput
              innerRef={this.authorInputRef}
              type="text"
              name="author"
              id="author"
              message={this.state.authorMessage}
              placeholder="Author"
            />
            <div className={styles.form__split}>
              <TextLikeInput
                innerRef={this.dateInputRef}
                type="date"
                name="published"
                id="published"
                message={this.state.dateMessage}
                placeholder="Published date"
              />
              <SelectInput
                innerRef={this.categoryInputRef}
                name="category"
                id="category"
                defaultText="Choose category"
                message={this.state.selectMessage}
                options={bookCategories}
              />
            </div>
            <div className={styles.form__split_half}>
              <div className={styles.form__radio}>
                <div className={styles.form__radio__group}>
                  <RadioInput
                    innerRef={this.typeEBookInputRef}
                    name="book-type"
                    id="e-book"
                    text="eBook"
                  />
                  <RadioInput
                    innerRef={this.typePrintedInputRef}
                    name="book-type"
                    id="print"
                    text="Printed Book"
                  />
                </div>
                <span className={styles.error__message}>
                  {this.state.radioMessage}
                </span>
              </div>
              <ImageInput
                innerRef={this.imageInputRef}
                name="image"
                id="image"
                text="Choose image"
                message={this.state.imageMessage}
              />
            </div>
            <div className={styles.form__checkboxarea}>
              <CheckboxInput
                innerRef={this.agreementInputRef}
                name="agreement"
                id="agreement"
                text="I have read and agree to the Terms of Service"
                message={this.state.checkboxMessage}
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
        {this.state.popup.isVisible && (
          <PopupNotification
            type={this.state.popup.type}
            message={this.state.popup.message}
            unmountMe={this.handlePopUpunmount}
          />
        )}
      </section>
    );
  }
}

export default BookForm;
