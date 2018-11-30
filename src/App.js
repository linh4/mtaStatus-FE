import React, { Component } from 'react';
import Subway from './containers/Subway'
import SubwayList from './components/SubwayList'
import { connect } from 'react-redux'
import { fetchMtaData } from './Redux/actioncreators.js'
import { Route, withRouter } from 'react-router-dom'


class App extends Component {
  componentDidMount = () => {
    console.log('Hey I mounted App')
  }

  render() {

    return (
      <div className="App">
        <Route path="/subwayList" component={SubwayList} />
        <Route path="/trains/:id" component={Subway} />
      </div>
    );
  }
}

export default withRouter(connect(null,{ fetchMtaData })(App));
