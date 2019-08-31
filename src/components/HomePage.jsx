import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [movie, setMovie] = useState([])
  const [movieUrl, setMovieUrl] = useState('https://image.tmdb.org/t/p/w500')

  const grabData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=%3C%3C2d3a8fbb2336ce29522e69bb7f40bffa%3E%3E&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setMovie(resp.data.results)
  }

  useEffect(() => {
    grabData()
  }, [])

  return (
    <>
      <ul>
        {movie.map(result => {
          return (
            <li key={result.id}>
              <section>
                {result.original_name}
                <img
                  className="image"
                  src={`${movieUrl}${result.poster_path}`}
                  alt="poster"
                />
                <p>This show premiered on {result.first_air_date}</p>
                <p>The popularity of this show is {result.popularity}</p>
                <p>Overview: {result.overview}</p>
              </section>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HomePage
