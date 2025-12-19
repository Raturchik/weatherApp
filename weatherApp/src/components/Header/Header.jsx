import React from "react";
import { UnitSelect } from "./UnitSelect";
import { SearchBar } from "./SearchBar";
import style from "./HeaderStyles/Header.module.scss";

export const Header = () => {
  return (
    <header>
      <UnitSelect />
      <SearchBar />
    </header>
  );
};
