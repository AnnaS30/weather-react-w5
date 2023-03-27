import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              width="58"
              height="58"
              className="float-left"
            ></img>
            {/* <div className="float-left"> */}
            <span id="temperature">{Math.round(props.data.temperature)}</span>
            <span id="unit">°C</span>
            {/* </div> */}
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidit: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
