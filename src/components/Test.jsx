import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { MovieContext } from './HomePage'

const Test = props => {
  const [credits, setCredits] = useState([])
  const [tvId, setTvId] = props.match.params.result

  const getCastAndCredits = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${tvId}/credits?api_key=2d3a8fbb2336ce29522e69bb7f40bffa`
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

  return <div>n</div>
}

export default Test
