import React, { PropTypes } from 'react';

const Form = ({ title, submit }) => {
  let input

  const onSubmit = (e) => {
    e.preventDefault()
    submit(input.value)
    input.value = ''
  }

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <label>
          Item
          <input ref={el => (input = el)} type="text"></input>
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired
}

export default Form
