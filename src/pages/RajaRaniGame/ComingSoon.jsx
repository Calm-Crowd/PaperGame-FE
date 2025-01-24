import React from 'react'
import Header from '../../components/header'

const ComingSoon = () => {
  return (
    <div>
        <Header joinRoom={false} showBackButton={true}/>
        <div className='display-flex justify-content-center align-items-center mt-5 text-center'>
            Coming Soon....
        </div>
    </div>
  )
}

export default ComingSoon