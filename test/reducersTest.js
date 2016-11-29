import { items } from '../src/reducers'
import { expect } from 'chai'

describe('Reducers', () => {
  describe('items', () => {
    const sampleAction = { type: 'ADD_ITEM', data: 'test_current' }

    it('should return empty array by default', () => {
      expect(items(undefined, {})).to.eql([])
    })

    it('should add a new item', () => {
      const resultState = items([], sampleAction)

      expect(resultState).to.be.an('array')
      expect(resultState.length).to.eql(1)
      expect(resultState[0].id).to.be.a('number')
      expect(resultState[0].name).to.equal('test_current')
    })

    it('should add multiple new items', () => {
      const previousState = [ { name: 'test_previous', id: 1480439897765} ]
      const resultState = items(previousState, sampleAction)

      expect(resultState.length).to.eql(2)
      expect(resultState[0].id).to.be.a('number')
      expect(resultState[0].name).to.equal('test_previous')
      expect(resultState[1].id).to.be.a('number')
      expect(resultState[1].name).to.equal('test_current')
    })
  })
})
