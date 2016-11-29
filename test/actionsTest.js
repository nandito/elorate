import { addItem } from '../src/actions'
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
})
