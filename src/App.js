import React, { Component } from 'react';
import Subway from './containers/Subway'
import { connect } from 'react-redux'
import { fetchMtaData } from './Redux/actioncreators.js'

class App extends Component {
  componentDidMount = () => {
    console.log(this.props.fetchMtaData())

  }

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <Subway />
      </div>
    );
  }
}

export default connect(null,{ fetchMtaData })(App);
