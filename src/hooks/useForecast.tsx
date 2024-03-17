import { useState, useEffect } from 'react'
import { ChangeEvent } from 'react'
import { optionType, forecastType } from '../types'
const useForecast = () => {
  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<optionType | null>(null)
  const [forecast, setForecast] = useState<forecastType | null>(null)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)

    if (value === '') return

    getSearchOptions(value)
  }

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=b9dc0e8f89c623675fd8afffd564be9c`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=b9dc0e8f89c623675fd8afffd564be9c`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = { ...data.city, list: data.list.slice(0, 10) }
        setForecast(forecastData)
      })
  }

  const onSubmit = () => {
    if (!city) return

    getForecast(city)
  }

  const onOptionSelect = (option: optionType) => {
    setCity(option)
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return { options, term, forecast, onInputChange, onOptionSelect, onSubmit }
}

export default useForecast
