import React from 'react';
import './Tile.css';

const Tile = ({ letter, pointValue }) => (
  <div className="tile">
    <h1 className="letter">{letter}</h1>
    <p className="pointValue">{pointValue}</p>
  </div>
);

export default Tile;
