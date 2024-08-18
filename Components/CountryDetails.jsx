import React, { useEffect, useState } from 'react'
import "../styles/CountryDetails.css"
import ShimmerCardDetails from '../Components/ShimmerCardDetails'
import { Link, useParams } from 'react-router-dom'
const CountryDetails = () => {
  const params = useParams()
  const countryName=params.country;
  
    const [countryData, setCountryData] = useState({})
    const [loading, setLoading] = useState(true)

    console.log(countryData.borders)
  

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res) => res.json())
        .then(([data]) => {
          setCountryData({
            name: data.name.common,
            img: data.flags.svg,
            population: data.population.toLocaleString('en-IN'),
            region: data.region,
            tld: data.tld.join(', '),
            capital: data.capital?.[0],
            subregion: data.subregion,
            nativename: Object.values(data.name.nativeName)[0].common,
            currencies: Object.values(data.currencies)
              .map((currency) => currency.name)
              .join(', '),
            language: Object.values(data.languages).join(', '),
            borders: []  // Initialize with an empty array
          });
    
          // Check if borders exist before mapping over them
          if (data.borders && Array.isArray(data.borders)) {
            data.borders.forEach((border) => {
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderCountry]) => {
                  console.log(borderCountry.name.common);
                  setCountryData((prevState) => ({
                    ...prevState,
                    borders: [...prevState.borders, borderCountry.name.common]
                  }));
                });
            });
          } else {
            // No borders for this country
            console.log('No borders available for this country.');
          }
    
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
          setLoading(false);
        });
    }, [countryName]);
    
    const backButton=()=>{
    history.back();
    }
  return (
    <>

    {loading?(
      <ShimmerCardDetails/>
    ):(
<main>

<div className="country-details-container">
  <span className="back-button" onClick={backButton}>
    <i className="fa-solid fa-arrow-left" />&nbsp; Back
  </span>
  <div className="country-details">
    <img src={countryData.img} alt={countryData.name} />
    <div className="details-text-container">
      <h1>{countryData.name}</h1>
      <div className="details-text">
        <p><b>Native Name: </b><span className="native-name" />{countryData.nativename}</p>
        <p><b>Population: </b><span className="population" />{countryData.population}</p>
        <p><b>Region: </b><span className="region" />{countryData.region}</p>
        <p><b>Sub Region: </b><span className="sub-region" />{countryData.subregion}</p>
        <p><b>Capital: </b><span className="capital" />{countryData
        .capital}</p>
        <p>
          <b>Top Level Domain: </b><span className="top-level-domain" />{countryData.tld}
        </p>
        <p><b>Currencies: </b><span className="currencies" />{countryData.currencies}</p>
        <p><b>Languages: </b><span className="languages" />{countryData.language}</p>
      </div>
      {countryData.borders.length !==0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;
      {countryData.borders.map((border)=> <Link key={border} to={`/${border}`}>{border}</Link>)}
      </div>}
    </div>
  </div>
</div>
 </main>
    )}

  </>

  )
}

export default CountryDetails