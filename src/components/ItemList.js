import React, { PropTypes } from 'react'

const ItemList = ({ items, removeItem, exportItems }) => {
  if (!items.length) {
    return (
      <div className="row">
        <p>
          There are no items added.
        </p>
    </div>
    )
  }

  return (
    <div className="row">
      <div className="col-p-100">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Games</th>
              <th>Wins</th>
              <th>Losses</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) =>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.score}</td>
                <td>{item.games}</td>
                <td>{item.wins}</td>
                <td>{item.losses}</td>
                <td><button className="button-stripped remove-button" onClick={removeItem.bind(null, item.id)}>Remove</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="col-p-100 text-right">
        <button onClick={exportItems} className="button-default">
          Export { items.length > 1 ? 'items' : 'item' }
        </button>
        { items.length > 1
          && <button className="button-default remove-all">Remove all items</button>
        }
      </div>
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  })),
  removeItem: PropTypes.func.isRequired,
  exportItems: PropTypes.func.isRequired
}

export default ItemList
