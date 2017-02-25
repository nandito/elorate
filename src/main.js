import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import throttle from 'lodash.throttle'
import { loadState, saveState } from './localStorage'

import * as reducers from './reducers.js'
reducers.routing = routerReducer

import App from './components/App.js'
import Home from './components/Home.js'
import Collect from './containers/Collect.js'
import Rate from './containers/Rate.js'

const persistedState = loadState()

const store = createStore(
  combineReducers(reducers),
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

let routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/collect' component={Collect} />
    <Route path='/rate' component={Rate} />
  </Route>
)

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}


function init() {
  run()
  store.subscribe(run)
}

init()
