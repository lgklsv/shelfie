import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import ArrowIcon from './assets/Arrow.icon';
import ClearSearchIcon from './assets/ClearSearch.icon';
import SearchIcon from './assets/Search.icon';
import { selectSearch, setSearchValue } from '../model';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectSearch);
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    setValue(searchValue || '');
  }, [searchValue]);

  const saveValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const clearSearchHandler = () => {
    setValue('');
    dispatch(setSearchValue(''));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = searchRef.current ? searchRef.current.value : '';
    dispatch(setSearchValue(inputValue));
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__icon}>
        <SearchIcon />
      </div>
      <form onSubmit={submitHandler} className={styles.search__form}>
        <input
          ref={searchRef}
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
