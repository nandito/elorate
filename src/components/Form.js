import React, { PropTypes } from 'react';

const Form = ({ title, submit }) => {
  let input

  const onSubmit = (e) => {
    e.preventDefault()
    submit(input.value)
    input.value = ''
  }

  return (
    <div className="flex-justify-content-center row-flex">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="input-with-button button-right">
          <input ref={el => (input = el)} type="text" placeholder="Enter item" required />
          <span className="button-wrapper">
            <button type="submit" className="button-default">Add</button>
          </span>
        </div>
      </form>
    </div>
  )
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired
}

export default Form
