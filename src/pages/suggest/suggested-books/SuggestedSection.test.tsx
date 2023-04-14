import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { store } from 'app/store';
import { suggestedSlice } from 'features/suggest-book/suggest';
import { fakeApi } from 'shared/api';
import SuggestedSection from './SuggestedSection';

describe('SuggestedSection', () => {
  it('should render all suggested books', () => {
    const bookList = fakeApi.suggestedBooks.BOOK_LIST;
    for (let i = 0; i < bookList.length; i += 1) {
      store.dispatch(
        suggestedSlice.saveSuggested(fakeApi.suggestedBooks.BOOK_LIST[i])
      );
    }

    render(
      <Provider store={store}>
        <SuggestedSection />
      </Provider>
    );
    const renderedBooks = screen.getAllByTestId('book-item');

    expect(renderedBooks).toHaveLength(fakeApi.suggestedBooks.BOOK_LIST.length);
  });
});
