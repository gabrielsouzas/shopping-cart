import React from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar() {
  return (
    <form>
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search__input"
        required
      />

      <button type="submit" className="search_button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
