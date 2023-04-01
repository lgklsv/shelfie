/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from './RadioInput.module.scss';

type RadioInputProps = {
  register: UseFormRegister<FormInputs>;
  name: AvailableNames;
  id: string;
  text: string;
};

const RadioInput: React.FC<RadioInputProps> = ({
  register,
  name,
  id,
  text,
}) => {
  return (
    <div className={styles.radio}>
      <input
        data-testid="radio-input"
        value={id}
        type="radio"
        id={id}
        className={styles.radio__input}
        {...register(name)}
      />
      <label htmlFor={id} className={styles.radio__label}>
        {text}
      </label>
    </div>
  );
};

export default RadioInput;
