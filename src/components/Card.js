import React from 'react'

const Card = ({ animal }) => {
  const dob = new Date(animal.bornAt)
  let age = Date.now() - dob.getTime()
  age = (age / 1000 / 3600 / 24 / 30).toFixed()
  return (
    <div className="card">
      <h3>{animal.name}</h3>
      <p>{age} months</p>
    </div>
  )
}

export default Card
