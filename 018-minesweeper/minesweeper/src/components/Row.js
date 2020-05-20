import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import './Row.css';

const Row = ({ cells, onClick, row }) => (
  <div
    style={{
      width: '75%',
      margin: 'auto',
      display: 'grid',
      gridTemplateColumns: `repeat(${cells.length}, 1fr)`,
    }}
    className="row"
  >
    {cells.map((cell, index) => (
      <Cell
        key={index}
        isHidden={cell.hidden}
        value={cell.value}
        row={row}
        col={index}
        onClick={onClick}
        style={{
          width: `${100 / cells.length}%`,
        }}
      />
    ))}
  </div>
);

Row.propTypes = {
  cells: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      hidden: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
};

export default Row;
