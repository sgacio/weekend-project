import React from 'react'
import axios from 'axios'
import { useState } from 'react-router-dom'
import { useEffect } from 'react-router-dom'


const Test = () => {
  const [img, setImg] = useState('')

  const getImage = async () => {
   const resp = axios.get('https://api.themoviedb.org/3/configuration?api_key=2d3a8fbb2336ce29522e69bb7f40bffa')
    setImg(resp.data.images)
    console.log(resp.data.images)
  }

  useEffect({
    getIMage()
  }, [])
  return <div></div>
}

export default Test
