import React from 'react';
import { connect } from 'react-redux'


const SubwayStops  = (props) => {
  if (props.stops()) {
    return props.stops().map(trainStop => <div><ul><li>{trainStop}</li></ul></div>)
  }
  else {
    return (
      <div>
        No train selection yet
      </div>
    )
  }
}


export default SubwayStops;
