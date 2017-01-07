import React from 'react'

import CollectForm from './CollectForm'
import ItemList from '../containers/ItemList'

// Presentational Component
const Collect = () => {
  return (
    <div className="collect-block">
      <CollectForm />
      <ItemList />
    </div>
  )
}

export default Collect
