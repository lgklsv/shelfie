import React from 'react';

export const SearchContext = React.createContext<SearchContextObj>({
  value: localStorage.getItem('search') || '',
  saveValue: () => {},
});

const SearchContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [value, setValue] = React.useState(
    localStorage.getItem('search') || ''
  );

  const saveValue = (enteredValue: string) => {
    setValue(enteredValue);
  };

  const contextValue: SearchContextObj = React.useMemo(
    () => ({
      value,
      saveValue,
    }),
    [value]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
