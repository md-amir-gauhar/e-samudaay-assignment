import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "https://60d075407de0b20017108b89.mockapi.io/api/v1/animals";

const useFetchAnimals = (query, sortBy) => {
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    let cancel;
    axios({
      method: "GET",
      url: BASE_URL,
      params: { name: query, sortBy: sortBy },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setAnimals(res.data);
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true)
    })

    return () => cancel()
  }, [query, sortBy])

  return { animals, loading, errors }
}


export default useFetchAnimals