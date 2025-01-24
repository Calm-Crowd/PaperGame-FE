import React from 'react'
import Header from '../../components/header';
import CreateRoom from './CreateRoom';

const index = () => {
  return (
    <div>
     <Header joinRoom={false} showBackButton={true}/>
     <CreateRoom />
    </div>
  )
}

export default index;