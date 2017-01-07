import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { options } from '../helpers'

import ItemList from '../../src/components/ItemList.js'

describe('<ItemList /> component', () => {
  const onDelete = () => {}

  describe('if there is no item', () => {
    const items = []
    const wrapper = shallow(
      <ItemList
        items={items}
        removeItem={onDelete}
      />,
      options(items))
    const _wrapper = wrapper.shallow()

    it('renders a div', () => {
      expect(_wrapper.find('.item-list')).to.have.length(1)
    })

    it('does not render a tbody element', () => {
      expect(_wrapper.find('tbody tr')).to.have.length(0)
    })

    it('renders a paragraph', () => {
      expect(_wrapper.find('p')).to.have.length(1)
      expect(_wrapper.find('p').text()).to.equal('There are no items added.')
    })
  })

  describe('if there is one item', () => {
    const items = [
      {
        id: 12345678,
        name: 'test',
        score: 1200
      }
    ]
    const wrapper = shallow(
      <ItemList
        items={items}
        removeItem={onDelete}
      />,
      options(items))
    const _wrapper = wrapper.shallow()

    it('renders a div', () => {
      expect(_wrapper.find('.item-list')).to.have.length(1)
    })

    it('renders a table with one item', () => {
      expect(_wrapper.find('tbody')).to.have.length(1)
      expect(_wrapper.find('tbody tr')).to.have.length(1)
    })

    it('renders the proper value to the row', () => {
      expect(_wrapper.find('tbody tr td').at(0).text()).to.equal('test')
      expect(_wrapper.find('tbody tr td').at(1).text()).to.equal('1200')
    })

  })
  describe('if there are two items', () => {
    const items = [
      {
        id: 12345678,
        name: 'test',
        score: 1200
      },
      {
        id: 87654321,
        name: 'test2',
        score: 1200
      }
    ]
    const wrapper = shallow(
      <ItemList
        items={items}
        removeItem={onDelete}
      />,
      options(items))
    const _wrapper = wrapper.shallow()

    it('renders a div', () => {
      expect(_wrapper.find('.item-list')).to.have.length(1)
    })

    it('renders a table with two items', () => {
      expect(_wrapper.find('tbody')).to.have.length(1)
      expect(_wrapper.find('tbody tr')).to.have.length(2)
    })

    it('renders the proper values to the two rows', () => {
      expect(_wrapper.find('tbody tr').at(0).find('td').at(0).text()).to.equal('test')
      expect(_wrapper.find('tbody tr').at(0).find('td').at(1).text()).to.equal('1200')
      expect(_wrapper.find('tbody tr').at(1).find('td').at(0).text()).to.equal('test2')
      expect(_wrapper.find('tbody tr').at(1).find('td').at(1).text()).to.equal('1200')
    })
  })
})
