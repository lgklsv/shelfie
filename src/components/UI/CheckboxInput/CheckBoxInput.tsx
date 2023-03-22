import React from 'react';
import styles from './CheckboxInput.module.scss';

type CheckBoxInputProps = {
  id: string;
  name: string;
  text: string;
};

class CheckBoxInput extends React.Component<CheckBoxInputProps> {
  render() {
    return (
      <div className={styles.checkbox}>
        <input
          className={styles.checkbox__input}
          type="checkbox"
          id={this.props.id}
          name={this.props.name}
        />
        <label className={styles.checkbox__label} htmlFor={this.props.id}>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default CheckBoxInput;
