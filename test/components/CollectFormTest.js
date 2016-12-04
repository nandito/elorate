import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { options } from '../helpers'

import CollectForm from '../../src/components/CollectForm.js'

describe('<CollectForm /> component', () => {
  const wrapper = shallow(<CollectForm />, options())
  const _wrapper = wrapper.shallow()

  it('renders Collect data title', () => {
    expect(_wrapper.find('h1')).to.have.length(1)
    expect(_wrapper.find('h1').text()).to.equal('Collect data')
  })

  it('renders input field', () => {
    expect(_wrapper.find('input[type=\'text\']')).to.have.length(1)
  })

  it('renders submit button', () => {
    expect(_wrapper.find('button')).to.have.length(1)
  })
})
