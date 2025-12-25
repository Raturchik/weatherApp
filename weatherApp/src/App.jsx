import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "./index.css";
import { useEffect } from "react";

function App() {
  const API_KEY = "2448185f55001820d674b8ceb4b9c10c";

  const [locationLat, setLocationLat] = useState(null);
  const [locationLon, setLocationLon] = useState(null);
  const [weatherData, setweatherData] = useState(null);

  const getCityPosition = async (City) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${City},&appid=${API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong...");
        }
        return response.json();
      })
      .then((data) => {
        setLocationLat(data[0].lat);
        setLocationLon(data[0].lon);
      });
  };
  console.log(locationLat, locationLon);
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationLat}&lon=${locationLon}&appid=${API_KEY}&units=metric`;

    if (locationLat && locationLon) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong...!");
          }
          return response.json();
        })
        .then((data) => {
          setweatherData(data);
          console.log(data);
        });
    }
  }, [locationLat, locationLon]);
  console.log(weatherData);

  return (
    <div className="container">
      <Header getPos={getCityPosition} />
      <Main weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
