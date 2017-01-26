import React, { PropTypes } from 'react';
import Navigation from './Navigation.js'

const App = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
