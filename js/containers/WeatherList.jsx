import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../components/Chart';
import Map from '../components/Map';

class WeatherList extends Component {
  renderWeather = cityData => {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td style={{ verticalAlign: 'bottom' }}>
          <Map
            lon={lon}
            lat={lat}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </td>
        <td style={{ verticalAlign: 'bottom' }}><Chart data={temps} color="orange" units="C" /></td>
        <td style={{ verticalAlign: 'bottom' }}><Chart data={pressures} color="green" units="hHA" /></td>
        <td style={{ verticalAlign: 'bottom' }}><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
