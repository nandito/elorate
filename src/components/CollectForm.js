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
class CollectForm extends React.Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Collect data</h1>
        <form onSubmit={this.onSave}>
          <label>
            Item
            <input ref="item" type="text"></input>
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }

  onSave(e) {
    const item = ReactDOM.findDOMNode(this.refs.item)

    e.preventDefault()
    this.props.addItem(item.value)
    item.value = ''
  }
}

CollectForm.propTypes = {
  items: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectForm)
