import { rest } from 'msw';

import { BASE_URL } from 'app/config';
import { BOOK_FULL, RES_BOOK, RES_BOOK_LIST } from './books';

export const handlers = [
  rest.get(`${BASE_URL}/volumes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(RES_BOOK_LIST));
  }),

  rest.get(`${BASE_URL}/volumes/HAKdjwEACAAJ`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(RES_BOOK));
  }),

  rest.get(`${BASE_URL}/volumes/xEApjgEACAAJ`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(BOOK_FULL));
  }),
];
