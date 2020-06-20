import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  const SAMPLE_BUTTON_TEXT = 'Click me!';

  it('renders children', () => {
    const { getByText } = render(<Button>{SAMPLE_BUTTON_TEXT}</Button>);

    expect(getByText(SAMPLE_BUTTON_TEXT)).toBeInTheDocument();
  });

  it('renders a button', () => {
    const { getByRole } = render(<Button>{SAMPLE_BUTTON_TEXT}</Button>);

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('renders an "a" tag instead of a button if href prop passed', () => {
    const SAMPLE_HREF = 'https://google.com';

    const { getByRole, queryByRole } = render(
      <Button href={SAMPLE_HREF}>{SAMPLE_BUTTON_TEXT}</Button>
    );

    expect(getByRole('link')).toBeInTheDocument();
    expect(queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const mockClickHandler = jest.fn();
    const { getByRole } = render(
      <Button onClick={mockClickHandler}>Click</Button>
    );
    fireEvent.click(getByRole('button'));

    expect(mockClickHandler).toHaveBeenCalled();
  });
});
