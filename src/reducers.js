export const items = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat([
        {
          name: action.data,
          id: +new Date,
          score: 1200
        }
      ])
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.data)
    default:
      return state || []
  }
}
