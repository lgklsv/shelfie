/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from './TextLikeInput.module.scss';

type TextLikeInputProps = {
  register: UseFormRegister<FormInputs>;
  type: HTMLInputTypeAttribute;
  name: AvailableNames;
  id: string;
  message: string | undefined;
  placeholder: string;
};

const TextLikeInput: React.FC<TextLikeInputProps> = ({
  register,
  type,
  name,
  id,
  message,
  placeholder,
}) => {
  return (
    <label className={styles.input} htmlFor={id}>
      <input type={type} id={id} placeholder={id} {...register(name)} />
      <span className={styles.placeholder}>{placeholder}</span>
      <span className={styles.error__message}>{message}</span>
    </label>
  );
};

export default TextLikeInput;
