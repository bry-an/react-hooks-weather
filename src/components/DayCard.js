import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const border = "2px solid green";
const DayWrapper = styled.article`
  .card {
    text-align: center;
    border: ${(
      { isActive } // destructuring props for DayWrapper
    ) => (isActive ? "2px solid teal" : "1px solid blue")};
  }
  img {
    width: 55px;
  }
`;

const DayCard = ({
  icon,
  setSelectedDay,
  description,
  low,
  day,
  current,
  high,
  isActive
}) => {
  return (
    <Col onClick={setSelectedDay}>
      <DayWrapper isActive={isActive}>
        <Card>
          <CardHeader>{day}</CardHeader>
          <CardBody>
            <h2>{current}°</h2>
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
          </CardBody>
        </Card>
      </DayWrapper>
    </Col>
  );
};

export default DayCard;
