import React from 'react';
import styles from './ImageInput.module.scss';

type ImageInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  id: string;
  name: string;
  text: string;
  message: string;
};

const ImageInput: React.FC<ImageInputProps> = ({
  innerRef,
  name,
  id,
  text,
  message,
}) => {
  return (
    <div className={styles.image}>
      <input
        data-testid="img-input"
        ref={innerRef}
        className={styles.image__input}
        type="file"
        accept="image/*"
        name={name}
        id={id}
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
