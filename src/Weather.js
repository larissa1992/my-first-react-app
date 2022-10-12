import React, { useState } from "react";
import backgroundVideo from "./video.mp4";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherConditions(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35fc3221d495b343bc97b3dea0447fe8&units=metric`;
    axios.get(apiUrl).then(displayWeatherConditions);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <video
          autoPlay
          loop
          muted
          id="video"
          src={backgroundVideo}
          type="video/mp4"
        ></video>
        <div className="container-border">
          <h1 className="title m-3">Weather Forecast</h1>
          <form onSubmit={handleSubmit}>
            <div className="row m-5">
              <div className="col-6">
                <input
                  type="text"
                  className="btn btn-outline-light btn-lg w-100 shadow-sm search-input"
                  placeholder="What's the weather in..."
                  autoComplete="off"
                  autoFocus
                  onChange={updateCity}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  className="btn border-0 btn-light  btn-lg w-100 shadow-sm search-button "
                  value="Search"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weather} />
          <br />
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
