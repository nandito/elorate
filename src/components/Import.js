import React, { PropTypes } from 'react'

const placeholder = '[{"name":"test","id":"9fed51be-031c-4ffe-b033-38f2e719ea27","score":1200,"games":0,"wins":0,"losses":0},{"name":"test2","id":"996861e1-fa6e-4ffa-95f9-95f254494663","score":1200,"games":0,"wins":0,"losses":0}]'

const Import = ({ toggle, bulkImport }) => {
  let textarea

  const onImport = (e) => {
    e.preventDefault()
    if (textarea.value) {
      bulkImport(textarea.value)
      toggle()
    }
  }

  return (
    <div>
      <p>You can import the previously exported items here.</p>
      <p>You can import manually created or updated data as well. The expected format is an <code>Array</code> of <code>Objects</code> where each object has the following fields:</p>
      <ul>
        <li><code>"name": string</code></li>
        <li><code>"id": unique string</code></li>
        <li><code>"score": number</code></li>
        <li><code>"games": number</code></li>
        <li><code>"wins": number</code></li>
        <li><code>"losses": number</code></li>
      </ul>
      <div className="form-part">
        <label htmlFor="textarea">JSON data</label>
        <textarea name="" ref={el => (textarea = el)} placeholder={placeholder} required ></textarea>
        <div className="col-p-100 text-right">
          <button onClick={onImport} className="button-default">Import</button>
          <button onClick={toggle} className="button-default">Cancel</button>
        </div>
      </div>
    </div>
  )
}

Import.propTypes = {
  toggle: PropTypes.func.isRequired,
  bulkImport: PropTypes.func.isRequired
}

export default Import
