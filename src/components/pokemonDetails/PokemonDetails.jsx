import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../../services/fetchPokemonList';

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
    <div>
      <img src={pokemonDetails.sprites?.front_default} alt={pokemonDetails.name} />
      <h1>{pokemonDetails.name}</h1>
      <h2>Moves</h2>
      <ul>
        {pokemonDetails.moves?.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
      <h2>Abilities</h2>
      <ul>
        {pokemonDetails.abilities?.map((ability) => (
          <li key={ability.ability.name}>
            {ability.ability.name} - {ability.ability.effect_entries[0]?.short_effect}
          </li>
        ))}
      </ul>
      <h2>Type</h2>
      <p>{pokemonDetails.types?.map((type) => type.type.name).join(', ')}</p>
    </div>
  );
};