import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Person = props => {
  const [personal, setPersonal] = useState([])

  const giveMeTheMovies = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${props.match.params.cast}/tv_credits?api_key=2d3a8fbb2336ce29522e69bb7f40bffa&language=en-US`
    )
    console.log(resp.data.cast)
    setPersonal(resp.data.cast)
  }

  useEffect(() => {
    giveMeTheMovies()
  }, [])

  return (
    <ul>
      {personal.map(thing => {
        return <li>{thing.original_name}</li>
      })}
    </ul>
  )
}

export default Person
