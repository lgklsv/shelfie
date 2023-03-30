/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './SelectInput.module.scss';

type SelectInputProps = {
  register: UseFormRegister<FormInputs>;
  name: AvailableNames;
  id: string;
  defaultText: string;
  message: string | undefined;
  options: {
    value: string;
    text: string;
  }[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  register,
  name,
  id,
  defaultText,
  message,
  options,
}) => {
  return (
    <div className={styles.select_wrapper}>
      <select
        data-testid="select-input"
        className={styles.select}
        id={id}
        defaultValue="DEFAULT"
        {...register(name)}
      >
        <option value="DEFAULT" disabled hidden>
          {defaultText}
        </option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <span className={styles.error__message}>{message}</span>
    </div>
  );
};

export default SelectInput;
