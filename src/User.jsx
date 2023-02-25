import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fakeUserData } from './api'
import DeleteAll from './DeleteAll'
import { addUser } from './store/slices/UserSlice'

const User = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const addNewUser = (payload)=>{
    dispatch(addUser(payload))
  }
  
  return (
    <div>
        <h1>User List</h1>
        <br />
         <button
         onClick={()=> addNewUser(fakeUserData())}
         >add new user</button>
        <br />
           <ul>
            {
            data?.users?.map((name, i) => <li key={i}>{name} {"  "} <button>delete</button></li> )
            }
            
           </ul>
        <br />
       <DeleteAll />

    </div>
  )
}

export default User
