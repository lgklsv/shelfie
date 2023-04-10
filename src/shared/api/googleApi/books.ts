import { API_KEY } from 'app/config';
import { AxiosPromise } from 'axios';
import { apiInstance } from './base';

export const getSearchBooks = (
  searchValue: string
): AxiosPromise<SearchBookListRes> => {
  return apiInstance.get(`/volumes?q=${searchValue}&key=${API_KEY}`);
};

export const getBookById = (id: string): AxiosPromise<Book> => {
  return apiInstance.get(`/volumes/${id}?key=${API_KEY}`);
};
