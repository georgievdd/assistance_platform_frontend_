import React from 'react'
import UserForm from './UserForm';

const UsersSliceForm = props => {

  const {
    users
  } = props.data;

  return (
    <div>
      {
        users.map( 
          user => 
          <div className='mb-3'>
            <UserForm data={user}/> 
          </div>
        )
      }
    </div>
  )
}

export default UsersSliceForm;