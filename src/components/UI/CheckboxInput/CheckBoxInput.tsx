import React from 'react';
import styles from './CheckboxInput.module.scss';

type CheckBoxInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  id: string;
  name: string;
  text: string;
  message: string;
};

class CheckBoxInput extends React.Component<CheckBoxInputProps> {
  constructor(props: CheckBoxInputProps) {
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

export default CheckBoxInput;
