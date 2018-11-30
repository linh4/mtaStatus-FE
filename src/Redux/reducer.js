let initState = {
  currentTrainLine: null,
  currentFeed:[],
  trainStops:null
}

const reducer = (state=initState, action) => {
  switch (action.type) {
    case "CURRENT_FEED":
    return {...state,currentTrainLine:action.trainLine,currentFeed:action.payload}

    case "TRAIN_STOPS":
    return {...state,trainStops:action.payload}

    default:
      return state

  }
}

export default reducer
