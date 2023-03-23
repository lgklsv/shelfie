import React, { HTMLInputTypeAttribute } from 'react';
import styles from './StyledInput.module.scss';

type StyledInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder: string;
};

class StyledInput extends React.Component<StyledInputProps> {
  constructor(props: StyledInputProps) {
    super(props);
  }

  render() {
    return (
      <label className={styles.input} htmlFor={this.props.id}>
        <input
          ref={this.props.innerRef}
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
