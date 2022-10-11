import React, {useState} from "react";


export default function WeatherTemperature(props) {
    const [unit, setUnit] =useState("celsius");


 function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");

}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}



function fahrenheit(){
}



if (unit === "celsius") {

return(
    <div className="WeatherTemperature"> 
        <span className="temperature">{Math.round(props.celcius)}</span>
              <span className="units">
                <a href="/" >
                  °C
                </a>{" "}
                |<a href="/" onClick={showFahrenheit}>°F</a>
              </span>
        </div>
    )

} else {
    let fahrenheit= (props.celsius * 9)/5 +32;

    return (
  <div className="WeatherTemperature"> 
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
         <a href="/"  onClick={showCelsius}>
                  °C
        </a>{" "}
          |<a href="/">°F</a>

         </span>
    </div>
    )
}
    
}