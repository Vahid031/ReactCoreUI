import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2022 All Rights Reserved</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="http://Vahid031.ir" target="_blank" rel="noopener noreferrer">Vahid Goodarzi</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
