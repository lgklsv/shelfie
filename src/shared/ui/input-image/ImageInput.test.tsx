import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImageInput from './ImageInput';

describe('Image input', () => {
  const mockRegister = vi.fn();
  it('should have image input parts', () => {
    render(
      <ImageInput
        register={mockRegister}
        name="image"
        id="image"
        text="Choose image"
        message="Custom image error"
      />
    );
    const imageInput = screen.getByTestId('img-input');
    expect(screen.getByLabelText(/Custom image error/i)).toBeInTheDocument();
    expect(imageInput).toHaveAttribute('id');
    expect(imageInput).toHaveAttribute('accept');
    expect(imageInput.getAttribute('accept')).toBe('image/*');
  });
  it('should not render error message if its empty', () => {
    render(
      <ImageInput
        register={mockRegister}
        name="image"
        id="image"
        text="Choose image"
        message=""
      />
    );
    expect(screen.getByLabelText(/Choose image/i)).toBeInTheDocument();
  });
});
