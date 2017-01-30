export const addItem = name => ( { type: 'ADD_ITEM', data: name } )
export const removeItem = id => ( { type: 'REMOVE_ITEM', data: id } )
export const updateItem = ({ id, name, score, fightCount }) => ({
  type: 'UPDATE_ITEM',
  data: {
    id,
    name,
    score,
    fightCount
  }
})

export const loseFight = (selfId, enemyId) => ({
  type: 'LOSE_FIGHT',
  data: {
    selfId,
    enemyId
  }
})

export const drawFight = (selfId, enemyId) => ({
  type: 'DRAW_FIGHT',
  data: {
    selfId,
    enemyId
  }
})

export const skipFight = (selfId, enemyId) => ({
  type: 'SKIP_FIGHT',
  data: {
    selfId,
    enemyId
  }
})

export const pickElementsToRate = (allItems) => {
  let selectedItems

  if (allItems.length < 2) {
    selectedItems = null
  }
  else {
    selectedItems = allItems.sort((a, b) => (a.fightCount > b.fightCount)).slice(0,2)
  }

  return {
    type: 'PICK_ELEMENTS_TO_RATE',
    data: {
      selectedItems
    }
  }
}
