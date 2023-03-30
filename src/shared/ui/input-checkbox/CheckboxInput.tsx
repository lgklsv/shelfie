/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './CheckboxInput.module.scss';

type CheckboxInputProps = {
  register: UseFormRegister<FormInputs>;
  name: AvailableNames;
  id: string;
  text: string;
  message: string | undefined;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  register,
  name,
  id,
  text,
  message,
}) => {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkbox__input}
        type="checkbox"
        id={id}
        {...register(name)}
      />
      <label className={styles.checkbox__label} htmlFor={id}>
        {text}
      </label>
      <span className={styles.error__message}>{message}</span>
    </div>
  );
};

export default CheckboxInput;
