import { useState } from 'react';

import useFetchAnimals from "./hooks/useFetchAnimals"
import Pagination from './components/Pagination'
import Animal from './components/Animal'

import './App.css';

function App() {
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const clickHandler = () => {
    setSortBy("bornAt")
  }

  const { animals, loading, error } = useFetchAnimals(query, sortBy)

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentAnimals = animals.slice(firstIndex, lastIndex)

  const paginate = (currentPage) => setCurrentPage(currentPage)

  return (
    <div className="app">
      <header>
        <h1>My Pets</h1>
      </header>

      <main className="container">
        <form>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Pets..."
          />
          <button type="submit">🔍</button>
        </form>
        <div className="filter-container">
          <button onClick={clickHandler}>Sort by age</button>
        </div>
        <Animal currentAnimals={currentAnimals} loading={loading} />
        <div className="pagination-container">
          <Pagination totalAnimals={animals.length} postsPerPage={postsPerPage} paginate={paginate} />
        </div>
      </main >
    </div >
  );
}

export default App;
