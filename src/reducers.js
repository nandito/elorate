export const items = (state, action) => {
  const { type, data } = action
  let winner, loser
  switch (type) {
    case 'ADD_ITEM':
      return state.concat([
        {
          name: data,
          id: +new Date,
          score: 1200,
          fightCount: 0
        }
      ])
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== data)
    case 'WIN_FIGHT':
      // TODO: find by id, increment fight count
      winner = state.filter(i => i.id === data.selfId)
      loser = state.filter(i => i.id === data.enemyId)

      winner.fightCount += 1
      loser.fightCount += 1
      console.log(winner, loser)
      return state.merge(winner, loser)
    default:
      return state || []
  }
}

export const pickedItems = (state = [], action) => {
  const { type, data } = action

  switch (type) {
    case 'PICK_ELEMENTS_TO_RATE':
      return data.selectedItems || state
    default:
      return state
  }
}
