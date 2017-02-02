import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RateView from '../components/RateView'
import { pickElementsToRate, win, draw, skip } from '../actions'

const mapStateToProps = ({ items, pickedItems }) => ({
  items,
  pickedItems
})

const mapDispatchToProps = dispatch => ({
  getItems: items => dispatch(pickElementsToRate(items)),
  win: (winner, loser) => dispatch(win(winner, loser)),
  draw: (player1, player2) => dispatch(draw(player1, player2)),
  skip: (player1, player2) => dispatch(skip(player1, player2))
})

class Rate extends Component {
  constructor(props) {
    super(props)
    this._win = this._win.bind(this)
    this._draw = this._draw.bind(this)
    this._skip = this._skip.bind(this)
  }

  componentWillMount() {
    this.props.getItems(this.props.items)
  }

  _win(winnerId) {
    const loser = this.props.pickedItems.filter(i => i.id !== winnerId)[0]
    const winner = this.props.pickedItems.filter(i => i.id === winnerId)[0]
    this.props.win(winner, loser)
    this.props.getItems(this.props.items)
  }

  _draw() {
    const { pickedItems, draw, getItems } = this.props
    draw(pickedItems[0], pickedItems[1])
    getItems(this.props.items)
  }

  _skip() {
    const { pickedItems, skip, getItems } = this.props
    skip(pickedItems[0], pickedItems[1])
    getItems(this.props.items)
  }

  render() {
    return (
      <RateView
        items={this.props.pickedItems}
        win={this._win}
        draw={this._draw}
        skip={this._skip}
      />
    )
  }
}

Rate.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  pickedItems: PropTypes.array.isRequired,
  win: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Rate)
