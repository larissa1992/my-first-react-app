import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview m-5">
        <h2 className="city"> {props.data.city}</h2>

        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li> {props.data.description} </li>
        </ul>
        <div className="row">
          <div className="col-4">
            <div className="clear-fix  weather-temperature">
              <div className="float-left">
              <WeatherIcon code={props.data.icon} />
              </div>
              
            </div>
            <div className="float-left">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <div className="props.data-condition">
              <button className="wrap-up">
                <div className="inner-text">
                  Feels like: <span> {props.data.feelsLike} </span>°
                </div>
              </button>
              <button className="wrap-up">
                <div className="inner-text">
                  {" "}
                  Humidity: <span> {props.data.humidity}</span>%{" "}
                </div>
              </button>
              <button className="wrap-up">
                <div className="inner-text">
                  Wind: <span> {props.data.wind}</span>m/h
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
