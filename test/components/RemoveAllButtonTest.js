import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import RemoveAllButton from '../../src/components/RemoveAllButton.js'

describe('<RemoveAllButton /> component', () => {

  it('renders a button by default', () => {
    const wrapper = shallow(<RemoveAllButton removeAll={() => {}} />)

    expect(wrapper.find('button')).to.have.length(1)
    expect(wrapper.find('button').text()).to.equal('Remove all items')
  })

  it('renders a div with 2 buttons if remove flow is triggered', () => {
    const wrapper = shallow(<RemoveAllButton removeAll={() => {}} />)
    wrapper.setState({triggered: true})

    expect(wrapper.find('div.button-group')).to.have.length(1)
    expect(wrapper.find('button')).to.have.length(2)
    expect(wrapper.find('button').at(0).text()).to.equal('Remove!')
    expect(wrapper.find('button').at(1).text()).to.equal('Keep!')
  })
})
