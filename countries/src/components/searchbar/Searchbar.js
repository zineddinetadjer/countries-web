import React from "react";
import search from "../../images/chercher.png";
import "../searchbar/searchbar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <img src={search} alt="search" />
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default SearchBar;
