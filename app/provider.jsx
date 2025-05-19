import React from 'react'
import Header from './_components/Header'

function provider({children}) {
  return (
    <div>
       
        <div className='tracking-[0.07rem]'>
                {children}
            </div>
    </div>
  )
}

export default provider
