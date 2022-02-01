import React from 'react'
import Card from './Card'

const Animal = ({ currentAnimals, loading }) => {
  return (
    <div className="list-container">
      {
        loading && <h3 className="loading">Loading.....</h3>
      }
      {
        currentAnimals.map(animal => (
          <Card key={animal.id} animal={animal} />
        ))
      }
    </div>
  )
}

export default Animal
