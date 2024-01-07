import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonNavigation = ({ currentPokemonId }) => {
  const previousPokemonId = Math.max(1, currentPokemonId - 1);
  const nextPokemonId = currentPokemonId + 1;

  return (
    <div>
      <Link to={`/pokemon/${previousPokemonId}`}>
        <button>Previous Pokemon</button>
      </Link>
      <Link to={`/pokemon/${nextPokemonId}`}>
        <button>Next Pokemon</button>
      </Link>
    </div>
  )
}