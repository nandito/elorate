import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import NoItems from '../../src/components/NoItems.js'

describe('<NoItems /> component', () => {
  describe('if bulk import mode is false', () => {
    const wrapper = shallow(
      <NoItems
        bulkImport={() => {}}
      />
    )

    it('renders strong paragraph with "There are no items added." text', () => {
      expect(wrapper.find('strong')).to.have.length(1)
      expect(wrapper.find('strong').text()).to.equal('There are no items added.')
    })

    it('renders a button to bulk import', () => {
      expect(wrapper.find('button')).to.have.length(1)
      expect(wrapper.find('button').text()).to.equal('Bulk import')
    })
  })

  describe('if bulk import mode is true', () => {
    const wrapper = shallow(
      <NoItems
        bulkImport={() => {}}
      />
    )
    wrapper.setState({importMode: true})

    it('renders <Import /> component', () => {
      expect(wrapper.find('Import')).to.have.length(1)
    })

    it('does not render "There are no items added." text', () => {
      expect(wrapper.find('p')).to.have.length(0)
      expect(wrapper.find('strong')).to.have.length(0)
    })
  })

})
