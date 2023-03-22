import React from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './BookForm.module.scss';

class BookForm extends React.Component {
  render() {
    return (
      <section className="container">
        <div className={styles.form_container}>
          <form className={styles.form}>
            <h3 className={styles.form__title}>Book information</h3>
            <TextInput name="title" id="title" placeholder="Title" />
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Authors"
            />
            <input type="date" name="published" id="published" />
            <select name="category" id="category">
              <option value="Application software">Application software</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default BookForm;
