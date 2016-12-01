import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Link } from 'react-router'

import Navigation from '../../src/components/Navigation.js'

describe('<Navigation /> component', () => {
  const wrapper = shallow(<Navigation />)

  it('renders a div with an unordered list', () => {
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.find('ul')).to.have.length(1)
  })

  it('renders 2 links', () => {
    expect(wrapper.find('li')).to.have.length(2)
    expect(wrapper.find(Link)).to.have.length(2)
  })

  it('renders link to home', () => {
    expect(wrapper.find(Link).at(0).render().text()).to.equal('Home')
  })

  it('renders link to collect', () => {
    expect(wrapper.find(Link).at(1).render().text()).to.equal('Collect')
  })
})
