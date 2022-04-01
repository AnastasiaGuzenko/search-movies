import { useEffect, useState } from 'react';
import {getMoviesURL} from '../../utils'
import Preview from './preview/preview';

const MOVIE_API_URL_PREVIEW = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const Previews = ({
}) => {
  const [previewsMovies, setPreviewsMovies] = useState([]);
  const [previewMovie, setPreviewMovie] = useState([])
  
  useEffect(() => {
    getMoviesURL(MOVIE_API_URL_PREVIEW, setPreviewsMovies) 
  },[]);

  useEffect(() => {
    if (previewsMovies.length) {
      
      const randomNum = () => {
        return(Math.round(Math.random() * (19 - 0) + 0))
      } 
      const randomMovie = () => {
        setPreviewMovie(previewsMovies[randomNum()]);
      }
      randomMovie();      
      
    }
    
  }, [previewsMovies])

  return (
    <div>
      {
      <Preview 
        title={previewMovie.title}
        overview={previewMovie.overview}
        backdrop={previewMovie.backdrop_path}
      />
      }
    </div>
  )
}

export default Previews