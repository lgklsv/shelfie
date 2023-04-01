import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RadioInput from './RadioInput';

describe('Radio input', () => {
  const mockRegister = vi.fn();
  it('should have radio input parts', () => {
    render(
      <RadioInput
        register={mockRegister}
        name="type"
        id="ebook"
        text="e-book"
      />
    );
    expect(screen.getByLabelText(/e-book/i)).toBeInTheDocument();
    expect(screen.getByRole('radio')).toHaveAttribute('id');
  });
});
