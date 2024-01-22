import { useState } from 'react';
import { searchButtonStyle, textInputStyle, textSearcherStyle } from "./textSearcher.css";

export const TextSearcher = ({ onSearch }) => {
  const [searchResults, setsearchResults] = useState('');

  const handleInputChange = (e) => {
    setsearchResults(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchResults);
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
        value={searchResults}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <button className={searchButtonStyle} onClick={handleSearch}>
        <img src="/src/icons/search-icon.svg" alt="Click to search icon" />
      </button>
    </div>
  );
};