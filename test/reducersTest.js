import { items } from '../src/reducers'
import { expect } from 'chai'

describe('Reducers', () => {
  describe('items', () => {
    it('should return empty array by default', () => {
      expect(items(undefined, {})).to.eql([])
    })

    describe('ADD_ITEM', () => {
      const sampleAction = { type: 'ADD_ITEM', payload: 'test_current' }

      it('should add a new item', () => {
        const resultState = items([], sampleAction)

        expect(resultState).to.be.an('array')
        expect(resultState.length).to.eql(1)
        expect(resultState[0].id).to.be.a('string')
        expect(resultState[0].name).to.equal('test_current')
        expect(resultState[0].score).to.equal(1200)
        expect(resultState[0].games).to.equal(0)
        expect(resultState[0].wins).to.equal(0)
        expect(resultState[0].losses).to.equal(0)
      })

      it('should add multiple new items', () => {
        const previousState = [{
          id: 'bdf2641c-5a51-4000-96fc-60fcd8dd532a',
          name: 'test_previous',
          score: 1200,
          games: 0,
          wins: 0,
          losses: 0
        }
        ]
        const resultState = items(previousState, sampleAction)

        expect(resultState.length).to.eql(2)
        expect(resultState[0].id).to.be.a('string')
        expect(resultState[0].name).to.equal('test_previous')
        expect(resultState[0].score).to.equal(1200)
        expect(resultState[0].games).to.equal(0)
        expect(resultState[1].id).to.be.a('string')
        expect(resultState[1].name).to.equal('test_current')
        expect(resultState[1].score).to.equal(1200)
        expect(resultState[1].games).to.equal(0)
      })
    })

    describe('REMOVE_ITEM', () => {
      it('should remove an item', () => {
        const sampleAction = { type: 'REMOVE_ITEM', payload: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a' }
        const resultState = items([
          { name: 'test_previous1', id: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a', score: 1200 },
          { name: 'test_previous2', id: 'bbbbbbbb-5a51-4000-96fc-60fcd8dd532b', score: 1200 }
        ], sampleAction)

        expect(resultState).to.be.an('array')
        expect(resultState.length).to.eql(1)
        expect(resultState[0].id).to.be.a('string')
        expect(resultState[0].name).to.equal('test_previous2')
        expect(resultState[0].score).to.equal(1200)
      })
    })

    describe('REMOVE_ALL', () => {
      it('should remove all items', () => {
        const sampleAction = { type: 'REMOVE_ALL' }
        const resultState = items([
          { name: 'test_previous1', id: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a', score: 1200 },
          { name: 'test_previous2', id: 'bbbbbbbb-5a51-4000-96fc-60fcd8dd532b', score: 1200 }
        ], sampleAction)

        expect(resultState).to.be.an('array')
        expect(resultState.length).to.eql(0)
      })
    })

    describe('UPDATE_ITEM', () => {
      it('should update an item', () => {
        const sampleAction = {
          type: 'UPDATE_ITEM',
          payload: {
            id: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a',
            name: 'test new name',
            score: 1300
          }
        }
        const resultState = items([
          { name: 'test_previous1', id: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a', score: 1200 },
          { name: 'test_previous2', id: 'bbbbbbbb-5a51-4000-96fc-60fcd8dd532b', score: 1200 }
        ], sampleAction)

        expect(resultState.length).to.eql(2)
        expect(resultState[0].name).to.equal('test new name')
        expect(resultState[0].score).to.equal(1300)
        expect(resultState[1].name).to.equal('test_previous2')
        expect(resultState[1].score).to.equal(1200)
      })
    })

    describe('WIN, SKIP, UPDATE', () => {
      it('should update the given items\' data', () => {
        const sampleAction = {
          type: 'WIN',
          payload: {
            player1: {
              id: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a',
              name: 'test a',
              score: 1300,
              games: 1,
              wins: 1,
              losses: 0
            },
            player2: {
              id: 'bbbbbbbb-5a51-4000-96fc-60fcd8dd532a',
              name: 'test b',
              score: 1300,
              games: 1,
              wins: 0,
              losses: 1
            }
          }
        }
        const previousState = [
          {
            name: 'test a',
            id: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a',
            score: 1200,
            games: 0,
            wins: 0,
            losses: 0
          },
          {
            name: 'test b',
            id: 'bbbbbbbb-5a51-4000-96fc-60fcd8dd532a',
            score: 1200,
            games: 0,
            wins: 0,
            losses: 0
          }
        ]
        const expectedState = [
          {
            name: 'test a',
            id: 'aaaaaaaa-5a51-4000-96fc-60fcd8dd532a',
            score: 1300,
            games: 1,
            wins: 1,
            losses: 0
          },
          {
            name: 'test b',
            id: 'bbbbbbbb-5a51-4000-96fc-60fcd8dd532a',
            score: 1300,
            games: 1,
            wins: 0,
            losses: 1
          }
        ]
        const resultState = items(previousState, sampleAction)

        expect(resultState).to.deep.equal(expectedState)
      })
    })
  })
})
