import { useState } from 'react';
import { FilterSection } from "../components/filterSection/FilterSection";
import { PokemonCardGrid } from "../components/pokemonCardGrid/PokemonCardGrid";
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection";

export const PokemonCardsPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedType, setSelectedType] = useState('');
  
    const handleSearch = (results) => {
      setSearchResults(results);
    };
  
    const handleTypeClick = (type) => {
      const updatedTypes = selectedType.includes(type)
      
        ? selectedType.filter((selectedType) => selectedType !== type)
        : [...selectedType, type];

        setSelectedType(updatedTypes);
    };

  return (
    <>
      <FilterSection onSearch={handleSearch} onTypeClick={handleTypeClick} />
      <PokemonMainSection>
        <PokemonCardGrid filterResults={searchResults} selectedType={selectedType} />
      </PokemonMainSection>
    </>
  );
};
