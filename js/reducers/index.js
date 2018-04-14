import { combineReducers } from 'redux';

import WeatherReducer from './reducer_wether';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
