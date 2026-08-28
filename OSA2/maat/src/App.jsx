import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(data => {
        setCountries(data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange} />

      {selectedCountry
        ? <Countries countries={[selectedCountry]} />
        : <Countries countries={countriesToShow} onShow={setSelectedCountry} />
      }
    </div>
  )
}

export default App