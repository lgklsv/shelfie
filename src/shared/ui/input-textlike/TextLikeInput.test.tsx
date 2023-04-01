import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextLikeInput from './TextLikeInput';

describe('Styled input', () => {
  const mockRegister = vi.fn();
  it('should have custom placeholder and error message', () => {
    render(
      <TextLikeInput
        register={mockRegister}
        type="text"
        name="title"
        id="title"
        message="Custom error"
        placeholder="Title"
      />
    );
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Custom error/i)).toBeInTheDocument();
  });
  it('should have input element setup', () => {
    render(
      <TextLikeInput
        register={mockRegister}
        type="text"
        name="title"
        id="title"
        message="Custom error"
        placeholder="Title"
      />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder');
  });
});
