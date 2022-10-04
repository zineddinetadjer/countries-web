import React from "react";
import moon from "../../images/lune.png";
import "../navbar/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 id="logo">Where in the world ?</h1>
      <button id="dark">
        <img src={moon} alt="moon" /> Dark Mode
      </button>
    </div>
  );
};

export default Navbar;
