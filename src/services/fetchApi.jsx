import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemonList = async ({ limit }) => {
  try {
    const response = await axios.get(`${baseURL}pokemon?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (pokemonId) => {
  try {
    const response = await axios.get(`${baseURL}pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for Pokemon with ID ${pokemonId}:`, error);
    throw error;
  }
};

export const fetchPokemonAbilities = async (abilities) => {
  try {
    const promises = abilities.map(async (abilityUrl) => {
      const response = await axios.get(abilityUrl);
      return response.data;
    });

    const abilitiesData = await Promise.all(promises);
    return abilitiesData;
  } catch (error) {
    console.error('Error fetching abilities:', error);
    throw error;
  }
};
