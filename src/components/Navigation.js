import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {
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
}

export default Navigation
