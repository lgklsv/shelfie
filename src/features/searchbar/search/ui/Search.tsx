import React from 'react';
import cn from 'classnames';

import ArrowIcon from './assets/Arrow.icon';
import ClearSearchIcon from './assets/ClearSearch.icon';
import SearchIcon from './assets/Search.icon';
import { SearchContext } from '../model/search-context';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const searchCtx = React.useContext(SearchContext);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const savedSearch = localStorage.getItem('search');
    setValue(savedSearch || '');
  }, []);

  const saveValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const clearSearchHandler = () => {
    setValue('');
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    searchCtx.saveValue(value);
    localStorage.setItem('search', value);
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__icon}>
        <SearchIcon />
      </div>
      <form onSubmit={submitHandler} className={styles.search__form}>
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
        <button
          className={cn('btn', 'btn-primary', styles.search__btn)}
          type="submit"
        >
          <ArrowIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
