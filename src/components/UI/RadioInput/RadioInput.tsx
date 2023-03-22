import React from 'react';
import styles from './RadioInput.module.scss';

type RadioInputProps = {
  name: string;
  id: string;
  text: string;
};

class RadioInput extends React.Component<RadioInputProps> {
  render() {
    return (
      <div className={styles.radio}>
        <input
          type="radio"
          name={this.props.name}
          id={this.props.id}
          className={styles.radio__input}
        />
        <label htmlFor={this.props.id} className={styles.radio__label}>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default RadioInput;
