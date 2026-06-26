import React from 'react'

function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.surname}</p>
    </div>
  )
}

export default Profile
