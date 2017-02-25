import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { options } from '../helpers'
import Form from '../../src/components/Form.js'

describe('<Form /> component', () => {
  const wrapper = shallow(<Form title={'Collect elements'} submit={() => {}} />, options())

  it('renders form with the given title', () => {
    expect(wrapper.find('h2')).to.have.length(1)
    expect(wrapper.find('h2').text()).to.equal('Collect elements')
  })

  it('renders input field', () => {
    expect(wrapper.find('input[type=\'text\']')).to.have.length(1)
  })

  it('renders submit button', () => {
    expect(wrapper.find('button[type=\'submit\']')).to.have.length(1)
  })
})
