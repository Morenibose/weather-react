import React from "react";

import "./Weather.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear"
              id="icon"
              className="float-left"
            />
            <div className="float-left">
              <strong className="temperature">19</strong>
              <span className="units">
                <a href="/" className="active">
                  {" "}
                  °C{" "}
                </a>
                |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:<span className="humidity">80</span>%
            </li>
            <li>
              Wind: <span className="wind"></span> 10 km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
