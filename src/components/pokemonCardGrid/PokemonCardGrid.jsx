import { useEffect, useState } from 'react';
import { PokemonCard } from '../pokemonCard/PokemonCard';
import { PokemonCardGridStyle } from './pokemonCardGrid.css';
import { fetchPokemonDetails } from '../../services/fetchApi';
import { LoadMoreButton } from '../loadMoreButton/LoadMoreButton';

export const PokemonCardGrid = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [visiblePokemonCount, setVisiblePokemonCount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchPokemonDetails({ limit: visiblePokemonCount });
        const pokemonDetailsPromises = results.map((pokemon) => fetchPokemonDetails(pokemon.name));
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [visiblePokemonCount]);

  if (!pokemonList) {
    return <p>Loading...</p>
  }

  const handleLoadMoreClick = () => {
    setVisiblePokemonCount((prevCount) => prevCount + 10);
  };

  return (
    <>
      <ul className={PokemonCardGridStyle}>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name)}
          />
        ))}
      </ul>
      <LoadMoreButton onClick={handleLoadMoreClick} />
    </>
  )
}