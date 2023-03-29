import React from 'react';

import styles from './CheckboxInput.module.scss';

type CheckboxInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  id: string;
  name: string;
  text: string;
  message: string;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  innerRef,
  name,
  id,
  text,
  message,
}) => {
  return (
    <div className={styles.checkbox}>
      <input
        ref={innerRef}
        className={styles.checkbox__input}
        type="checkbox"
        id={id}
        name={name}
      />
      <label className={styles.checkbox__label} htmlFor={id}>
        {text}
      </label>
      <span className={styles.error__message}>{message}</span>
    </div>
  );
};

export default CheckboxInput;
