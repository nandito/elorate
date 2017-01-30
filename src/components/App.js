import React, { PropTypes } from 'react';
import Navigation from './Navigation.js'

const App = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
