import React from "react";
import search from "../../images/chercher.png";
import "../searchbar/searchbar.css";

const SearchBar = (props) => {
  const { querry, setQuerry } = props;

  return (
    <div className="searchbar">
      <img src={search} alt="search" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setQuerry(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
