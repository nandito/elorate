import { addItem, removeItem, updateItem, win, draw, skip, pickElementsToRate } from '../src/actions'
import { expect } from 'chai'

describe('Actions', () => {
  let player1, player2

  beforeEach(() => {
    player1 = {
      id: '123',
      name: 'a',
      score: 1200,
      games: 0,
      wins: 0,
      losses: 0
    }
    player2 = {
      id: '124',
      name: 'b',
      score: 1200,
      games: 0,
      wins: 0,
      losses: 0
    }
  })

  describe('addItem', () => {
    it('should create an action to add item', () => {
      const itemName = 'test item'
      const expectedAction = {
        type: 'ADD_ITEM',
        payload: itemName
      }

      expect(addItem(itemName)).to.eql(expectedAction)
    })
  })

  describe('removeItem', () => {
    it('should create an action to remove item', () => {
      const itemId = '123456'
      const expectedAction = {
        type: 'REMOVE_ITEM',
        payload: itemId
      }

      expect(removeItem(itemId)).to.eql(expectedAction)
    })
  })

  describe('updateItem', () => {
    it('should create an action to remove item', () => {
      const itemDetails = {
        id: '123',
        name: 'new name',
        score: 1234
      }
      const expectedAction = {
        type: 'UPDATE_ITEM',
        payload: itemDetails
      }

      expect(updateItem(itemDetails)).to.eql(expectedAction)
    })
  })

  describe('win', () => {
    it('should create an action to win', () => {
      const winner = {
        id: '123',
        name: 'a',
        score: 1216,
        games: 1,
        wins: 1,
        losses: 0
      }
      const loser = {
        id: '124',
        name: 'b',
        score: 1184,
        games: 1,
        wins: 0,
        losses: 1
      }

      const expectedAction = {
        type: 'WIN',
        payload: {
          player1: winner,
          player2: loser
        }
      }

      expect(win(player1, player2)).to.eql(expectedAction)
    })
  })

  describe('draw', () => {
    it('should create an action to draw', () => {
      const draw1 = {
        id: '123',
        name: 'a',
        score: 1200,
        games: 1,
        wins: 0,
        losses: 0
      }
      const draw2 = {
        id: '124',
        name: 'b',
        score: 1200,
        games: 1,
        wins: 0,
        losses: 0
      }

      const expectedAction = {
        type: 'DRAW',
        payload: {
          player1: draw1,
          player2: draw2
        }
      }

      expect(draw(player1, player2)).to.eql(expectedAction)
    })
  })

  describe('skip', () => {
    it('should create an action to skip', () => {
      const skip1 = {
        id: '123',
        name: 'a',
        score: 1200,
        games: 1,
        wins: 0,
        losses: 0
      }
      const skip2 = {
        id: '124',
        name: 'b',
        score: 1200,
        games: 1,
        wins: 0,
        losses: 0
      }

      const expectedAction = {
        type: 'SKIP',
        payload: {
          player1: skip1,
          player2: skip2
        }
      }

      expect(skip(player1, player2)).to.eql(expectedAction)
    })
  })

  describe('pickElementsToRate', () => {
    it('should create an action to present null if there are less than 2 items', () => {
      const items = []
      const expectedAction = {
        type: 'PICK_ELEMENTS_TO_RATE',
        payload: {
          selectedItems: null
        }
      }

      expect(pickElementsToRate(items)).to.eql(expectedAction)
    })

    it('should create an action to pick 2 elements with the lowest games count', () => {
      const items = [
        player1,
        player2,
        {
          id: '125',
          name: 'c',
          score: 1200,
          games: 2,
          wins: 0,
          losses: 0
        },
        {
          id: '126',
          name: 'd',
          score: 1200,
          games: 3,
          wins: 0,
          losses: 0
        }
      ]
      const selectedItems = [ player1, player2 ]
      const expectedAction = {
        type: 'PICK_ELEMENTS_TO_RATE',
        payload: {
          selectedItems
        }
      }

      expect(pickElementsToRate(items)).to.eql(expectedAction)
    })
  })
})
