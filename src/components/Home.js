import React from 'react'
import { Link } from 'react-router'

const Home = () => (
  <div>
    <h1>ELO rate app</h1>
    <p>Rank items by using <a href="https://en.wikipedia.org/wiki/Elo_rating_system">ELO rating system</a>.</p>

    <h3>Usage</h3>
    <ol>
      <li>Add some items on the <Link to='/collect'>Collect</Link> page.</li>
      <li>Decide between items on the <Link to='/rate'>Rate</Link> page.</li>
      <li>You can check the score changes on the <Link to='/collect'>Collect</Link> page.</li>
    </ol>

    <h3>Features</h3>
    <ul>
      <li>Add and rank items using ELO algorithm</li>
      <li>Keep items in local storage</li>
      <li>Export and import items from and to local storage</li>
      <li>Remove items</li>
    </ul>

    <h3>Technical details</h3>
    <ul>
      <li>This is a <a href="https://facebook.github.io/react/">React</a> app with <a href="http://redux.js.org/">Redux</a> state container and with <a href="http://pavilion.io/">Pavlilion</a> CSS framework.</li>
      <li>For development it uses <a href="https://github.com/tapio/live-server">Live Server</a> with <a href="https://github.com/substack/watchify">watchify</a></li>
      <li>For testing it uses <a href="http://mochajs.org/">Mocha</a> test framework + <a href="http://chaijs.com/">Chai</a> assertion library + <a href="http://airbnb.io/enzyme/index.html">Enzyme</a> test utility</li>
    </ul>

    <p>Find the code on <a href="https://github.com/nandito/elorate">GitHub</a></p>
    <small>I created this app to practice the technologies above.</small>
  </div>
)

export default Home
