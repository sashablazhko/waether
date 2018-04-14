import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = data => _.round(_.sum(data) / data.length);

const Chart = props => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.data)} {props.unit}</div>
  </div>
);

Chart.defaultProps = {
  data: [],
  color: '',
  unit: ''
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  unit: PropTypes.string
};

export default Chart;
