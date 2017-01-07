import React, { PropTypes } from 'react'

const ItemListUI = ({ items, removeItem }) => {
  return (
    <div className="item-list">
      <p style={{
        display: (items.length > 0 ? 'none' : 'block')
      }} >
        There are no items added.
      </p>
      <table
        style={{
          display: (items.length > 0 ? 'block' : 'none')
        }} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td><button onClick={removeItem.bind(null, item.id)}>Remove</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

ItemListUI.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  })),
  removeItem: PropTypes.func.isRequired
}

export default ItemListUI
