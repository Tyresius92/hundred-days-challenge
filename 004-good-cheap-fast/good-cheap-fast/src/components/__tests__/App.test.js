import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders describe your project text', () => {
    const { getByText } = render(<App />);
    const componentText = getByText('Describe your project:');
    expect(componentText).toBeInTheDocument();
  });
});
