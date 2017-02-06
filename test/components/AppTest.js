import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../../src/components/App.js'

describe('<App /> component', () => {
  const wrapper = shallow(<App />)

  it('renders a div container', () => {
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.find('div').hasClass('container')).to.be.true
  })

  it('renders the Navigation', () => {
    expect(wrapper.find('Navigation')).to.have.length(1)
  })

  it('renders the children', () => {
    const wrapperWithChildren = shallow(<App><div className="test">Children</div></App>)

    expect(wrapperWithChildren.find('div.test')).to.have.length(1)
    expect(wrapperWithChildren.find('div.test').text()).to.equal('Children')
  })
})
