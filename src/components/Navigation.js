import React from 'react'
import { Link } from 'react-router'

const Navigation = () => (
  <div className="row-flex flex-justify-content-start">
    <Link className="button-stripped" to='/'>Home</Link>
    <Link className="button-stripped" to='/collect'>Collect</Link>
    <Link className="button-stripped" to='/rate'>Rate</Link>
  </div>
)

export default Navigation
