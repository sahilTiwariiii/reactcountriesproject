import React, { useEffect } from 'react'
import "../styles/PageNotFound.css"


const PageNotFound = () => {
 useEffect(() => {
  window.addEventListener('resize',()=>{
    console.log("first")
  })
 }, [])
 
  return (
   <div className="error-container">
  <div className="error-content">
    <h1>😔 404</h1>
    <h2>Oops! Page Not Found</h2>
    <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
    <a href="/" className="back-home">Go Back to Homepage</a>
  </div>
</div>

  )
}

export default PageNotFound