import { useState, useEffect } from 'react'
import weatherService from './services/weather'
import Weather from './Weather'

const Country = ({ country }) => {
  const languages = Object.values(country.languages)
  const [weather, setWeather] = useState(null)
  const capital = country.capital[0]

  useEffect(() => {
    weatherService
      .getWeather(capital)
      .then(data => {
        setWeather(data)
      })
  }, [capital])

  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>Capital {country.capital[0]}</p>
      <p>Area {country.area}</p>

      <h2>Languages</h2>
      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
        
      <Weather weather={weather} />
    </div>
  )
}

export default Country