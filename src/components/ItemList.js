import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions.js'

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id))
})

class ItemList extends React.Component {
  render() {
    const { items } = this.props

    const onDelete = (id) => {
      this.props.removeItem(id)
    }

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
                <td><button onClick={onDelete.bind(null, item.id)}>Remove</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
