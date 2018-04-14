import axios from 'axios';

const API_KEY = 'ada1365a5a12b32bddc7ddae2dab2eb9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function addWeatherData(apiData) {
  return {
    type: FETCH_WEATHER,
    payload: apiData
  };
}

export function fetchWeather(city) {
  return dispatch => {
    const url = `${ROOT_URL}&q=${city},ua`;
    const request = axios
      .get(url)
      .then(response => {
        dispatch(addWeatherData(response.data));
      })
      .catch(error => {
        console.log('axios error', error); // eslint-disable-line no-console
      });

    return request;
  };
}
