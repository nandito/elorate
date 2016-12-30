import { addItem, removeItem } from '../src/actions'
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
})
