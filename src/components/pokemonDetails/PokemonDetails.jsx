import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../../services/fetchPokemonList';
import { pokemonDetaisStyle } from './pokemonDetails.css';

export const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchPokemonDetails(id);
        setPokemonDetails(details);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={pokemonDetaisStyle}>
      <div>
        <img src={pokemonDetails.sprites?.front_default} alt={pokemonDetails.name} />
        <p>{pokemonDetails.types.map((type) => type.type.name).join(', ')}</p>
        <h1>{pokemonDetails.name}</h1>
      </div>

      <h2>Moves</h2>
      <ul>
        {pokemonDetails.moves?.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
      <h2>Abilities</h2>
      <ul>
        {pokemonDetails.ability?.map((ability) => (
          <li key={ability.name}>
            {ability.name} - {ability.effect_entries[0].effect}
          </li>
        ))}
      </ul>
    </div>
  );
};