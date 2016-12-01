import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers.js'
reducers.routing = routerReducer

import App from './components/App'
import Collect from './components/Collect'

const store = createStore( combineReducers(reducers) )
const history = syncHistoryWithStore(browserHistory, store)

let routes = (
  <Route path='/' component={App}>
    <Route path='/collect' component={Collect} />
  </Route>
)

function run() {
  let state = store.getState()
  console.log(state)

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

// TODO:
/*

1. Collect items
/collect
Add item: ___________ (input field)

2. Fight items
/fight

3. Show scores

*/
