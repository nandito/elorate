import React from 'react';
import { connect } from 'react-redux'

import AddItem from '../actions.js'

import Navigation from './Navigation.js'

const mapStateToProps = (props) => ({
  items: props
})

const App = ({ items, children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default connect(mapStateToProps)(App);
