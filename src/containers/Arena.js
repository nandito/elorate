import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ items }) => ({
  items
})

// TODO:
// Shows 2 items - the ones with smallest fight_count
// Items has 4 actions:
// - win
// - lose
// - draw
// - skip

class Arena extends React.Component {
  render() {
    return (
      <div>
        <div className="item-1">
          Name
          <button>this</button>
        </div>
        <div className="item-2">
          Name
          <button>this</button>
        </div>
        <div className="control">
          <button>draw</button>
          <button>skip</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Arena)
