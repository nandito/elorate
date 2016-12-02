import React from 'react'

import CollectForm from './CollectForm'
import ItemList from './ItemList'

// Presentational Component
const Collect = ({ items }) => {
  console.log(items)
  return (
    <div className="collect-block">
      <CollectForm />
      <ItemList items={items} />
    </div>
  )
}

export default Collect
