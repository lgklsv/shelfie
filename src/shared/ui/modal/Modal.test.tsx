import ReactDOM from 'react-dom';
import { ReactPortal } from 'react';

import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  const mockToggle = vi.fn();
  beforeAll(() => {
    ReactDOM.createPortal = (node) => node as ReactPortal;
  });

  it('should render provided children', () => {
    render(
      <Modal toggle={mockToggle}>
        <h1>Some children text</h1>
      </Modal>
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it('should close modal by clicking on cross icon or overlay', () => {
    render(
      <Modal toggle={mockToggle}>
        <h1>Some children text</h1>
      </Modal>
    );
    const closeBtn = screen.getByText('╳');
    const backdrop = screen.getByTestId('backdrop');

    fireEvent.click(closeBtn);
    fireEvent.click(backdrop);

    expect(mockToggle).toBeCalledTimes(2);
  });
  it('should not be visible if state is closed', () => {
    render(
      <Modal toggle={mockToggle}>
        <h1>Some children text</h1>
      </Modal>
    );
    expect(screen.getByRole('heading', { level: 1 })).not.toBeVisible();
  });
});
