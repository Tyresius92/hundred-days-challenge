import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const stylesObject = () => ({
  pokemon: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '20px',
  },
  imgContainer: {
    backgroundColor: fade('#fff', 0.6),
    borderRadius: '50%',
    textAlign: 'center',
  },
  img: {
    marginTop: '20px',
  },
  number: {
    backgroundColor: '#999',
    display: 'inline-block',
    padding: '3px 8px',
    borderRadius: '10px',
  },
  label: {
    display: 'inline-block',
    padding: '3px 8px',
    borderRadius: '10px',
  },
  Bug: {
    backgroundColor: '#A8B820',
    color: '$fff',
  },
  Dark: {
    backgroundColor: '#705848',
    color: '$fff',
  },
  Dragon: {
    backgroundColor: '#7038F8',
    color: '$fff',
  },
  Electric: {
    backgroundColor: '#F8D030',
    color: '$fff',
  },
  Fairy: {
    backgroundColor: '#EE99AC',
    color: '$fff',
  },
  Fighting: {
    backgroundColor: '#C03028',
    color: '$fff',
  },
  Fire: {
    backgroundColor: '#F08030',
    color: '$fff',
  },
  Flying: {
    backgroundColor: '#A890F0',
    color: '$fff',
  },
  Grass: {
    backgroundColor: '#78C850',
    color: '$fff',
  },
  Ground: {
    backgroundColor: '#E0C068',
    color: '$fff',
  },
  Ice: {
    backgroundColor: '#98D8D8',
    color: '$fff',
  },
  Normal: {
    backgroundColor: '#A8A878',
    color: '$fff',
  },
  Poison: {
    backgroundColor: '#A040A0',
    color: '#fff',
  },
  Psychic: {
    backgroundColor: '#F85888',
    color: '$fff',
  },
  Rock: {
    backgroundColor: '#B8A038',
    color: '$fff',
  },
  Steel: {
    backgroundColor: '#B8B8D0',
    color: '$fff',
  },
  Water: {
    backgroundColor: '#6890F0',
    color: '$fff',
  },
});

export default makeStyles(stylesObject);
