import React from 'react';

import ClearSearchIcon from './assets/ClearSearch.icon';
import SearchIcon from './assets/Search.icon';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [value, setValue] = React.useState('');
  const searchRef = React.useRef<string>('');

  React.useEffect(() => {
    const savedSearch = localStorage.getItem('search');
    setValue(savedSearch || '');

    return () => {
      localStorage.setItem('search', searchRef.current);
    };
  }, []);

  const saveValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    searchRef.current = inputValue;
  };

  const clearSearchHandler = () => {
    setValue('');
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__icon}>
        <SearchIcon />
      </div>
      <input
        value={value}
        className={styles.search__input}
        placeholder="Search..."
        type="search"
        onChange={saveValueHandler}
      />
      {value && (
        <div
          onClick={clearSearchHandler}
          className={styles.search__clear}
          data-testid="clear-btn"
        >
          <ClearSearchIcon />
        </div>
      )}
    </div>
  );
};

export default Search;
