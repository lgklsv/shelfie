import React from 'react';

import { bookCategories } from '../../const/book-categories';
import CheckBoxInput from '../UI/CheckboxInput/CheckBoxInput';
import ImageInput from '../UI/ImageInput/ImageInput';
import RadioInput from '../UI/RadioInput/RadioInput';
import SelectInput from '../UI/SelectInput/SelectInput';
import StyledInput from '../UI/StyledInput/StyledInput';
import styles from './BookForm.module.scss';
import { validateBookForm } from './handlers/validateBookForm';

type BookFormState = {
  [key: string]: string;
};

type BooksFromProps = {
  addBook: (book: SuggestedBook) => void;
};

class BookForm extends React.Component<BooksFromProps, BookFormState> {
  readonly state: Readonly<BookFormState> = {
    titleMessage: '',
    authorMessage: '',
    dateMessage: '',
    selectMessage: '',
    radioMessage: '',
    imageMessage: '',
    checkboxMessage: '',
  };

  private formRef = React.createRef<HTMLFormElement>();
  private titleInputRef = React.createRef<HTMLInputElement>();
  private authorInputRef = React.createRef<HTMLInputElement>();
  private dateInputRef = React.createRef<HTMLInputElement>();
  private categoryInputRef = React.createRef<HTMLSelectElement>();
  private typeEBookInputRef = React.createRef<HTMLInputElement>();
  private typePrintedInputRef = React.createRef<HTMLInputElement>();
  private imageInputRef = React.createRef<HTMLInputElement>();
  private agreementInputRef = React.createRef<HTMLInputElement>();

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

    // Validate
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
      return;
    }
    this.formRef.current?.reset();
    this.props.addBook(newBook);
  }

  render() {
    return (
      <section className="container">
        <div className={styles.form_container}>
          <form
            ref={this.formRef}
            onSubmit={this.submitHandler.bind(this)}
            className={`${styles.form} container_sm`}
            noValidate
          >
            <h3 className={styles.form__title}>Book details</h3>
            <StyledInput
              innerRef={this.titleInputRef}
              type="text"
              name="title"
              id="title"
              message={this.state.titleMessage}
              placeholder="Title"
            />
            <StyledInput
              innerRef={this.authorInputRef}
              type="text"
              name="author"
              id="author"
              message={this.state.authorMessage}
              placeholder="Author"
            />
            <div className={styles.form__split}>
              <StyledInput
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
            <div className={styles.form__split}>
              <div className={styles.form__radio}>
                <div>
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
              <CheckBoxInput
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
      </section>
    );
  }
}

export default BookForm;
