import React from 'react'

import CollectForm from '../containers/CollectForm'
import ItemList from '../containers/ItemList'

const Collect = () => {
  return (
    <div className="collect-block display-flex flex-direction-column">
      <CollectForm />
      <ItemList />
    </div>
  )
}

export default Collect
