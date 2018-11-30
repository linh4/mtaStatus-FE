

export const fetchMtaData = (id,trainLine) => {
  return dispatch => {
    fetch(`http://localhost:3001/currentFeed/${id}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: "CURRENT_FEED",
      payload:data,
      trainLine:trainLine
    }))
  }
}

export const sendStops = (stops) => {
  return dispatch => {
    dispatch({
      type:"TRAIN_STOPS",
      payload:stops
    })
  }
}
