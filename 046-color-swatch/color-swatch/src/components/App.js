import React from 'react';
import ColorSwatch from './ColorSwatch';

// colors sourced from here:
// https://github.com/Tyresius92/le-chat/blob/master/client/src/theme.js
const turquoise = {
  50: '#ddfdf9',
  100: '#baf3e9',
  200: '#93e8db',
  300: '#6bddcd',
  400: '#45d4be',
  500: '#2bbaa5',
  600: '#1d9180',
  700: '#0e695c',
  800: '#003f37',
  900: '#001812',
};

const red = {
  50: '#ffe8e6',
  100: '#f4c1c0',
  200: '#e89898',
  300: '#dd706f',
  400: '#d24846',
  500: '#b92e2d',
  600: '#902322',
  700: '#681817',
  800: '#400d0d',
  900: '#1c0101',
};

const gray = {
  25: '#fff5f7',
  50: '#fbf0f2',
  100: '#dcd8d9',
  200: '#bfbfbf',
  300: '#a6a6a6',
  400: '#8c8c8c',
  500: '#737373',
  600: '#595959',
  700: '#404040',
  800: '#282626',
  900: '#150a0d',
};

const colors = Object.values(turquoise).concat(
  Object.values(red),
  Object.values(gray)
);

const App = () => (
  <div style={{ width: '50%', margin: 'auto' }}>
    {colors.map(color => (
      <ColorSwatch key={color} color={color} />
    ))}
  </div>
);

export default App;
