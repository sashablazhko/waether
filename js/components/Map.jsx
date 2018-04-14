import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const Map = withGoogleMap(props => <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />);

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
};

export default Map;
