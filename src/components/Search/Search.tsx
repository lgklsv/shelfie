import React from 'react';

import ClearSearchIcon from '../../assets/icons/ClearSearchIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import styles from './Search.module.scss';

class Search extends React.Component {
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.search__icon}>
          <SearchIcon />
        </div>
        <input className={styles.search__input} placeholder="Search..." />
        <div className={styles.search__clear}>
          <ClearSearchIcon />
        </div>
      </div>
    );
  }
}

export default Search;
