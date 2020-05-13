import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

jest.mock('../Spinner', () => {
  return () => <div>Mock Loading Spinner</div>;
});

describe('App', () => {
  it('renders 1 example loading spinner', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Mock Loading Spinner')).toHaveLength(1);
  });
});
