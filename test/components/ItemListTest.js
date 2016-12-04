import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { options } from '../helpers'

import ItemList from '../../src/components/ItemList.js'

describe('<ItemList /> component', () => {
  describe('if there is no item', () => {
    it('renders a div with an empty unordered list', () => {
      const items = []
      const wrapper = shallow(<ItemList items={items} />, options(items))
      const _wrapper = wrapper.shallow()

      expect(_wrapper.find('.item-list')).to.have.length(1)
      expect(_wrapper.find('ul')).to.have.length(1)
      expect(_wrapper.find('li')).to.have.length(0)
    })
  })

  describe('if there are items', () => {
    it('renders a div with a unordered list and one item', () => {
      const items = [
        {
          id: 12345678,
          name: 'test'
        }
      ]
      const wrapper = shallow(<ItemList />, options(items))
      const _wrapper = wrapper.shallow()

      expect(_wrapper.find('.item-list')).to.have.length(1)
      expect(_wrapper.find('ul')).to.have.length(1)
      expect(_wrapper.find('li')).to.have.length(1)
      expect(_wrapper.find('li').text()).to.equal('test')
    })

    it('renders a div with a unordered list and two items', () => {
      const items = [
        {
          id: 12345678,
          name: 'test'
        },
        {
          id: 87654321,
          name: 'test2'
        }
      ]
      const wrapper = shallow(<ItemList />, options(items))
      const _wrapper = wrapper.shallow()

      expect(_wrapper.find('.item-list')).to.have.length(1)
      expect(_wrapper.find('ul')).to.have.length(1)
      expect(_wrapper.find('li')).to.have.length(2)
      expect(_wrapper.find('li').at(0).text()).to.equal('test')
      expect(_wrapper.find('li').at(1).text()).to.equal('test2')
    })
  })
})
