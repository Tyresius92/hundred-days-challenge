import React from 'react';
import { render } from '@testing-library/react';
import ColorSwatch from '../ColorSwatch';

describe('ColorSwatch', () => {
  it('takes in a hexcode string and renders it', () => {
    const { getByText } = render(<ColorSwatch color="#000000" />);

    expect(getByText('#000000')).toBeInTheDocument();
  });

  it('renders the rgb code for a hex code', () => {
    const { getByText } = render(<ColorSwatch color="#000000" />);

    expect(getByText('rgb(0,0,0)')).toBeInTheDocument();
  });

  it('renders the hex code if given the rgb code', () => {
    const { getByText } = render(<ColorSwatch color="rgb(0,0,0)" />);

    expect(getByText('#000000')).toBeInTheDocument();
  });

  it.each`
    inputColor            | hexCode      | rgb
    ${'#000000'}          | ${'#000000'} | ${'rgb(0,0,0)'}
    ${'rgb(0,0,0)'}       | ${'#000000'} | ${'rgb(0,0,0)'}
    ${'#111111'}          | ${'#111111'} | ${'rgb(17,17,17)'}
    ${'#788093'}          | ${'#788093'} | ${'rgb(120,128,147)'}
    ${'#ffffff'}          | ${'#ffffff'} | ${'rgb(255,255,255)'}
    ${'rgb(255,255,255)'} | ${'#ffffff'} | ${'rgb(255,255,255)'}
  `(
    'renders hex: $hexCode and rgb: $rgb when given $inputColor',
    ({ hexCode, rgb, inputColor }) => {
      const { getByText } = render(<ColorSwatch color={inputColor} />);

      expect(getByText(hexCode)).toBeInTheDocument();
      expect(getByText(rgb)).toBeInTheDocument();
    }
  );
});
