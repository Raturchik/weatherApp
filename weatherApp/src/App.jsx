import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { WeatherCard } from "./components/Main/WeatherCard";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
