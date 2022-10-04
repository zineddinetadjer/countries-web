import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
import Country from "./components/country/Country";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/Searchbar";
import SelectRegion from "./components/selectregion/SelectRegion";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setCountries(data);
      });
    });
  };

  const getCountriesByRegion = () => {
    fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`, {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setCountries(data);
      });
    });
  };

  useEffect(() => {
    if (!selectedRegion) {
      getCountries();
    }
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      getCountriesByRegion();
    }
  }, [selectedRegion]);

  return (
    <div className="App">
      <Navbar />
      <div className="search-select">
        <SearchBar />
        <SelectRegion
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <div className="country-container">
        {countries.map((c) => (
          <Country
            name={c.name.official}
            population={c.population}
            flag={c.flags.png}
            region={c.continents}
            capital={c.capital}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
