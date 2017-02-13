import React, { PropTypes, Component } from 'react'

class RemoveAllButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      triggered: false
    }
    this._trigger = this._trigger.bind(this)
  }

  _trigger() {
    const currentState = this.state.triggered
    this.setState({ triggered: !currentState })
  }

  render() {
    if (this.state.triggered) {
      return (
        <div className="button-group">
          <button onClick={this.props.removeAll} className="button-default remove-all">Remove!</button>
          <button onClick={this._trigger} className="button-default">Keep!</button>
        </div>
      )
    }

    return (
      <button onClick={this._trigger} className="button-default remove-all">Remove all items</button>
    )
  }
}

RemoveAllButton.propTypes = {
  removeAll: PropTypes.func.isRequired
}

export default RemoveAllButton
