import React, { Component } from 'react';
import SubwayList from '../components/SubwayList'


class Subway extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello Subway</h2>
        <SubwayList />
      </div>
    );
  }
}

export default Subway;
