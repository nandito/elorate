import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import RateView from '../../src/components/RateView.js'

describe('<RateView /> component', () => {
  describe('no items', () => {
    it('renders a div with a h2 and a not enought item text', () => {
      const wrapper = shallow(<RateView
        items={[]}
        win={()=>{}}
        draw={()=>{}}
        skip={()=>{}}
      />)

      expect(wrapper.find('div.row')).to.have.length(1)
      expect(wrapper.find('h2').text()).to.equal('Oh no!')
      expect(wrapper.find('div').at(1).text()).to.equal('There are not enough items. Enter some on the collect page.')
    })
  })

  describe('has items', () => {
    const testItems = [
      {
        id: '1',
        name: 'one'
      },
      {
        id: '2',
        name: 'two'
      }
    ]
    const wrapper = shallow(<RateView
      items={testItems}
      win={()=>{}}
      draw={()=>{}}
      skip={()=>{}}
    />)

    it('renders two items with win button', () => {
      expect(wrapper.find('h4')).to.have.length(2)
      expect(wrapper.find('h4').at(0).text()).to.equal(testItems[0].name)
      expect(wrapper.find('h4').at(1).text()).to.equal(testItems[1].name)
      expect(wrapper.find('button.win-button')).to.have.length(2)
    })

    it('renders draw and skip buttons', () => {
      expect(wrapper.find('div.control button')).to.have.length(2)
      expect(wrapper.find('div.control button').at(0).text()).to.equal('Draw')
      expect(wrapper.find('div.control button').at(1).text()).to.equal('Skip')
    })
  })
})
