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
      <Modal active toggle={mockToggle}>
        <h1>Some childen text</h1>
      </Modal>
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it('should close modal by clicking on cross icon or overlay', () => {
    render(
      <Modal active toggle={mockToggle}>
        <h1>Some childen text</h1>
      </Modal>
    );
    const closeBtn = screen.getByText('╳');
    const overlay = screen.getByTestId('modal');

    fireEvent.click(closeBtn);
    fireEvent.click(overlay);

    expect(mockToggle).toBeCalledTimes(2);
  });
  it('should not be visible if state is closed', () => {
    render(
      <Modal active={false} toggle={mockToggle}>
        <h1>Some childen text</h1>
      </Modal>
    );
    expect(screen.getByRole('heading', { level: 1 })).not.toBeVisible();
  });
});
