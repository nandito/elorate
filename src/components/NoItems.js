import React, { Component, PropTypes } from 'react'
import Import from './Import'

class NoItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      importMode: false
    }
    this._toggleImportMode = this._toggleImportMode.bind(this)
  }

  _toggleImportMode() {
    const currentState = this.state.importMode
    this.setState({ importMode: !currentState })
  }

  render () {
    if (this.state.importMode) {
      return <Import toggle={this._toggleImportMode} bulkImport={this.props.bulkImport} />
    }
    return (
      <div className="row text-center">
        <p>
          <strong>There are no items added.</strong>
        </p>
        <p>
          <small>You can add some above or import previously exported JSON data
          by using the Bulk import button below.</small>
        </p>
        <button className="button-default" onClick={this._toggleImportMode}>
          Bulk import
        </button>
      </div>
    )
  }
}

NoItems.propTypes = {
  bulkImport: PropTypes.func.isRequired
}

export default NoItems
