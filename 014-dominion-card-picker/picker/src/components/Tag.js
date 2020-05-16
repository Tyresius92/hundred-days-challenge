import React from 'react';
import PropTypes from 'prop-types';
import { CARD_TAG_CLASSNAMES } from './cardTypeConstants';
import './Tag.css';

const Tag = ({ name }) => (
  <div className={`tag ${CARD_TAG_CLASSNAMES[name]}`}>{name}</div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
