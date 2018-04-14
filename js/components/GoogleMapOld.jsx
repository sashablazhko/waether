import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMapOld extends Component {
  componentDidMount() {
    const component = this.mapRef;
    /* eslint-disable no-new */
    /* eslint-disable no-undef */
    new google.maps.Map(component, {
      zoom: 10,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    const myRef = el => (this.mapRef = el);
    return <div ref={myRef} />;
  }
}

GoogleMapOld.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
};

export default GoogleMapOld;
