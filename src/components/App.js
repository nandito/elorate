import React from 'react';
import { connect } from 'react-redux'

import AddItem from '../actions.js'

const mapStateToProps = (props) => ({
  item: props
})

const App = (props) => {
  return (
    <div>
      App
      {props.items}
    </div>
  )
}

export default connect(mapStateToProps)(App);
