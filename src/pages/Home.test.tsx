import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import appTitle from '../const/app-title';

describe('Home', () => {
  it('should set document tab title', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home title={`Home | ${appTitle}`} />
      </MemoryRouter>
    );
    expect(document.title).toBe('Home | Shelfie');
  });
});
