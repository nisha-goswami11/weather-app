import React, { useState } from "react";
import "./App.css";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "82615639801238459dd892712c6af658";

  const searchWeather = async () => {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="app">

      <h1>Weather App</h1>

      <div className="search">

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={searchWeather}>Search</button>

      </div>

      {weather && (

        <div className="weather-card">

          <h2>{weather.name}</h2>

          <h1>{weather.main.temp}°C</h1>

          <p>{weather.weather[0].description}</p>

          <div className="details">

            <p>Humidity: {weather.main.humidity}%</p>

            <p>Wind: {weather.wind.speed} km/h</p>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;