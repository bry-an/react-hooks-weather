import React from "react";
import { Card } from "reactstrap";

import styled from "styled-components";
const DetailsWrapper = styled.article`
  .card {
    text-align: center;
    margin-top: 20px;
    padding: 10px;
  }
  img {
    width: 155px;
    margin: auto;
  }
  h3 {
    margin-bottom: 15px;
  }
`;

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
    <DetailsWrapper>
      <Card>
        <h2>
          <strong>Detailed Weather Information</strong>
        </h2>
        <h2>{day}</h2>
        <img
          src={`${process.env.PUBLIC_URL}/icons/${icon}.png`}
          alt={description}
        />
        <h3>{description}</h3>
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
          {windDir}
        </p>
        <p>
          <strong>Precipitation: </strong>
          {precip}%
        </p>
      </Card>
    </DetailsWrapper>
  );
};

export default DayDetails;
