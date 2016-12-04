import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ items }) => ({
  items
})

const ItemList = ({ items }) => {
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
          </tr>
        </thead>
        <tbody>
          {items.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps)(ItemList)
