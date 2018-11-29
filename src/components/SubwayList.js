import React from 'react';



const SubwayList = (props) => {
  // i have to create an array of all subways lines since that information is not provided. When the user clicks on the subway i should be able to save it
  let subways = ['', '1', '2', '3', '4', '5', '6',
	'S', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'N', 'Q', 'R', 'L', 'G']

const handleChange =(e) => {
  console.log(e.target.value)
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

export default SubwayList;
