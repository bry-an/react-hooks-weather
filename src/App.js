import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";
import API from "./utils/api";
import styled from "styled-components";

const AppWrapper = styled.article`
  .app {
    margin-top: 20px;
  }
  img {
    width: 55px;
  }
`;

const App = () => {
  // initial state value
  const [data, setData] = useState({
    days: [],
    location: "",
    selectedDay: null,
    searchTerm: ""
  });

  // on every render, trigger this => but the deps array means only on initial render
  useEffect(() => {
    getWeather("Denver,CO");
  }, []); // [] is deps array (dependencies array) => call once and never again, i.e. no dependencies

  const { days, location, selectedDay, searchTerm } = data;
  useEffect(() => {
    document.title = `This week's weather ${location ? "for " + location : ""}`;
  }, [location]); // every time location changes

  const getWeather = city => {
    API.getWeather(city)
      .then(res => {
        console.log(res);
        setData({
          searchTerm: "",
          selectedDay: null,
          days: res.data.data,
          location: res.data.city_name + ", " + res.data.state_code
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const setSelectedDay = day => {
    setData({
      ...data,
      selectedDay: day
    });
  };
  const handleInputChange = event => {
    setData({
      ...data,
      searchTerm: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      getWeather(searchTerm);
    } else {
      alert("You must enter a city to search");
    }
  };

  return (
    <AppWrapper>
      <div className="app">
        <Container>
          <Row>
            <Col md={8}>
              <h1>Weather for {location}</h1>
            </Col>
            <Col md={4}>
              <SearchBar
                handleInputChange={handleInputChange}
                searchTerm={searchTerm}
                handleFormSubmit={handleFormSubmit}
              />
            </Col>
          </Row>
          <Row>
            {days.map(day => (
              <DayCard
                key={day.ts}
                day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
                current={day.temp}
                high={day.max_temp}
                low={day.min_temp}
                icon={day.weather.icon}
                description={day.weather.description}
                setSelectedDay={() => setSelectedDay(day)}
                isActive={day === selectedDay}
              />
            ))}
          </Row>
          <Row>
            <Col>
              {selectedDay ? (
                <DayDetails
                  day={moment(selectedDay.valid_date, "YYYY-MM-DD").format(
                    "dddd, MMMM Do, YYYY"
                  )}
                  current={selectedDay.temp}
                  high={selectedDay.max_temp}
                  low={selectedDay.min_temp}
                  icon={selectedDay.weather.icon}
                  description={selectedDay.weather.description}
                  windSpeed={selectedDay.wind_spd}
                  windDir={selectedDay.wind_cdir_full}
                  precip={selectedDay.pop}
                />
              ) : (
                "Please Select a Day"
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </AppWrapper>
  );
};

export default App;
