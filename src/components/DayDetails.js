import React from "react";
import { Card } from "reactstrap";

import styled from "styled-components";

const DayDetails = ({
  day,
  description,
  current,
  high,
  low,
  windSpeed,
  windDir,
  precip,
  icon
}) => {
  return (
    <Card>
      <h2>Detailed Weather Information for {day}</h2>
      <img
        src={`${process.env.PUBLIC_URL}/icons/${icon}.png`}
        alt={description}
      />
      <p>
        <strong>High Temp: </strong>
        {high}°
      </p>
      <p>
        <strong>Low Temp: </strong>
        {low}°
      </p>
      <p>
        <strong>Wind Speed: </strong>
        {windSpeed}°
      </p>
      <p>
        <strong>Wind Direction: </strong>
        {windDir}°
      </p>
      <p>
        <strong>Precipitation: </strong>
        {precip}°
      </p>
    </Card>
  );
};

export default DayDetails;
