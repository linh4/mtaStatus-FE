import React from 'react';
import { connect } from 'react-redux'
import { fetchMtaData } from '../Redux/actioncreators.js'



const SubwayList = (props) => {
  // i have to create an array of all subways lines since that information is not provided. When the user clicks on the subway i should be able to save it
  let subways = ['', '1', '2', '3', '4', '5', '6',
	'S', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'N', 'Q', 'R', 'L', 'G']

const handleChange =(e) => {
  // depending on what the user choice was i'm going to fetch the data feed for that specific train
  switch (e.target.value) {
  		case '1': case '2': case '3': case '4': case '5': case '6': case 'S':
        return props.fetchMtaData(1,e.target.value)
  		case 'A': case 'C': case 'E':
        return props.fetchMtaData(26,e.target.value)
  		case 'N': case 'Q': case 'R': case 'W':
        return props.fetchMtaData(16,e.target.value)
  		case 'B': case 'D': case 'F': case 'M':
        return props.fetchMtaData(21,e.target.value)
      case 'L':
        return props.fetchMtaData(2,e.target.value)
  		case 'G':
        return props.fetchMtaData(31,e.target.value)
  	}
}

  return (
    <select onChange={ (e) => handleChange(e) }>
      {
				subways.map(subway =>
					<option key={subway}>
						{subway}
					</option>
				)
			}

    </select>
  );


}

export default connect(null,{ fetchMtaData })(SubwayList);
