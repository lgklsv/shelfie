import React, { HTMLInputTypeAttribute } from 'react';
import styles from './StyledInput.module.scss';

type StyledInputProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder: string;
};

class StyledInput extends React.Component<StyledInputProps> {
  render() {
    return (
      <label className={styles.input} htmlFor={this.props.id}>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          placeholder=" "
        />
        <span className={styles.placeholder}>{this.props.placeholder}</span>
      </label>
    );
  }
}

export default StyledInput;
