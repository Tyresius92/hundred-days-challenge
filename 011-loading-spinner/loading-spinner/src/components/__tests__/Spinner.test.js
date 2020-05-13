import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../Spinner';

describe('Spinner', () => {
  it('contains an icon with a test id', () => {
    const { getByTestId, debug } = render(<Spinner />);

    expect(getByTestId('iconComponent')).toBeInTheDocument();
  });
});
