import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Search from './Search';

describe('searchbar', () => {
  it('should change search input value on user input', () => {
    render(<Search />);
    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    const testValue = 'some input';

    fireEvent.change(searchInput, { target: { value: testValue } });
    expect(searchInput.value).toBe(testValue);
  });
  it('should not show clear btn if input is empty', () => {
    localStorage.clear();
    render(<Search />);
    const clearIcon = screen.queryByTestId('clear-btn');

    expect(clearIcon).not.toBeInTheDocument();
  });
  it('should clear search input on clicking cross btn and hide clear btn', () => {
    render(<Search />);
    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    const testValue = 'some input';

    fireEvent.change(searchInput, { target: { value: testValue } });
    const clearIcon = screen.getByTestId('clear-btn');

    fireEvent.click(clearIcon);
    expect(searchInput.value).toBe('');
    expect(clearIcon).not.toBeInTheDocument();
  });
  it('should save search value in localstorage on unmount and restore on mount', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Search />
      </MemoryRouter>
    );
    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    const testValue = 'some input';

    fireEvent.change(searchInput, { target: { value: testValue } });

    render(
      <MemoryRouter initialEntries={['/about']}>
        <Search />
      </MemoryRouter>
    );
    render(
      <MemoryRouter initialEntries={['/']}>
        <Search />
      </MemoryRouter>
    );

    expect(searchInput.value).toBe(testValue);
  });
});
