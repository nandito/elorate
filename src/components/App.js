import React from 'react';
import Navigation from './Navigation.js'

const App = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default App
