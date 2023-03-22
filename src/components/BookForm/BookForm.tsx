import React from 'react';
import { bookCategories } from '../../const/book-categories';
import RadioInput from '../UI/RadioInput/RadioInput';
import SelectInput from '../UI/SelectInput/SelectInput';
import StyledInput from '../UI/StyledInput/StyledInput';
import styles from './BookForm.module.scss';

class BookForm extends React.Component {
  render() {
    return (
      <section className="container">
        <div className={styles.form_container}>
          <form className={`${styles.form} container_sm`}>
            <h3 className={styles.form__title}>Book details</h3>
            <StyledInput
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
            <StyledInput
              type="text"
              name="author"
              id="author"
              placeholder="Authors"
            />
            <div className={styles.form__split}>
              <StyledInput
                type="date"
                name="published"
                id="published"
                placeholder="Published date"
              />
              <SelectInput
                name="category"
                id="category"
                defaultText="Choose category"
                options={bookCategories}
              />
            </div>
            <div className={styles.form__split}>
              <div>
                <RadioInput name="book-type" id="e-book" text="eBook" />
                <RadioInput name="book-type" id="print" text="Printed Book" />
              </div>
              {/* <input type="file" name="" id="" /> */}
            </div>
            {/* <input type="checkbox" name="" id="" /> */}
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
