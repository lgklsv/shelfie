import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import appTitle from '../const/app-title';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should set document tab title', () => {
    render(
      <MemoryRouter initialEntries={['/wiurywei7rywiq7ert']}>
        <NotFound title={`404 | ${appTitle}`} />
      </MemoryRouter>
    );
    expect(document.title).toBe('404 | Shelfie');
  });
});
