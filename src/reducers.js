export const items = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let newItem = {
        name: action.data,
        id: +new Date
      }
      return state.concat([newItem])
    default:
      return state || []
  }
}
