import React from 'react'

const UserForm = props => {

  const {
    email,
    first_name,
    id,
    last_name,
    username,
  } = props.data;

  return (
    <div className='container-element' style={{height: "170px", paddingLeft: "10px"}}>
      <div>{username}</div>
      <p>картинка</p>
      <p>рейтинг автора</p>
      <p>рейтинг исполнителя</p>
      <p>основные навыки</p>
    </div>
  )
}

export default UserForm;