export const items = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let newItem = {
        name: action.data,
        id: +new Date,
        score: 1200
      }
      return state.concat([newItem])
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.data)
    default:
      return state || []
  }
}
