import React, { HTMLInputTypeAttribute } from 'react';
import styles from './TextLikeInput.module.scss';

type TextLikeInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  message: string;
  placeholder: string;
};

class TextLikeInput extends React.Component<TextLikeInputProps> {
  constructor(props: TextLikeInputProps) {
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
          placeholder={this.props.id}
        />
        <span className={styles.placeholder}>{this.props.placeholder}</span>
        <span className={styles.error__message}>{this.props.message}</span>
      </label>
    );
  }
}

export default TextLikeInput;
