import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ items }) => ({
  items
})

const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div className="item-list">
      <ul>
        {items.map((item) =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(ItemList)
