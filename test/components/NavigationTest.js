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

  it('renders 3 links', () => {
    expect(wrapper.find('li')).to.have.length(3)
    expect(wrapper.find(Link)).to.have.length(3)
  })

  it('renders link to home', () => {
    expect(wrapper.find(Link).at(0).render().text()).to.equal('Home')
  })

  it('renders link to collect', () => {
    expect(wrapper.find(Link).at(1).render().text()).to.equal('Collect')
  })

  it('renders link to fight', () => {
    expect(wrapper.find(Link).at(2).render().text()).to.equal('Fight')
  })
})
