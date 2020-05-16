import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import './Card.css';

const Card = ({ title, cost, types, expansion }) => (
  <div className="card">
    <h1>{title}</h1>
    <h3>{cost}</h3>
    {types.map(type => (
      <Tag key={type} name={type} />
    ))}
    <p>{expansion}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  expansion: PropTypes.string.isRequired,
};

export default Card;
