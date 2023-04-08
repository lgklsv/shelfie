import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import BookCardModal from './BookCardModal';

const queryClient = new QueryClient();

describe('BookCardModal', () => {
  it('should have img', async () => {
    render(
      <QueryClientProvider client={queryClient} contextSharing>
        <BookCardModal id="HAKdjwEACAAJ" />
      </QueryClientProvider>
    );
    expect(await screen.findByTestId('image')).toBeVisible();
  });
  it('should render subtitle', async () => {
    render(
      <QueryClientProvider client={queryClient} contextSharing>
        <BookCardModal id="HAKdjwEACAAJ" />
      </QueryClientProvider>
    );
    expect(await screen.findByRole('heading', { level: 5 })).toHaveTextContent(
      'Painless web apps with React, JSX, Redux, and GraphQL'
    );
  });
});
