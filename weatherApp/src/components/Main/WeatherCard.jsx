import style from "./MainStyles/WeatherCard.module.scss";
export const WeatherCard = ({ weatherData }) => {
  return (
    <div className={style.weatherInfoCont}>
      {weatherData ? (
        <div className={style.weatherInfoWrapper}>
          <div className={style.weatherInfo}>
            <p className={style.cityName}>{weatherData.name}</p>
            <div className={style.rere}>
              <p>{Math.round(weatherData.main.temp)}°C</p>
              <img src="" alt="Img" />
              <p className={style.rotatedParagraph}>
                {weatherData.weather[0].main}
              </p>
            </div>
          </div>
          <div className={style.moreWeatherInfo}>
            <div className={style.column}>
              <p>{Math.round(weatherData.main.feels_like)}°C</p>
              <p>Feels Like</p>
            </div>
            <div className={style.column}>
              <p>{weatherData.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className={style.column}>
              <p>{Math.round(weatherData.main.temp_max)}°C</p>
              <p>Max Temp</p>
            </div>
            <div className={style.column}>
              <p>{Math.round(weatherData.wind.speed)}m/s</p>
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
