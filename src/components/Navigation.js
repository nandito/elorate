import React from 'react'
import { Link } from 'react-router'

const Navigation = () => (
  <div className="row-flex flex-justify-content-start">
    <Link className="button-stripped" to='/elorate'>Home</Link>
    <Link className="button-stripped" to='/elorate/collect'>Collect</Link>
    <Link className="button-stripped" to='/elorate/rate'>Rate</Link>
  </div>
)

export default Navigation
