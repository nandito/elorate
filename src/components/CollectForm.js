import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addItem } from '../actions.js'

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchToProps = dispatch => ({
  addItem: name => dispatch(addItem(name))
})

// Presentational Component
const CollectForm = React.createClass({
  render() {
    return (
      <div>
        <h1>Collect data</h1>
        <label>Item</label>
        <input ref="item" type="text"></input>
        <button onClick={this.onSave}>Add</button>
      </div>
    )
  },

  onSave(e) {
    const item = ReactDOM.findDOMNode(this.refs.item)
    this.props.addItem(item.value)
    item.value = ''
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectForm)
