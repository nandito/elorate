import uuid from 'uuid/v4'

export const items = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_ITEM':
      return state.concat([
        {
          name: payload,
          id: uuid(),
          score: 1200,
          games: 0,
          wins:0,
          losses: 0
        }
      ])
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== payload)
    case 'REMOVE_ALL':
      return []
    case 'DRAW':
    case 'SKIP':
    case 'WIN':
      return state.map(item => {
        if (item.id === payload.player1.id) {
          return Object.assign({}, item, {
            score: payload.player1.score,
            wins: payload.player1.wins,
            losses: payload.player1.losses,
            games: payload.player1.games
          })
        }
        if (item.id === payload.player2.id) {
          return Object.assign({}, item, {
            score: payload.player2.score,
            wins: payload.player2.wins,
            losses: payload.player2.losses,
            games: payload.player2.games
          })
        }
        return item
      })
    case 'UPDATE_ITEM':
      return state.map((item) => {
        if (item.id === payload.id) {
          return Object.assign({}, item, {
            name: payload.name,
            score: payload.score,
            games: payload.games
          })
        }
        return item
      })
    default:
      return state || []
  }
}

export const pickedItems = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case 'PICK_ELEMENTS_TO_RATE':
      return payload.selectedItems || state
    default:
      return state
  }
}
