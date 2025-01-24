import React from 'react'
import Header from '../../components/header';
import CreateRoom from './CreateRoom';

const index = () => {
  return (
    <div>
     <Header joinRoom={false}/>
     <CreateRoom />
    </div>
  )
}

export default index;