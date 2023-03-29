import React from 'react';
import styles from './RadioInput.module.scss';

type RadioInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  name: string;
  id: string;
  text: string;
};

const RadioInput: React.FC<RadioInputProps> = ({
  innerRef,
  name,
  id,
  text,
}) => {
  return (
    <div className={styles.radio}>
      <input
        data-testid="radio-input"
        ref={innerRef}
        value={id}
        type="radio"
        name={name}
        id={id}
        className={styles.radio__input}
      />
      <label htmlFor={id} className={styles.radio__label}>
        {text}
      </label>
    </div>
  );
};

export default RadioInput;
