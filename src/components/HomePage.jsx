import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [movie, setMovie] = useState([])
  const [imageUrl, setImageUrl] = useState('https://image.tmdb.org/t/p/w500')
  const [randomShow, setRandomShow] = useState('')

  const grabData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=%3C%3C2d3a8fbb2336ce29522e69bb7f40bffa%3E%3E&language=en-US&page=1'
    )
    console.log(resp.data.results)
    console.log(resp.data.results[Math.ceil(Math.random() * 19)])
    setMovie(resp.data.results)
    setRandomShow(resp.data.results[Math.ceil(Math.random() * 19)])
  }

  useEffect(() => {
    grabData()
  }, [])

  return (
    <>
      <Link to="/Test">
        <section className="container">
          <p className="original-name-highlight">{randomShow.original_name}</p>
          <img
            className="image-sec"
            src={`${imageUrl}${randomShow.poster_path}`}
          />
          <div className="card-info-section-highlight">
            <p>This show premiered on {randomShow.first_air_date}</p>
            <p>The popularity of this show is {randomShow.popularity}</p>
            <p>Overview: {randomShow.overview}</p>
          </div>
        </section>
      </Link>
      <ul className="container">
        {movie.map(result => {
          return (
            <Link to={{ pathname: '/Test', props: [{ result }] }}>
              <li key={result.id}>
                <div className="original-name">{result.original_name}</div>

                <div>
                  <img
                    className="image-section"
                    src={`${imageUrl}${result.poster_path}`}
                    alt="poster"
                  />
                </div>

                <div className="card-info-section">
                  <p>This show premiered on {result.first_air_date}</p>
                  <p>The popularity of this show is {result.popularity}</p>
                  <p>Overview: {result.overview}</p>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}

export default HomePage
