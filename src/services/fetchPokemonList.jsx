import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemonList = async ({ limit = 10 }) => {
  try {
    const response = await axios.get(`${baseURL}pokemon?limit=${limit}`);
    const results = response.data.results;

    const pokemonListWithDetails = await Promise.all(results.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      return response.data;
    }));

    return pokemonListWithDetails;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
}