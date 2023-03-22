import React from 'react';
import styles from './TextInput.module.scss';

type TextInputProps = {
  name: string;
  id: string;
  placeholder: string;
};

class TextInput extends React.Component<TextInputProps> {
  render() {
    return (
      <label className={styles.input} htmlFor={this.props.id}>
        <input
          type="text"
          name={this.props.name}
          id={this.props.id}
          placeholder=" "
        />
        <span className={styles.placeholder}>{this.props.placeholder}</span>
      </label>
    );
  }
}

export default TextInput;
