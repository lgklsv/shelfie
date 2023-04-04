import { API_KEY } from 'app/config';
import { AxiosPromise } from 'axios';
import { apiInstance } from './base';

export const getSearchBooks = (
  searchValue: string
): AxiosPromise<SeachBookListRes> => {
  return apiInstance.get(`/volumes?q=${searchValue}&key=${API_KEY}`);
};
