import { useEffect, useState } from 'react';
import { PokemonCard } from '../pokemonCard/PokemonCard';
import { PokemonCardGridStyle } from './pokemonCardGrid.css';
import { LoadMoreButton } from '../loadMoreButton/LoadMoreButton';
import { fetchPokemonList } from '../../services/fetchPokemonList';

export const PokemonCardGrid = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [visiblePokemonCount, setVisiblePokemonCount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await fetchPokemonList({ limit: visiblePokemonCount });
        setPokemonList(list);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [visiblePokemonCount]);

  const handleLoadMoreClick = () => {
    setVisiblePokemonCount((prevCount) => prevCount + 10);
  };

  return (
    <>
      <div className={PokemonCardGridStyle}>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name)}
          />
        ))}
      </div>
      <LoadMoreButton onClick={handleLoadMoreClick} />
    </>
  )
}