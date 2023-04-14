import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import BookCardModal from './BookCardModal';

describe('BookCardModal', () => {
  it('should have img', async () => {
    render(
      <Provider store={store}>
        <BookCardModal id="HAKdjwEACAAJ" />
      </Provider>
    );
    expect(await screen.findByTestId('image')).toBeVisible();
  });
  it('should render subtitle', async () => {
    render(
      <Provider store={store}>
        <BookCardModal id="HAKdjwEACAAJ" />
      </Provider>
    );
    expect(await screen.findByRole('heading', { level: 5 })).toHaveTextContent(
      'Painless web apps with React, JSX, Redux, and GraphQL'
    );
  });
  it('should render empty message if there is no data', async () => {
    render(
      <Provider store={store}>
        <BookCardModal id="empty" />
      </Provider>
    );
    expect(await screen.findByText(/Nothing was found/i)).toBeInTheDocument();
  });
  it('should render error message if bad request or server error', async () => {
    render(
      <Provider store={store}>
        <BookCardModal id="error" />
      </Provider>
    );
    expect(
      await screen.findByText(/Something went wrong/i)
    ).toBeInTheDocument();
  });
});
