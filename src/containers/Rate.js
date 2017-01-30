import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RateView from '../components/RateView'
import { pickElementsToRate, winFight } from '../actions'

const mapStateToProps = ({ items, pickedItems }) => ({
  items,
  pickedItems
})

const mapDispatchToProps = dispatch => ({
  getItems: items => dispatch(pickElementsToRate(items)),
  winFight: (selfId, enemyId) => dispatch(winFight(selfId, enemyId))
})


// TODO:
// Shows 2 items - the ones with smallest fight_count
// Items has 4 actions:
// - win
// - lose
// - draw
// - skip

class Rate extends Component {
  componentWillMount() {
    this.props.getItems(this.props.items)
  }

  render() {
    return (
      <div className="row">
        <h1>Fight!</h1>
        <RateView items={this.props.pickedItems} win={this.props.winFight} />
      </div>
    )
  }
}

Rate.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  pickedItems: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Rate)
