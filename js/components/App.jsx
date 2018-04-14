import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

const App = () => (
  <Provider store={store}>
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  </Provider>
);

export default App;
