import axios from 'axios';

const titleCaseWord = word => word[0].toUpperCase() + word.slice(1);

export const fetchPokemonWithId = async id =>
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => ({
      id: response.data.id,
      name: titleCaseWord(response.data.species.name),
      types: response.data.types.map(elem => titleCaseWord(elem.type.name)),
    }))
    .catch(err => console.log(err));

export default {
  fetchPokemonWithId,
};
