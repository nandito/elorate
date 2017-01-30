import { addItem, removeItem, winFight, loseFight, drawFight, skipFight } from '../src/actions'
import { expect } from 'chai'

describe('Actions', () => {
  describe('addItem', () => {
    it('should create an action to add item', () => {
      const itemName = 'test item'
      const expectedAction = {
        type: 'ADD_ITEM',
        data: itemName
      }

      expect(addItem(itemName)).to.eql(expectedAction)
    })
  })

  describe('removeItem', () => {
    it('should create an action to remove item', () => {
      const itemId = '123456'
      const expectedAction = {
        type: 'REMOVE_ITEM',
        data: itemId
      }

      expect(removeItem(itemId)).to.eql(expectedAction)
    })
  })

  describe('winFight', () => {
    it('should create an action to win fight', () => {
      const selfId = '123456'
      const enemyId = '654321'
      const expectedAction = {
        type: 'WIN_FIGHT',
        data: {
          selfId: selfId,
          enemyId: enemyId
        }
      }

      expect(winFight(selfId, enemyId)).to.eql(expectedAction)
    })
  })

  describe('loseFight', () => {
    it('should create an action to lose fight', () => {
      const selfId = '123456'
      const enemyId = '654321'
      const expectedAction = {
        type: 'LOSE_FIGHT',
        data: {
          selfId: selfId,
          enemyId: enemyId
        }
      }

      expect(loseFight(selfId, enemyId)).to.eql(expectedAction)
    })
  })

  describe('drawFight', () => {
    it('should create an action to draw fight', () => {
      const selfId = '123456'
      const enemyId = '654321'
      const expectedAction = {
        type: 'DRAW_FIGHT',
        data: {
          selfId: selfId,
          enemyId: enemyId
        }
      }

      expect(drawFight(selfId, enemyId)).to.eql(expectedAction)
    })
  })

  describe('skipFight', () => {
    it('should create an action to skip fight', () => {
      const selfId = '123456'
      const enemyId = '654321'
      const expectedAction = {
        type: 'SKIP_FIGHT',
        data: {
          selfId: selfId,
          enemyId: enemyId
        }
      }

      expect(skipFight(selfId, enemyId)).to.eql(expectedAction)
    })
  })
})
