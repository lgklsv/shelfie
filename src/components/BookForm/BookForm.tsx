import React from 'react';

import { bookCategories } from '../../const/book-categories';
import CheckBoxInput from '../UI/CheckboxInput/CheckBoxInput';
import ImageInput from '../UI/ImageInput/ImageInput';
import RadioInput from '../UI/RadioInput/RadioInput';
import SelectInput from '../UI/SelectInput/SelectInput';
import StyledInput from '../UI/StyledInput/StyledInput';
import styles from './BookForm.module.scss';
import { clearForm } from './handlers/clearForm';
import { validateBookForm } from './handlers/validateBookForm';

type BookFormState = {
  [key: string]: string;
};

class BookForm extends React.Component<BookFormState> {
  readonly state: Readonly<BookFormState> = {
    titleMessage: '',
    authorMessage: '',
    dateMessage: '',
  };

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
    const { isValid, inputs } = validateBookForm(
      enteredTitle,
      enteredAuthor,
      enteredDate,
      enteredCategory,
      enteredTypeEbook,
      enteredTypePrited,
      enteredImage,
      enteredAgreement
    );

    this.setState(() => ({
      titleMessage: inputs.title.message,
      authorMessage: inputs.author.message,
      dateMessage: inputs.date.message,
    }));

    console.log(isValid, inputs);
    if (!isValid) {
      return;
    }

    clearForm(
      enteredTitle,
      enteredAuthor,
      enteredDate,
      enteredCategory,
      enteredTypeEbook,
      enteredTypePrited,
      enteredImage,
      enteredAgreement
    );
    // Render card
  }

  render() {
    return (
      <section className="container">
        <div className={styles.form_container}>
          <form
            onSubmit={this.submitHandler.bind(this)}
            className={`${styles.form} container_sm`}
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
                options={bookCategories}
              />
            </div>
            <div className={styles.form__split}>
              <div className={styles.form__radio}>
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
              <ImageInput
                innerRef={this.imageInputRef}
                name="image"
                id="image"
                text="Choose image"
              />
            </div>
            <div className={styles.form__checkboxarea}>
              <CheckBoxInput
                innerRef={this.agreementInputRef}
                name="agreement"
                id="agreement"
                text="Notify me when the book is available"
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
