import React from 'react'

import CollectForm from './CollectForm'
import ItemList from '../containers/ItemList'

const Collect = () => {
  return (
    <div className="collect-block">
      <CollectForm />
      <ItemList />
    </div>
  )
}

export default Collect
