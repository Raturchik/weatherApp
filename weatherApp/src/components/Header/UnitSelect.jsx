import React from "react";
import style from "./HeaderStyles/UnitSelect.module.scss";

export const UnitSelect = () => {
  return (
    <div className={style.measurmeCont}>
      <select className={style.measurment} name="" id="">
        <option value="">Celsius (°C)</option>
        <option value="">Fahrenheit (°F)</option>
      </select>
    </div>
  );
};
