import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions.js'
import ItemListUI from '../components/ItemList.js'

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id))
})

class ItemList extends Component {
  render() {
    const onDelete = (id) => {
      this.props.removeItem(id)
    }

    return (
      <ItemListUI
        items={this.props.items}
        removeItem={onDelete}
      />
    )
  }
}

ItemList.propTypes = {
  removeItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
