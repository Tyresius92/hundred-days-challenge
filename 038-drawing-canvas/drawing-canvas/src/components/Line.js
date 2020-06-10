import React from 'react';
import './Line.css';

const DrawingLine = ({ line }) => {
  const pathData =
    'M ' +
    line
      .map(point => {
        return `${point.x} ${point.y}`;
      })
      .join(' L ');

  return <path className="path" d={pathData} />;
};

export default DrawingLine;
