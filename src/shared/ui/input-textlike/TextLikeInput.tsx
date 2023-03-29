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

const TextLikeInput: React.FC<TextLikeInputProps> = ({
  innerRef,
  type,
  name,
  id,
  message,
  placeholder,
}) => {
  return (
    <label className={styles.input} htmlFor={id}>
      <input ref={innerRef} type={type} name={name} id={id} placeholder={id} />
      <span className={styles.placeholder}>{placeholder}</span>
      <span className={styles.error__message}>{message}</span>
    </label>
  );
};

export default TextLikeInput;
