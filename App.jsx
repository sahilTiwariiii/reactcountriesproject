import React, { useState } from 'react'
import "./styles/App.css"
import SearchBar from './Components/SearchBar'
import DropDown from './Components/DropDown'
import AllCountriesContainer from './Components/AllCountriesContainer'



const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
    <main>
    <div className='main-container'>
    <SearchBar setQuery={setQuery} />
    <DropDown setQuery={setQuery} />
    </div>
<AllCountriesContainer query={query} />
</main>
    </>
  )
}

export default App