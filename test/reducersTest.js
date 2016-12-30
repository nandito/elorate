import { items } from '../src/reducers'
import { expect } from 'chai'

describe('Reducers', () => {
  describe('items', () => {
    it('should return empty array by default', () => {
      expect(items(undefined, {})).to.eql([])
    })

    describe('ADD_ITEM', () => {
      const sampleAction = { type: 'ADD_ITEM', data: 'test_current' }

      it('should add a new item', () => {
        const resultState = items([], sampleAction)

        expect(resultState).to.be.an('array')
        expect(resultState.length).to.eql(1)
        expect(resultState[0].id).to.be.a('number')
        expect(resultState[0].name).to.equal('test_current')
        expect(resultState[0].score).to.equal(1200)
      })

      it('should add multiple new items', () => {
        const previousState = [ { name: 'test_previous', id: 1480439897765, score: 1200 } ]
        const resultState = items(previousState, sampleAction)

        expect(resultState.length).to.eql(2)
        expect(resultState[0].id).to.be.a('number')
        expect(resultState[0].name).to.equal('test_previous')
        expect(resultState[0].score).to.equal(1200)
        expect(resultState[1].id).to.be.a('number')
        expect(resultState[1].name).to.equal('test_current')
        expect(resultState[1].score).to.equal(1200)
      })
    })

    describe('REMOVE_ITEM', () => {
      const sampleAction = { type: 'REMOVE_ITEM', data: 1480439897765 }

      it('should remove an item', () => {
        const resultState = items([
          { name: 'test_previous1', id: 1480439897765, score: 1200 },
          { name: 'test_previous2', id: 1480439897770, score: 1200 }
        ], sampleAction)

        expect(resultState).to.be.an('array')
        expect(resultState.length).to.eql(1)
        expect(resultState[0].id).to.be.a('number')
        expect(resultState[0].name).to.equal('test_previous2')
        expect(resultState[0].score).to.equal(1200)
      })

    })
  })
})
