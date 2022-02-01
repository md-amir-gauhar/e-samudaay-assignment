import React from 'react'
import Card from './Card'

const Animal = ({ currentAnimals, loading }) => {
  return (
    <div className="list-container">
      {
        currentAnimals.map(animal => (
          <Card key={animal.id} animal={animal} />
        ))
      }
    </div>
  )
}

export default Animal
