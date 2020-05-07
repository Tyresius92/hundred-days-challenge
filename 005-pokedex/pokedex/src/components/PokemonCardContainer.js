import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import pokedexUtils from '../utils/pokedexUtils';

const PokemonCardContainer = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setPokemon(await pokedexUtils.fetchPokemonWithId(id));
    };
    fetchPokemon();
  }, [id]);

  return (
    <>
      {pokemon ? (
        <PokemonCard
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
        />
      ) : (
        'Loading...'
      )}
    </>
  );
};

PokemonCardContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PokemonCardContainer;
