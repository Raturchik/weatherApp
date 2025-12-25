import { useForm } from "react-hook-form";
import style from "./HeaderStyles/SearchBar.module.scss";

export const SearchBar = ({ getPos }) => {
  const { register, handleSubmit } = useForm();

  const handleSubmitFunc = (data) => getPos(data.City);
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
