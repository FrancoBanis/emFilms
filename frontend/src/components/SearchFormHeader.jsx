import './SearchFormHeader.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SearchFormHeader(){ 
    const [query, setQuery] = useState('')
    const [type, setType] = useState('movie')
    const navigate = useNavigate()

    function handleSearch(e) {
      e.preventDefault()
      navigate(`/search?query=${query}&type=${type}`)
    } 
    return (
    <form className="search-form-header" onSubmit={handleSearch}>
        <select className='btn-selecter' onChange={(e) => setType(e.target.value)}>
          <option value="multi">All</option>
          <option value="movie">Film</option>
          <option value="tv">Series</option>
        </select>
        <input  className="header-search-bar" type="text" onChange={(e) => setQuery(e.target.value)}  />
        <button className='btn-search'>Search</button>
      </form>
    )
}
export default SearchFormHeader