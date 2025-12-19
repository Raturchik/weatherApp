import React from "react";
import style from "./MainStyles/WeatherCard.module.scss";
export const WeatherCard = () => {
  return (
    <div className={style.weatherInfoCont}>
      <div className={style.weatherInfoWrapper}>
        <p>City</p>
        <div className={style.weatherInfo}>
          <div className={style.rere}>
            <p>3 °C</p>
            <img src="" alt="penis" />
          </div>
          <p>Weather</p>
        </div>
        <div className={style.moreWeatherInfo}>
          <div className={style.column}>
            <p>°C</p>
            <p>Feels Like</p>
          </div>
          <div className={style.column}>
            <p>x%</p>
            <p>Humidity</p>
          </div>
          <div className={style.column}>
            <p>°C</p>
            <p>Max Temp</p>
          </div>
          <div className={style.column}>
            <p>xm/s</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
