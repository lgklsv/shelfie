import React from 'react';

import styles from './SelectInput.module.scss';

type SelectInputProps = {
  name: string;
  id: string;
  options: {
    value: string;
    text: string;
  }[];
};

class SelectInput extends React.Component<SelectInputProps> {
  render() {
    return (
      <div className={styles.select_wrapper}>
        <select
          className={styles.select}
          name={this.props.name}
          id={this.props.id}
        >
          <option value="" selected disabled hidden>
            Choose category
          </option>
          {this.props.options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectInput;
