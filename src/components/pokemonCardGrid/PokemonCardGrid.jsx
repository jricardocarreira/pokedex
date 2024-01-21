import { useEffect, useState } from 'react';
import { PokemonCard } from '../pokemonCard/PokemonCard';
import { PokemonCardGridStyle } from './pokemonCardGrid.css';
import { fetchPokemonList, fetchPokemonDetails } from '../../services/fetchApi';
import { LoadMoreButton } from '../loadMoreButton/LoadMoreButton';
import { LoadingOrNotFoundText } from '../loadingOrNotFoundText/LoadingOrNoFoundText';

export const PokemonCardGrid = ({ filterTerm }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [visiblePokemonCount, setVisiblePokemonCount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchPokemonList({ limit: visiblePokemonCount });
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
    return <LoadingOrNotFoundText>Loading...</LoadingOrNotFoundText>;
  }

  const handleLoadMoreClick = () => {
    setVisiblePokemonCount((prevCount) => prevCount + 10);
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.includes(filterTerm) ||
    String(pokemon.id) === filterTerm
  );

  return (
    <>
      {filteredPokemonList.length > 0 ? (
        <ul className={PokemonCardGridStyle}>
          {filteredPokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types.map((type) => type.type.name)}
            />
          ))}
        </ul>
      ) : (
        <LoadingOrNotFoundText>Search for another name or load more Pokémon by clicking below</LoadingOrNotFoundText>
      )}
      <LoadMoreButton onClick={handleLoadMoreClick} />
    </>
  );
}
