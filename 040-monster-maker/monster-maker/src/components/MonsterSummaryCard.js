import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './StyledCard';
import { Typography } from '@material-ui/core';

const MonsterSummaryCard = ({
  eyeCount,
  hornCount,
  color,
  abilities,
  diet,
}) => (
  <StyledCard title="Your monster:">
    {eyeCount !== null && <Typography>{eyeCount} Eye(s)</Typography>}
    {hornCount !== null && <Typography>{hornCount} Horn(s)</Typography>}
    {color !== null && <Typography>{color}</Typography>}
    {abilities.length !== 0 && (
      <Typography>Abilities: {abilities.join(', ')}</Typography>
    )}
    {diet !== null && <Typography>Eats {diet}</Typography>}
  </StyledCard>
);

MonsterSummaryCard.propTypes = {
  eyeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hornCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  abilities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  diet: PropTypes.string,
};

MonsterSummaryCard.defaultProps = {};

export default MonsterSummaryCard;
