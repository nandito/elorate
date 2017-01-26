import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions.js'
import Form from '../components/Form.js'

const mapDispatchToProps = dispatch => ({
  addItem: name => dispatch(addItem(name))
})

class CollectForm extends Component {
  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)
  }

  addItem(item) {
    this.props.addItem(item)
  }

  render() {
    return (
      <Form title={'Collect elements'} submit={this.addItem} />
    )
  }
}

CollectForm.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(CollectForm)
