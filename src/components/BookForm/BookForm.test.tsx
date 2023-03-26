import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BookForm from './BookForm';

describe('Book form', () => {
  const mockAddBookFn = vi.fn();
  it('should show error messages if from is not filled in', () => {
    render(<BookForm addBook={mockAddBookFn} />);

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);
    expect(screen.getByText(/Title should not be empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Author should not be empty/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Published date should not be empty/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Type should be choosen/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Category should be selected/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Terms should be accepted to submit the form/i)
    ).toBeInTheDocument();
  });
  it('should send data to render if form validation is successfully passed', async () => {
    render(<BookForm addBook={mockAddBookFn} />);

    const submitBtn = screen.getByRole('button');
    const mockImg = new File(['image'], 'test.png', { type: 'image/png' });
    window.URL.createObjectURL = vi.fn(
      (file) => (file instanceof File && file.name) || ''
    );

    const titleInput = screen.getByPlaceholderText(/title/i);
    const authorInput = screen.getByPlaceholderText(/author/i);
    const publishedInput = screen.getByPlaceholderText(/published/i);
    const categoryInput = screen.getByTestId('select-input');
    const inputImage = screen.getByLabelText(/Choose image/i, {
      selector: 'input',
    }) as HTMLInputElement;
    const ebookRadioInput = screen.getAllByTestId('radio-input')[0];
    const ageementCheckbox = screen.getByRole('checkbox');

    fireEvent.change(titleInput, { target: { value: 'The best new book' } });
    fireEvent.change(authorInput, { target: { value: 'Artemij Fedosejev' } });
    fireEvent.change(publishedInput, {
      target: { value: '1999-01-04' },
    });
    fireEvent.change(categoryInput, { target: { value: 'b3' } });
    fireEvent.click(ebookRadioInput);
    fireEvent.click(ageementCheckbox);

    await userEvent.upload(inputImage, mockImg);

    fireEvent.click(submitBtn);

    expect(inputImage.files).toHaveLength(1);

    expect(mockAddBookFn).toHaveBeenCalledWith({
      id: expect.any(String),
      title: 'The best new book',
      authors: ['Artemij Fedosejev'],
      publishedDate: '1999-01-04',
      isEbook: true,
      categories: ['b3'],
      imageLinks: {
        thumbnail: 'test.png',
      },
    });
  });
});
