import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { fetchMtaData } from '../Redux/actioncreators.js'
import {withRouter} from 'react-router-dom'



const SubwayList = (props) => {
  // i have to create an array of all subways lines since that information is not provided. When the user clicks on the subway i should be able to save it
  let subways = ['', '1', '2', '3', '4', '5', '6',
	'S', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'N', 'Q', 'R', 'L', 'G']

const handleClick =(e) => {
  // depending on what the user choice was i'm going to fetch the data feed for that specific train
  switch (e.target.innerText) {
  		case '1': case '2': case '3': case '4': case '5': case '6': case 'S':
        props.fetchMtaData(1,e.target.innerText)
        return props.history.push(`/trains/${e.target.innerText}`)
  		case 'A': case 'C': case 'E':
        return props.fetchMtaData(26,e.target.innerText)
  		case 'N': case 'Q': case 'R': case 'W':
        return props.fetchMtaData(16,e.target.innerText)
  		case 'B': case 'D': case 'F': case 'M':
        return props.fetchMtaData(21,e.target.innerText)
      case 'L':
        return props.fetchMtaData(2,e.target.innerText)
  		case 'G':
        return props.fetchMtaData(31,e.target.innerText)
  	}
}

  return (
    <Fragment>
      {subways.map(subway => <div onClick={(e) => handleClick(e)}> {subway} </div>)}
    </Fragment>
  );


}

export default withRouter(connect(null,{ fetchMtaData })(SubwayList))
