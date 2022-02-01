import React from 'react'

const Pagination = ({ totalAnimals, postsPerPage, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalAnimals / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="pagination">
      {
        pageNumbers.map(number => (
          <button onClick={() => paginate(number)} >{number}</button>
        ))
      }
    </div >
  )
}

export default Pagination
