import React, { useState } from "react";
import "./App.css";



function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const api = {
    key: 'c7616da4b68205c2f3ae73df2c31d177',
    base: 'http://api.openweathermap.org/data/2.5/'
  }

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
        });
    }
  };

  return (
    <div className={typeof weather.main != "undefined"}>
      <main>
        <div className="title">ПРОГНОЗ ПОГОДИ</div>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Введіть місто..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}



export default App;
