import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { MovieContext } from './HomePage'

const Test = props => {
  const [credits, setCredits] = useState([])
  // const [tvId, setTvId] = useState(props.match.params.result)

  const getCastAndCredits = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.result}/credits?api_key=2d3a8fbb2336ce29522e69bb7f40bffa`
    )
    console.log(resp.data.cast)
    setCredits(resp.data.cast)
  }

  // const whatIsTheIdWeAreUsingPleaseGiveMeTheIdFromTheOtherPage = () => {
  //   console.log()
  // }

  useEffect(() => {
    getCastAndCredits()
    // whatIsTheIdWeAreUsingPleaseGiveMeTheIdFromTheOtherPage()
  }, [])

  return (
    <ul id="container">
      {credits.map(result => {
        return (
          <li id="cast">
            <div id="character">
              <p id="Character">Character Name</p>
              <p id="Character-name">{result.character}</p>
            </div>
            <Link to={`/${props.match.params.result}/${result.id}`}>
              <div>
                <p id="actor">Actor Name</p>
                <p id="actor-name">{result.name}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Test
