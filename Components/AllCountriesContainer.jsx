import React, { useContext, useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import "../styles/AllCountriesContainer.css";
import ShimmerEffectContainer from './ShimmerEffectContainer';

const AllCountriesContainer = ({query}) => {

  const [countriesData, setCountriesData] = useState([]);
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false);
      })
      .catch((err)=>{
        setNotFound(true)
      })
  }, []);
// when the searched country not found
if(notFound){
  return <div>Not found</div>
}






  return (
    <>
      {loading ? (
        <ShimmerEffectContainer />
      ) : (
        <div className='whole-cards'>
         {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                img={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
        </div>
      )}
    </>
  );
};

export default AllCountriesContainer;
