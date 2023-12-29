import React, { useEffect, useState } from 'react';
import { PokemonCard } from '../pokemonCard/PokemonCard';
import { PokemonCardGridStyle } from './pokemonCardGrid.css';
import { fetchPokemonDetails, fetchPokemonList } from '../../services/fetchPokemonList';

const PokemonCardGrid = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchPokemonList();
        const pokemonDetailsPromises = results.map((pokemon) => fetchPokemonDetails(pokemon.name));
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className={PokemonCardGridStyle}>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types.map((type) => type.type.name)}
        />
      ))}
    </ul>
  );
};

export default PokemonCardGrid;
