import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h2 className="city ms-4"> {props.data.city}</h2>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li> {props.data.description} </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-evenly">
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
            <button className="wrap-up ">
              <div className="inner-text">
                Wind: <span> {props.data.wind}</span>m/h
              </div>
            </button>
          </div>
        </div>

        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
