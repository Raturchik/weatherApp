import { useContext } from "react";
import style from "./MainStyles/WeatherCard.module.scss";
import { MainContext } from "../../App";

export const WeatherCard = () => {
  const context = useContext(MainContext);

  const weatherContext = context.weatherData;
  const units = context.units;
  return (
    <div className={style.weatherInfoCont}>
      {weatherContext ? (
        <div className={style.weatherInfoWrapper}>
          <div className={style.weatherInfo}>
            <p className={style.cityName}>{weatherContext.name}</p>
            <div className={style.rere}>
              <p>
                {Math.round(weatherContext.main.temp)}°
                {units === "metric" ? "C" : "F"}
              </p>
              <img src="" alt="Img" />
              <p className={style.rotatedParagraph}>
                {weatherContext.weather[0].main}
              </p>
            </div>
          </div>
          <div className={style.moreWeatherInfo}>
            <div className={style.column}>
              <p>
                {Math.round(weatherContext.main.feels_like)}°
                {units === "metric" ? "C" : "F"}
              </p>
              <p>Feels Like</p>
            </div>
            <div className={style.column}>
              <p>{weatherContext.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className={style.column}>
              <p>
                {Math.round(weatherContext.main.temp_max)}°
                {units === "metric" ? "C" : "F"}
              </p>
              <p>Max Temp</p>
            </div>
            <div className={style.column}>
              <p>{Math.round(weatherContext.wind.speed)}m/s</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Enter the city name</h1>
      )}
    </div>
  );
};
