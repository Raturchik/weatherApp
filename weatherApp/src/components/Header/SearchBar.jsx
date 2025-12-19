import React from "react";
import style from "./HeaderStyles/SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div>
      <form className={style.searchBar} action="e">
        <input
          className={style.popa}
          type="search"
          name="search"
          placeholder="Search Location"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
