import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { googleApi } from 'shared/api';

export const getBookListAsync =
  (searchValue: string) =>
  (setBooks: React.Dispatch<React.SetStateAction<Book[]>>) =>
    useQuery<AxiosResponse<SeachBookListRes>>(
      'bookList',
      () => googleApi.books.getSearchBooks(searchValue),
      {
        onSuccess: ({ data }) => setBooks(data.items || []),
        refetchOnWindowFocus: false,
        retry: false,
      }
    );

export const getBookByIdAsync =
  (id: string) =>
  (setBook: React.Dispatch<React.SetStateAction<Book | undefined>>) =>
    useQuery<AxiosResponse<Book>>(
      'book',
      () => googleApi.books.getBookById(id),
      {
        onSuccess: ({ data }) => setBook(data),
        refetchOnWindowFocus: false,
        retry: false,
      }
    );
