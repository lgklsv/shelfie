import React from 'react';
import StyledInput from '../StyledInput/StyledInput';
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
                placeholder="Date"
              />
              <select name="category" id="category">
                <option value="Application software">
                  Application software
                </option>
              </select>
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
