import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { typeStyle } from '../../styles/type-style.css.js';
import { fetchPokemonDetails, fetchPokemonAbilities } from '../../services/fetchApi';
import {
  abilitiesListItemsStyle,
  abilitiesListStyle,
  abilityButtonStyle,
  abilityDescriptionStyle,
  abilityNameButtonContainerStyle,
  abilityNameStyle,
  detailsImageStyle,
  detailsPokemonTextStyle,
  detailsTypeContainerStyle,
  detailsTypeStyle,
  mainPokemonDetailsContainerStyle,
  movesListItemsStyle,
  movesListStyle,
  pokemonAbilitiesStyle,
  pokemonDetaisStyle,
  pokemonIdStyle,
  pokemonMovesAbilitiesContainerStyle,
  pokemonMovesStyle,
  pokemonNameTypesContainerStyle
} from './pokemonDetails.css';
import { LoadingOrNotFoundText } from '../loadingOrNotFoundText/LoadingOrNoFoundText.jsx';

export const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [selectedAbility, setSelectedAbility] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchPokemonDetails(id);
        setPokemonDetails(details);

        const abilities = details.abilities.map((ability) => ability.ability.url);
        const abilitiesData = await fetchPokemonAbilities(abilities);
        setPokemonAbilities(abilitiesData);

      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleAbilityClick = (abilityName) => {
    setSelectedAbility((prevSelectedAbility) =>
      prevSelectedAbility === abilityName ? null : abilityName
    );
  };

  if (!pokemonDetails) {
    return <LoadingOrNotFoundText>Loading...</LoadingOrNotFoundText>;
  }

  return (
    <div className={pokemonDetaisStyle}>
      <div className={mainPokemonDetailsContainerStyle}>
        <img className={detailsImageStyle} src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <div className={pokemonNameTypesContainerStyle}>
          <p className={detailsPokemonTextStyle}>
            {pokemonDetails.name} <span className={pokemonIdStyle}>{`nº ${pokemonDetails.id.toString().padStart(4, '0')}`}</span>
          </p>
          <ul className={detailsTypeContainerStyle}>
            {pokemonDetails.types.map((type, index) => (
              <li key={index} className={`${detailsTypeStyle} ${typeStyle} ${type.type.name}`}>
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={pokemonMovesAbilitiesContainerStyle}>
        <div className={pokemonMovesStyle}>
          <p className={detailsPokemonTextStyle}>Moves</p>
          <ul className={movesListStyle}>
            {pokemonDetails.moves?.slice(0, 10).map((move) => (
              <li key={move.move.name} className={movesListItemsStyle}>
                - {move.move.name.replace(/-/g, ' ')}
              </li>
            ))}
          </ul>
        </div>
        <div className={pokemonAbilitiesStyle}>
          <p className={detailsPokemonTextStyle}>Abilities</p>
          <ul className={abilitiesListStyle}>
            {pokemonAbilities.map((ability) => (
              <li key={ability.name} className={abilitiesListItemsStyle}>
                <div className={abilityNameButtonContainerStyle} onClick={() => handleAbilityClick(ability.name)}>
                  <p className={abilityNameStyle}>- {ability.name.replace(/-/g, ' ')}</p>
                  <button className={abilityButtonStyle} >?</button>
                </div>
                {selectedAbility === ability.name && (
                  <p className={abilityDescriptionStyle}>{ability.effect_entries[1]?.effect}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
