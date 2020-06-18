import React from 'react';
import ExtraPropTypes from 'react-extra-prop-types';

const isRgbString = color => {
  const matchColors = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
  const match = matchColors.exec(color);
  return !!match;
};

const rgbToHex = rgb =>
  `#${rgb
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map(num => parseInt(num).toString(16).padStart(2, '0'))
    .join('')}`;

const getRgbObject = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const hexToRgb = hex => {
  const rgbObject = getRgbObject(hex);

  return rgbObject ? `rgb(${rgbObject.r},${rgbObject.g},${rgbObject.b})` : null;
};

const shouldUseWhiteText = hex => {
  // eslint-disable-next-line
  // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
  // https://www.w3.org/TR/WCAG20/#relativeluminancedef

  const rgbObject = getRgbObject(hex);
  if (!rgbObject) {
    return null;
  }

  const { r, g, b } = rgbObject;
  const [red, green, blue] = [r, g, b].map(color => {
    const divided = color / 255.0;

    if (divided <= 0.03928) {
      return divided / 12.92;
    }
    return Math.pow((divided + 0.055) / 1.055, 2.4);
  });

  const redVal = 0.2126 * red;
  const greenVal = 0.7152 * green;
  const blueVal = 0.0722 * blue;

  return redVal + greenVal + blueVal > Math.sqrt(1.05 * 0.05) - 0.05;
};

const ColorSwatch = ({ color }) => {
  let hexCode = '';
  let rgb = '';

  if (isRgbString(color)) {
    hexCode = rgbToHex(color);
    rgb = color;
  } else {
    hexCode = color;
    rgb = hexToRgb(color);
  }

  return (
    <div
      style={{
        backgroundColor: hexCode,
        color: shouldUseWhiteText(hexCode) ? '#000000' : '#ffffff',
        padding: '20px',
        margin: '1px',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <p>{hexCode}</p>
      <p>{rgb}</p>
    </div>
  );
};

ColorSwatch.propTypes = {
  color: ExtraPropTypes.color.isRequired,
};

export default ColorSwatch;
