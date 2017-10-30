import { combineReducers } from 'redux';

import WeatherReducer from './reducers_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
