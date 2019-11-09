import axios from "axios";

export default {
  getWeather(city) {
    const baseUrl = "https://api.weatherbit.io/v2.0/forecast/daily?units=I";
    const days = 7;
    const key = process.env.REACT_APP_WEATHER_KEY;
    const fullUrl = `${baseUrl}&days=${days}&city=${city}&key=${key}`;
    return axios.get(fullUrl);
  }
};
