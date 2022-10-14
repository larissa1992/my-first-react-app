import React from "react";

export default function WeatherIcon(props) {
  if (props.code === "01d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "01n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "02d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "02n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "03d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "03n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "04d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "04n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "09d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "09n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "10d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "10n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "11d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "11n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night.svg"
        alt={props.alt}
        className="src icon"
        width="00px"
      />
    );
  }
  if (props.code === "13d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "13n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "50d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
  if (props.code === "50n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg"
        alt={props.alt}
        className="src icon"
        width={props.width}
      />
    );
  }
}
