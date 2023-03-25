import React from 'react';
import styles from './ImageInput.module.scss';

type ImageInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  id: string;
  name: string;
  text: string;
  message: string;
};

class ImageInput extends React.Component<ImageInputProps> {
  constructor(props: ImageInputProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.image}>
        <input
          ref={this.props.innerRef}
          className={styles.image__input}
          type="file"
          accept="image/*"
          name={this.props.name}
          id={this.props.id}
          required
        />
        <label
          className={`${
            this.props.message
              ? `${styles.image__label} ${styles.error__message}`
              : styles.image__label
          }`}
          htmlFor={this.props.id}
        >
          {this.props.message ? this.props.message : this.props.text}
        </label>
      </div>
    );
  }
}

export default ImageInput;
