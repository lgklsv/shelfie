import React from 'react';

import styles from './SelectInput.module.scss';

type SelectInputProps = {
  innerRef: React.RefObject<HTMLSelectElement>;
  name: string;
  id: string;
  defaultText: string;
  message: string;
  options: {
    value: string;
    text: string;
  }[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  innerRef,
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
        ref={innerRef}
        className={styles.select}
        name={name}
        id={id}
        defaultValue="DEFAULT"
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
