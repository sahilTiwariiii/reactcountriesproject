import React from 'react'
import "../styles/ShimmerCardDetails.css"
import countryData from '../all'
const ShimmerCardDetails = () => {
  return (
    <main>

  <div className="country-details-containerr">
    <span className="back-button" onClick="history.back()">
      <i className="fa-solid fa-arrow-left" />&nbsp; Back
    </span>
    <div className="country-detailss">
      {/* image div of shimmer loading */}
      <div className='mooo'>
        </div>
        <div className='lines-container'>

       
        {/* first div  first line of shimmer loading */}
        <div className="nema">
          
        </div>
        {/* second div second line of shimmer loading */}
        <div className="nema1">
          
        </div>

        <div className='play'>
          
        </div>

        <div className="place">
          
        </div>

        <div className="sunio">
          
        </div>
        </div>
        
    </div>
  </div>
   </main>
  )
}

export default ShimmerCardDetails