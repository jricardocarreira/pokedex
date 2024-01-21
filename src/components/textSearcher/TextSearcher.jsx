import { useState } from 'react';
import { searchButtonStyle, textInputStyle, textSearcherStyle } from "./textSearcher.css";

export const TextSearcher = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={textSearcherStyle}>
      <input
        placeholder="Search name or id number..."
        className={textInputStyle}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <button className={searchButtonStyle} onClick={handleSearch}>
        <img src="/src/icons/search-icon.svg" alt="Click to search icon" />
      </button>
    </div>
  );
};