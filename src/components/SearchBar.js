import React from "react";
import { useState } from "react";

function SearchBar({ onSubmit }) {

  // const handleClick = () => {
  //   onSubmit('weed');
  // }

  const [ term, setTerm ] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className="search-field">
      <i className="search-icon fa-solid fa-magnifying-glass fa-5x"></i>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={term} onChange={handleChange} className="search-input form-search form-control" placeholder="type here WHATEVER you're looking for ..." />
      </form>
    </div>
  )

}

export default SearchBar;
