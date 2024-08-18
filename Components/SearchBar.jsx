import React from 'react'
import "../styles/SearchBar.css"
const SearchBar = ({setQuery}) => {
  return (
    <>
<div className="left">
  {/* <i class="fa-solid fa-magnifying-glass" id="search"> */}
  <input onChange={(e)=>{
setQuery(e.target.value.toLowerCase())
  }} type="text" placeholder="Search for a country..." />
</div>

    </>
  )
}

export default SearchBar