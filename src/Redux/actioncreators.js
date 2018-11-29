

export const fetchMtaData = () => {
  return dispatch => {
    fetch('http://localhost:3001/currentFeed/1')
    .then(response => response.json())
    .then(console.log)
  }
}
