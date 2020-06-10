import React from 'react';
import Line from './Line';
import './Drawing.css';

function Drawing({ lines }) {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <Line key={index} line={line} />
      ))}
    </svg>
  );
}

export default Drawing;
