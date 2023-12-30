import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemonList = async ({ limit = 10}) => {
  try {
    const response = await axios.get(`${baseURL}pokemon?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${baseURL}pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${pokemonName}:`, error);
    throw error;
  }
};
