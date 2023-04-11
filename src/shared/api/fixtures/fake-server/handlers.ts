import { rest } from 'msw';

import { BASE_URL } from 'app/config';
import { fakeApi } from 'shared/api';

export const handlers = [
  rest.get(`${BASE_URL}/volumes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeApi.books.RES_BOOK_LIST));
  }),

  rest.get(`${BASE_URL}/volumes/HAKdjwEACAAJ`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeApi.books.RES_BOOK));
  }),

  rest.get(`${BASE_URL}/volumes/xEApjgEACAAJ`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeApi.books.BOOK_FULL));
  }),

  rest.get(`${BASE_URL}/volumes/empty`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(''));
  }),

  rest.get(`${BASE_URL}/volumes/error`, (req, res, ctx) => {
    return res(ctx.status(404), ctx.json('Something went wrong'));
  }),
];
