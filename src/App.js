import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import backgroundVideo from "./video.mp4";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");

  function displayWeatherConditions(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=35fc3221d495b343bc97b3dea0447fe8&units=metric`;
    axios.get(apiUrl).then(displayWeatherConditions);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="container">
        <video
          autoPlay
          loop
          muted
          id="video"
          src={backgroundVideo}
          type="video/mp4"
        ></video>
        <div className="container-border">
          <h1 className="title m-5">Weather Forecast</h1>
          <ul className="d-flex justify-content-evenly text-secondary">
            <li>Paris</li>
            <li>Madrid</li>
            <li>Berlin</li>
            <li>Potugal</li>
          </ul>

          <form>
            <div className="row m-5">
              <div className="col-6">
                <input
                  onSubmit={handleSubmit}
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
                  className="btn border-0 btn-light  btn-lg shadow-sm search-button"
                  value="Search"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Current Location"
                  className="btn border-0 btn-info  btn-lg shadow-sm current-location"
                />
              </div>
            </div>
          </form>

          <div className="overview m-5">
            <h2 className="city"> {city}</h2>

            <ul>
              <li> {weather.date} </li>
              <li> {weather.description} </li>
            </ul>
            <div className="row">
              <div className="col-2">
                <div className="clear-fix  weather-temperature">
                  <img
                    src={weather.icon}
                    alt={weather.description}
                    className="float-left"
                    width="80"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="float-right temperature">
                  <strong>{weather.temperature}</strong>

                  <span className="units">
                    <a href="/" className="active">
                      °C
                    </a>{" "}
                    |<a href="/">°F</a>
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div className="weather-condition">
                  <button className="wrap-up">
                    <div className="inner-text">
                      Feels like: <span> {weather.feelsLike} </span>°
                    </div>
                  </button>
                  <button className="wrap-up">
                    <div className="inner-text">
                      {" "}
                      Humidity: <span> {weather.humidity}</span>%{" "}
                    </div>
                  </button>
                  <button className="wrap-up">
                    <div className="inner-text">
                      Wind: <span> {weather.wind}</span>m/h
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <a
            className="gitHub"
            href="https://github.com/larissa1992/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>{" "}
          by{" "}
          <a
            className="porfolio"
            href="https://rainbow-valkyrie-5d08eb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Larissa Adina
          </a>{" "}
          and hosted on{" "}
          <a
            className="netlify"
            href="https://6332c599ed81d50009df128d--soft-starburst-fa84d0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
