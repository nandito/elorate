import React from 'react'

export const options = (items) => {
  const store = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({
      items: items
    })
  }

  return {
    context: { store },
    childContextTypes: { store: React.PropTypes.object.isRequired }
  }
}
