import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../constants/Constant'
import Instance from '../axios'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {

    Instance.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      let i = Math.floor(Math.random() * 20);
      setMovie(response.data.results[i]);
    });
  }, [])
  

  return (
    <>
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : " "
          })`
      }
      } className='banner'>
      <div className='content col-12'>
        <h1 className='title'>{movie ? movie.title : ''}</h1>

        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>

        <h1 className='description col-lg-6 col-12'>{movie ? movie.overview : ''}</h1>
      </div>
      <div className="fade_bottom">

    </div>
    </div>
    
    
    </>
  )
}

export default Banner