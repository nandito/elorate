import React, { PropTypes } from 'react'

const RateView = ({ items, win, draw, skip }) => {
  if (items.length === 0) {
    return (
      <div className="row text-center">
        <h2>Oh no!</h2>
        <div>There are not enough items. Enter some on the collect page.</div>
      </div>
    )
  }

  return (
    <div className="row">
      <h2 className="text-center">Choose!</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-pl-50 text-center">
            <h4>{item.name}</h4>
            <button onClick={win.bind(null, item.id)} className="button-outlined win-button">This wins</button>
          </div>
        ))}
      </div>
      <div className="display-flex flex-align-items-center flex-justify-content-center control">
        <button onClick={draw} className="button-outlined">Draw</button>
        <button onClick={skip} className="button-outlined">Skip</button>
      </div>
    </div>
  )
}

RateView.propTypes = {
  items: PropTypes.array.isRequired,
  win: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired
}

export default RateView
