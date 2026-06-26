import React from 'react'

function Card(props) {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>name state variable value isnide {props.title}: {props.name}</p>
    </div>
  )
}

export default Card
