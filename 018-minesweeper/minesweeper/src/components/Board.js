import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import './Board.css';

const Board = ({ cells, onClick }) => (
  <div
    style={{
      height: '1vh',
      display: 'grid',
      gridTemplateRows: `repeat(${cells[0].length}, 1fr)`,
    }}
  >
    {cells.map((cellRow, index) => (
      <Row
        key={`cellRow_${index}`}
        cells={cellRow}
        onClick={onClick}
        row={index}
      />
    ))}
  </div>
);

Board.propTypes = {
  cells: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
        hidden: PropTypes.bool.isRequired,
      })
    ).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
