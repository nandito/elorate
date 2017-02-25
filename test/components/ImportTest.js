import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Import from '../../src/components/Import.js'

describe('<Import /> component', () => {
  const wrapper = shallow(
    <Import
      toggle={() => {}}
      bulkImport={() => {}}
    />)

  it('renders a textarea', () => {
    expect(wrapper.find('textarea')).to.have.length(1)
  })

  it('renders buttons for import and cancel', () => {
    expect(wrapper.find('button')).to.have.length(2)
    expect(wrapper.find('button').at(0).text()).to.equal('Import')
    expect(wrapper.find('button').at(1).text()).to.equal('Cancel')
  })
})
