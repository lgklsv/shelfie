/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from './ImageInput.module.scss';

type ImageInputProps = {
  register: UseFormRegister<FormInputs>;
  id: string;
  name: AvailableNames;
  text: string;
  message: string | undefined;
};

const ImageInput: React.FC<ImageInputProps> = ({
  register,
  name,
  id,
  text,
  message,
}) => {
  return (
    <div className={styles.image}>
      <input
        data-testid="img-input"
        className={styles.image__input}
        type="file"
        accept="image/*"
        id={id}
        {...register(name)}
        required
      />
      <label
        className={`${
          message
            ? `${styles.image__label} ${styles.error__message}`
            : styles.image__label
        }`}
        htmlFor={id}
      >
        {message || text}
      </label>
    </div>
  );
};

export default ImageInput;
