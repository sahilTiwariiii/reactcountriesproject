import React from 'react'
import "../styles/CountryCard.css"
import { Link } from 'react-router-dom'
const CountryCard = ({name,population,region,capital,img}) => {
  
  return (
  <>
 <div className="content-container">
  <Link to={`/${name}`}>
    <img className="immg" src={img} />
    <h2 className="namee">{name}</h2>
    <h4 className="pop">Population: <span>{population}</span></h4>
    <h4 className="re">Region: <span>{region}</span></h4>
    <h4 className="cap">Capital: <span>{capital}</span></h4>
  </Link>
</div>
    </>
  )
}

export default CountryCard