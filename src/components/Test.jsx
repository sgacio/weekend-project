import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import HomePage from './HomePage'

const Test = () => {
  const [tvId, setTvId] = useState('')

  const getCastAndCredits = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${tvId}/credits?api_key=2d3a8fbb2336ce29522e69bb7f40bffa`
    )
    console.log(resp.data.cast)
    setTvId(resp.data.cast)
  }

  useEffect(() => {
    getCastAndCredits()
  }, [])

  return <div>n</div>
}

export default Test
