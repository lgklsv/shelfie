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

class SelectInput extends React.Component<SelectInputProps> {
  constructor(props: SelectInputProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.select_wrapper}>
        <select
          data-testid="select-input"
          ref={this.props.innerRef}
          className={styles.select}
          name={this.props.name}
          id={this.props.id}
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled hidden>
            {this.props.defaultText}
          </option>
          {this.props.options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        <span className={styles.error__message}>{this.props.message}</span>
      </div>
    );
  }
}

export default SelectInput;
