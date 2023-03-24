import React from 'react';

import ClearSearchIcon from '../../assets/icons/ClearSearchIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import styles from './Search.module.scss';

type SearchState = {
  value: string;
};

class Search extends React.Component<Record<string, never>, SearchState> {
  constructor(props: never) {
    super(props);
    this.state = {
      value: '',
    };

    this.clearSearchHandler = this.clearSearchHandler.bind(this);
    this.saveValueHandler = this.saveValueHandler.bind(this);
  }

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
    const inputValue = e.target.value;
    this.setState(() => ({
      value: inputValue,
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
          type="search"
          onChange={this.saveValueHandler}
        />
        {this.state.value && (
          <div
            onClick={this.clearSearchHandler}
            className={styles.search__clear}
            data-testid="clear-btn"
          >
            <ClearSearchIcon />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
