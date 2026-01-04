import { useContext } from "react";
import style from "./HeaderStyles/UnitSelect.module.scss";
import { MainContext } from "../../App";

export const UnitSelect = () => {
  const Context = useContext(MainContext);

  const handleContext = Context.handleMetricChange;
  const unitsContext = Context.units;
  return (
    <div className={style.measurmeCont}>
      <select
        onChange={handleContext}
        className={style.measurment}
        value={unitsContext}
      >
        <option value="metric">Celsius (°C)</option>
        <option value="imperial">Fahrenheit (°F)</option>
      </select>
    </div>
  );
};
