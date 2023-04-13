import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { store } from 'app/store';
import Welcome from './WelcomeSection';

describe('Welcome section', () => {
  it('should have search input element', () => {
    render(
      <Provider store={store}>
        <Welcome />
      </Provider>
    );
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
});
