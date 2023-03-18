import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import appTitle from '../const/app-title';
import About from './About';

describe('About', () => {
  it('should set document tab title', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <About title={`About Us | ${appTitle}`} />
      </MemoryRouter>
    );
    expect(document.title).toBe('About Us | Shelfie');
  });
});
