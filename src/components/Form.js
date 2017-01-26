import React from 'react'

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

export default Form
