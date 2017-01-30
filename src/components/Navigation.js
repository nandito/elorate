import React from 'react'
import { Link } from 'react-router'

const Navigation = () => (
  <div className="row">
    Navigation
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/collect'>Collect</Link></li>
      <li><Link to='/rate'>Rate</Link></li>
    </ul>
  </div>
)

export default Navigation
