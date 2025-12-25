import { UnitSelect } from "./UnitSelect";
import { SearchBar } from "./SearchBar";
import styles from "./HeaderStyles/Header.module.scss";

export const Header = ({ getPos }) => {
  return (
    <header>
      <UnitSelect />
      <SearchBar getPos={getPos} />
    </header>
  );
};
