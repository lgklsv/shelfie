import React from 'react';

import styles from './CheckboxInput.module.scss';

type CheckboxInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  id: string;
  name: string;
  text: string;
  message: string;
};

class CheckboxInput extends React.Component<CheckboxInputProps> {
  constructor(props: CheckboxInputProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.checkbox}>
        <input
          ref={this.props.innerRef}
          className={styles.checkbox__input}
          type="checkbox"
          id={this.props.id}
          name={this.props.name}
        />
        <label className={styles.checkbox__label} htmlFor={this.props.id}>
          {this.props.text}
        </label>
        <span className={styles.error__message}>{this.props.message}</span>
      </div>
    );
  }
}

export default CheckboxInput;
