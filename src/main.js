import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import * as reducers from './reducers.js'

const store = createStore( combineReducers(reducers) )

let state = store.getState()
console.log(state)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// TODO:
// 1. Collect items
// 2. Fight items
// 3. Show scores
