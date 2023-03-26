import React from 'react';
import styles from './RadioInput.module.scss';

type RadioInputProps = {
  innerRef: React.RefObject<HTMLInputElement>;
  name: string;
  id: string;
  text: string;
};

class RadioInput extends React.Component<RadioInputProps> {
  constructor(props: RadioInputProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.radio}>
        <input
          data-testid="radio-input"
          ref={this.props.innerRef}
          value={this.props.id}
          type="radio"
          name={this.props.name}
          id={this.props.id}
          className={styles.radio__input}
        />
        <label htmlFor={this.props.id} className={styles.radio__label}>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default RadioInput;
