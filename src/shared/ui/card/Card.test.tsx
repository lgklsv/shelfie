import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render provided children inside', () => {
    render(
      <Card type="transparent">
        <div>
          <h1>Some component</h1>
        </div>
      </Card>
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
