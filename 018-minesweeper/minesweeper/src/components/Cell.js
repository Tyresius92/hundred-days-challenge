import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({ isHidden, value, row, col, onClick }) => (
  <div
    className={isHidden ? 'hidden' : 'visible'}
    role="button"
    onClick={() => onClick(value, row, col)}
  >
    {isHidden ? null : value}
  </div>
);

Cell.propTypes = {
  isHidden: PropTypes.bool,
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
};

Cell.defaultProps = {
  isHidden: true,
};

export default Cell;
