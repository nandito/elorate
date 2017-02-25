import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Rate from '../../src/containers/Rate.js'

describe('<Rate /> container component', () => {
  const samplePickedItems = [
    {
      'name': 'a',
      'id': '3ee72e45-7999-4bec-a8d4-6101d044e662',
      'score': 1200,
      'games': 0,
      'wins': 0,
      'losses': 0
    },
    {
      'name': 'b',
      'id': 'd6d735b8-2cb8-46a9-b99b-7f3c930b98f4',
      'score': 1200,
      'games': 0,
      'wins': 0,
      'losses': 0
    }
  ]
  const store = {
    context: {
      store: {
        subscribe: () => {},
        dispatch: () => {},
        getState: () => ({
          items: [],
          pickedItems: samplePickedItems
        })
      }
    },
    childContextTypes: { store: React.PropTypes.object.isRequired }
  }

  it('renders a RateView with props', () => {
    const connectWithMock = shallow(<Rate />, store)
    const wrapper = connectWithMock.shallow()

    expect(wrapper.find('RateView')).to.have.length(1)
    expect(wrapper.find('RateView').prop('items')).to.deep.equal(samplePickedItems)
    expect(wrapper.find('RateView').prop('win')).to.be.a('function')
    expect(wrapper.find('RateView').prop('draw')).to.be.a('function')
    expect(wrapper.find('RateView').prop('skip')).to.be.a('function')
  })
})
