import React from "react";
import SearchBar from "./SearchBar";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="navtitle">LoL Player Finder</div>
      <div className="searchbar">
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
