import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import { fakeApi } from 'shared/api';

expect.extend(matchers);

beforeAll(() =>
  fakeApi.server.listen({
    onUnhandledRequest: 'error',
  })
);

afterEach(() => fakeApi.server.resetHandlers());

afterAll(() => fakeApi.server.close());
