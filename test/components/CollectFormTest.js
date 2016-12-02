import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import CollectForm from '../../src/components/CollectForm.js'

describe('<CollectForm /> component', () => {
  const wrapper = shallow(<CollectForm />)

  it('renders Collect data title', () => {
    expect(wrapper.find('h1')).to.have.length(1)
    expect(wrapper.find('h1').text()).to.equal('Collect data')
  })

  it('renders input field', () => {
    expect(wrapper.find('input[type=\'text\']')).to.have.length(1)
  })

  it('renders submit button', () => {
    expect(wrapper.find('button')).to.have.length(1)
  })
})