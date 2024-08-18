import React from 'react'
import "../styles/Dropdown.css"
const DropDown = ({setQuery}) => {
  return (
    <>
    <div className="rightt">
  <select name id className="maro" onChange={(e)=>{
setQuery(e.target.value.toLowerCase())
  }}>
    <option value hidden className="fbr">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="America">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</div>

    </>
  )
}

export default DropDown