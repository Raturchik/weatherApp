import React from "react";
import { WeatherCard } from "./WeatherCard";
import { DateDisplay } from "./DateDisplay";
import style from "./MainStyles/MainStyles.module.scss";

export const Main = () => {
  return (
    <main className={style.main}>
      <DateDisplay />
      <WeatherCard />
    </main>
  );
};
