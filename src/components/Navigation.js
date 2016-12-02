import React from 'react'
import { Link } from 'react-router'

// Presentational Component
const Navigation = React.createClass({
  render() {
    return (
      <div>
        Navigation
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/collect'>Collect</Link></li>
        </ul>
      </div>
    )
  }
})

export default Navigation