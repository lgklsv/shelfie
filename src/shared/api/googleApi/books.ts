import { API_KEY, BASE_URL } from 'app/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const books = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSearchBooks: builder.query({
      query: (searchValue) => `/volumes?q=${searchValue}&key=${API_KEY}`,
    }),
    getBookById: builder.query({
      query: (id) => `/volumes/${id}?key=${API_KEY}`,
    }),
  }),
});

export const { useGetSearchBooksQuery, useGetBookByIdQuery } = books;
