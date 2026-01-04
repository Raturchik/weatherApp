import { useForm } from "react-hook-form";
import style from "./HeaderStyles/SearchBar.module.scss";
import { useContext } from "react";
import { MainContext } from "../../App";

export const SearchBar = () => {
  const { register, handleSubmit } = useForm();

  const getPos = useContext(MainContext);

  const handleSubmitFunc = (data) => getPos.getCityPosition(data.City);
  return (
    <div>
      <form
        className={style.searchBar}
        onSubmit={handleSubmit(handleSubmitFunc)}
      >
        <input
          className={style.popa}
          type="search"
          name="search"
          placeholder="Search Location"
          {...register("City", { required: true })}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
