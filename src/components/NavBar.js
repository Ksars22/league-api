import React from "react";
import SearchBar from "./SearchBar";
import "./styles.css";
import { history } from "./App";

const NavBar = () => {
  return (
    <div className="nav">
      <div
        onClick={() => {
          history.push("/");
        }}
        className="navtitle"
      >
        LoL Player Finder
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
