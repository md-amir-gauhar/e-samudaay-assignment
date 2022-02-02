import React from 'react'
import Moment from 'react-moment';

const Card = ({ animal }) => {
  return (
    <div className="card">
      <h3>{animal.name}</h3>
      <p><span style={{ fontWeight: 600 }}>Age:</span> <Moment fromNow ago>{animal.bornAt}</Moment></p>
    </div>
  )
}

export default Card
