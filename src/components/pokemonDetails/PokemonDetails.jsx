import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { typeStyle } from '../../styles/typeBackground.css.js';
import { fetchPokemonDetails } from '../../services/fetchApi.jsx';
import { detailsImageStyle, detailsPokemonNameStyle, detailsTypeContainerStyle, detailsTypeStyle, mainPokemonDetailsStyle, pokemonDetaisStyle } from './pokemonDetails.css';

export const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [abilitiesDetails, setAbilitiesDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchPokemonDetails(id);
        setPokemonDetails(details);

        const abilities = details.abilities.map((ability) => ability.ability.url);
        const abilitiesDetails = await fetchPokemonAbilities(abilities);
        setAbilitiesDetails(abilitiesDetails);

      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchData();
  }, [id]);

  const fetchPokemonAbilities = async (abilities) => {
    const promises = abilities.map(async (abilityUrl) => {
      const response = await fetch(abilityUrl);
      const data = await response.json();
      return data;
    });

    const abilitiesData = await Promise.all(promises);
    return abilitiesData;
  };

  if (!pokemonDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className={pokemonDetaisStyle}>
      <div className={mainPokemonDetailsStyle}>
        <img className={detailsImageStyle} src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <p className={detailsPokemonNameStyle}>{pokemonDetails.name}</p>
        
        <ul className={detailsTypeContainerStyle}>
          {pokemonDetails.types.map((type, index) => (
            <li key={index} className={`${detailsTypeStyle} ${typeStyle} ${type.type.name}`}>
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>

      <h2>Moves</h2>
      <ul>
        {pokemonDetails.moves?.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>

      <h2>Abilities</h2>
      <ul>
        {abilitiesDetails.map((ability, index) => (
          <li key={index}>
            {ability.name} - {ability.effect_entries[0]?.effect}
          </li>
        ))}
      </ul>
    </div>
  );
};
