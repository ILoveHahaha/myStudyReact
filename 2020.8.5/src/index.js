import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import routes from './routes'
import {BrowserRouter as Router} from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import FlashMessageList from './components/flash/FlashMessagesList'
import setAuthorizationToken from './utils/setAuthorizationToken'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <NavigationBar />
      <FlashMessageList />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'));
