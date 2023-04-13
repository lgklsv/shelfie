import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { store } from 'app/store';
import Search from './Search';

describe('searchbar', () => {
  it('should change search input value on user input', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    const testValue = 'some input';

    fireEvent.change(searchInput, { target: { value: testValue } });
    expect(searchInput.value).toBe(testValue);
  });
  it('should not show clear btn if input is empty', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const clearIcon = screen.queryByTestId('clear-btn');

    expect(clearIcon).not.toBeInTheDocument();
  });
  it('should clear search input on clicking cross btn and hide clear btn', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    const testValue = 'some input';

    fireEvent.change(searchInput, { target: { value: testValue } });
    const clearIcon = screen.getByTestId('clear-btn');

    fireEvent.click(clearIcon);
    expect(searchInput.value).toBe('');
    expect(clearIcon).not.toBeInTheDocument();
  });
});
