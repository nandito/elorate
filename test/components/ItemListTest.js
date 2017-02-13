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
        removeAll={() => {}}
        exportItems={() => {}}
      />,
      options(items))

    it('renders a div', () => {
      expect(wrapper.find('.row')).to.have.length(1)
    })

    it('does not render the table', () => {
      expect(wrapper.find('table')).to.have.length(0)
    })

    it('renders a paragraph', () => {
      expect(wrapper.find('p')).to.have.length(1)
      expect(wrapper.find('p').text()).to.equal('There are no items added.')
    })
  })

  describe('if there is at least one item', () => {
    const items = [
      {
        id: '2019ff38-6466-4e51-b084-eb2244113d1f',
        name: 'test',
        score: 1210,
        games: 1,
        wins: 1,
        losses: 0
      }
    ]
    const wrapper = shallow(
      <ItemList
        items={items}
        removeItem={onDelete}
        removeAll={() => {}}
        exportItems={() => {}}
      />,
      options(items))

    it('renders a div', () => {
      expect(wrapper.find('.row')).to.have.length(1)
    })

    it('renders a table with one item', () => {
      expect(wrapper.find('tbody')).to.have.length(1)
      expect(wrapper.find('tbody tr')).to.have.length(1)
    })

    it('renders the proper value to the row', () => {
      expect(wrapper.find('tbody tr td').at(0).text()).to.equal('test')
      expect(wrapper.find('tbody tr td').at(1).text()).to.equal('1210')
      expect(wrapper.find('tbody tr td').at(2).text()).to.equal('1')
      expect(wrapper.find('tbody tr td').at(3).text()).to.equal('1')
      expect(wrapper.find('tbody tr td').at(4).text()).to.equal('0')
    })
  })
})
