import React, { Component } from 'react';
import SubwayList from '../components/SubwayList'
import SubwayStops from '../components/SubwayStops'
import { connect } from 'react-redux'
import stops from '../Apihelpers/stops'



class Subway extends Component {

    handleState = () => {
    let currentTrainStops = []
    if (this.props.currentTrainLine != null) {
      for(let i=0;i < stops.length;i++){
        if(stops[i].stop_id[0] === this.props.currentTrainLine) {
          currentTrainStops.push(stops[i].stop_name)
        }
      }
      // return currentTrainStops.map(trainStop => <SubwayStops key={trainStop} stop={trainStop}/>)
      // return currentTrainStops.map(trainStop => <ul> <li> {trainStop} </li> </ul>)
      return currentTrainStops
    }
  }


  render() {
    return (
      <div className="App">
        <h2>Hello Subway</h2>
        <SubwayList />
        {/* {this.handleState()} */}
        <SubwayStops stops={this.handleState} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentFeed:state.currentFeed,
    currentTrainLine:state.currentTrainLine
  }
}

export default connect(mapStateToProps)(Subway);
