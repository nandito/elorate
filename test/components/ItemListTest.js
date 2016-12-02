import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ItemList from '../../src/components/ItemList.js'

describe('<ItemList /> component', () => {
  const store = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({
      items: []
    })
  }

  const options = {
    context: { store },
    childContextTypes: { store: React.PropTypes.object.isRequired }
  }

  describe('if there is no item', () => {
    it('renders a div with a unordered list', () => {
      const wrapper = shallow(<ItemList />, options)
      expect(wrapper.find('.item-list')).to.have.length(1)
      expect(wrapper.find('ul')).to.have.length(1)
      expect(wrapper.find('li')).to.have.length(0)
    })
  })

  describe('if there are items', () => {
  })
})
