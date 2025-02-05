import React from 'react'
import useUserContext from '../contexts/UserContext';
function DisplayUser() {
  const {user} = useUserContext();
  
  return (
    <div >
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.message}</p>
    </div>
  )
}

export default DisplayUser
