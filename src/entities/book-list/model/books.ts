import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { googleApi } from 'shared/api';

const BOOK_LIST_QUERY_KEY = 'books';

export const getBookListAsync =
  (searchValue: string) =>
  (setBooks: React.Dispatch<React.SetStateAction<Book[]>>) =>
    useQuery<AxiosResponse<SeachBookListRes>>(
      BOOK_LIST_QUERY_KEY,
      () => googleApi.books.getSearchBooks(searchValue),
      {
        onSuccess: ({ data }) => setBooks(data.items),
        refetchOnWindowFocus: false,
      }
    );
