import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import useStyles from '../useStyles';

const PokemonCard = ({ id, name, types }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={`${classes.pokemon} ${classes[types[0]]}`}>
      <a
        href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}
      >
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            width="80%"
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt={name}
          />
        </div>
      </a>
      <h2>{name}</h2>
      <h3 className={classes.number}>#{id}</h3>
      <div>
        {types.map(type => (
          <h3 key={type} className={`${classes[type]} ${classes.label}`}>
            {type}
          </h3>
        ))}
      </div>
    </Paper>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default PokemonCard;
