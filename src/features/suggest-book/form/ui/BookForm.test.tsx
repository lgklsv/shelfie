import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SuggestBookContext } from 'features/suggest-book/suggest';
import BookFormSection from './BookForm';

const mockCtxValue = {
  books: [],
  addBook: vi.fn(),
};

describe('Book form', () => {
  it('should show error messages if from is not filled in', async () => {
    render(
      <SuggestBookContext.Provider value={mockCtxValue}>
        <BookFormSection />
      </SuggestBookContext.Provider>
    );

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);
    const titleError = await screen.findByText(/Title should not be empty/i);
    const authorError = await screen.findByText(/Author should not be empty/i);
    const dateError = await screen.findByText(
      /Published date should not be empty/i
    );
    const typeError = await screen.findByText(/Type should be choosen/i);
    const categoryError = await screen.findByText(
      /Category should be selected/i
    );
    const termsError = await screen.findByText(
      /Terms should be accepted to submit the form/i
    );

    expect(titleError).toBeInTheDocument();
    expect(authorError).toBeInTheDocument();
    expect(dateError).toBeInTheDocument();
    expect(typeError).toBeInTheDocument();
    expect(categoryError).toBeInTheDocument();
    expect(termsError).toBeInTheDocument();
  });
  it('should send data to render if form validation is successfully passed', async () => {
    render(
      <SuggestBookContext.Provider value={mockCtxValue}>
        <BookFormSection />
      </SuggestBookContext.Provider>
    );

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

    await waitFor(() =>
      expect(mockCtxValue.addBook).toHaveBeenCalledWith({
        id: expect.any(String),
        title: 'The best new book',
        authors: ['Artemij Fedosejev'],
        publishedDate: '1999-01-04',
        isEbook: true,
        categories: ['b3'],
        imageLinks: {
          thumbnail: 'test.png',
        },
      })
    );
  });
});
