import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from 'redux'
import reducer  from './Redux/reducer.js'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

const store =  createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
  , document.getElementById('root'));
