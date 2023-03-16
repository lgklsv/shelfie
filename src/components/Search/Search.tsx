import React from 'react';

import ClearSearchIcon from '../../assets/icons/ClearSearchIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import styles from './Search.module.scss';

type SearchState = {
  value: string;
};

class Search extends React.Component {
  readonly state: Readonly<SearchState> = {
    value: '',
  };

  componentDidMount() {
    const savedSearch = localStorage.getItem('search');
    this.setState(() => ({
      value: savedSearch || '',
    }));
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.value);
  }

  saveValueHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const useInputValue = e.target.value;
    this.setState(() => ({
      value: useInputValue,
    }));
  }

  clearSearchHandler() {
    this.setState(() => ({
      value: '',
    }));
  }

  render() {
    return (
      <div className={styles.search}>
        <div className={styles.search__icon}>
          <SearchIcon />
        </div>
        <input
          value={this.state.value}
          className={styles.search__input}
          placeholder="Search..."
          onChange={this.saveValueHandler.bind(this)}
        />
        {this.state.value && (
          <div
            onClick={this.clearSearchHandler.bind(this)}
            className={styles.search__clear}
          >
            <ClearSearchIcon />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
