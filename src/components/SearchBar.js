import React from "react";

function SearchBar() {

  const handleSearch = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="search-field">
      <i className="search-icon fa-solid fa-magnifying-glass fa-5x"></i>
      <input type="text" onKeyUp={handleSearch} className="search-input form-search form-control" placeholder="type here WHATEVER you're looking for ..." />
    </div>
  )
}

export default SearchBar;
