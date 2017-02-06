import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Collect from '../../src/containers/Collect.js'

describe('<Collect /> container component', () => {
  const store = {
    context: {
      store: {
        subscribe: () => {},
        dispatch: () => {},
        getState: () => ({
          items: []
        })
      }
    },
    childContextTypes: { store: React.PropTypes.object.isRequired }
  }

  it('renders a div with "collect-block" class', () => {
    const connectWithMock = shallow(<Collect />, store)
    const wrapper = connectWithMock.shallow()

    expect(wrapper.find('div.collect-block')).to.have.length(1)
  })

  it('renders a <Form /> with "Collect elements" title and with submit prop', () => {
    const connectWithMock = shallow(<Collect />, store)
    const wrapper = connectWithMock.shallow()

    expect(wrapper.find('Form')).to.have.length(1)
    expect(wrapper.find('Form').prop('title')).to.equal('Collect elements')
    expect(wrapper.find('Form').prop('submit')).to.be.a('function')
  })

  it('renders an <ItemList /> with the proper props', () => {
    const connectWithMock = shallow(<Collect />, store)
    const wrapper = connectWithMock.shallow()

    expect(wrapper.find('ItemList')).to.have.length(1)
    expect(wrapper.find('ItemList').prop('items')).to.deep.equal([])
    expect(wrapper.find('ItemList').prop('removeItem')).to.be.a('function')
  })
})
