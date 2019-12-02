import React from "react";

const SearchBar = ({ handlecurrentKeyChange, handleKeywordChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => handlecurrentKeyChange(e.target.value)}
      />
      <button type="button" onClick={handleKeywordChange}>
        입력
      </button>
    </>
  );
};

export default SearchBar;
