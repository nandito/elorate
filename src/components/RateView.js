import React, { PropTypes } from 'react'

const RateView = ({ items, win }) => {
  if (items.length === 0) {
    return (
      <div>There are not enough items</div>
    )
  }

  return (
    <div>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-pl-50 text-center">
            <h4>{item.name}</h4>
            <button onClick={win.bind(this)} className="button-outlined">This wins</button>
          </div>
        ))}
      </div>
      <div className="display-flex flex-align-items-center flex-justify-content-center control">
        <button className="button-outlined">Draw</button>
        <button className="button-outlined">Skip</button>
      </div>
    </div>
  )
}

RateView.propTypes = {
  items: PropTypes.array.isRequired
}

export default RateView
