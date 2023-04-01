import React from 'react';

type SuggestBookContextObj = {
  books: SuggestedBook[];
  addBook: (book: SuggestedBook) => void;
};

export const SuggestBookContext = React.createContext<SuggestBookContextObj>({
  books: [],
  addBook: () => {},
});

const SuggestBookContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [books, setBooks] = React.useState<SuggestedBook[]>([]);

  const addBook = (book: SuggestedBook) => {
    setBooks((prev) => [...prev, book]);
  };

  const contextValue: SuggestBookContextObj = React.useMemo(
    () => ({
      books,
      addBook,
    }),
    [books]
  );

  return (
    <SuggestBookContext.Provider value={contextValue}>
      {props.children}
    </SuggestBookContext.Provider>
  );
};

export default SuggestBookContextProvider;
