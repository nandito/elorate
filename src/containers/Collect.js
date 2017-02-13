import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../actions.js'
import Form from '../components/Form.js'
import ItemList from '../components/ItemList.js'
import { download } from '../lib/download'

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchToProps = dispatch => ({
  addItem: name => dispatch(addItem(name)),
  removeItem: id => dispatch(removeItem(id))
})

class Collect extends Component {
  constructor(props) {
    super(props)
    this._add = this._add.bind(this)
    this._remove = this._remove.bind(this)
    this._export = this._export.bind(this)
  }

  _add(item) {
    this.props.addItem(item)
  }

  _remove(id) {
    this.props.removeItem(id)
  }

  _export() {
    download(JSON.stringify(this.props.items), 'item_list.txt', 'text/plain')
  }

  render() {
    return (
      <div className="collect-block display-flex flex-direction-column">
        <Form title={'Collect elements'} submit={this._add} />
        <ItemList
          items={this.props.items}
          removeItem={this._remove}
          exportItems={this._export}
        />
      </div>
    )
  }
}

Collect.propTypes = {
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Collect)
