import { useState } from 'react';
import { FilterSection } from "../components/filterSection/FilterSection";
import { PokemonCardGrid } from "../components/pokemonCardGrid/PokemonCardGrid";
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection";

export const PokemonCardsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <FilterSection onSearch={handleSearch}/>
      <PokemonMainSection>
        <PokemonCardGrid filterTerm={searchTerm} />
      </PokemonMainSection>
    </>
  );
};
