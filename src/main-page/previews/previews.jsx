import { useEffect, useState } from 'react';
import {getMoviesURL} from '../../utils'
import Preview from './preview/preview';

const MOVIE_API_URL_PREVIEW = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const Previews = ({
}) => {
  const [previewMovies, setPreviewMovies] = useState([]);
  const [previewMovie, setPreviewMovie] = useState({})
  
  useEffect(() => {
    getMoviesURL(MOVIE_API_URL_PREVIEW, setPreviewMovies) 
  },[]);

  useEffect(() => {
    let interval;

    if (previewMovies.length) {
      const randomNum = () => {
        return(Math.round(Math.random() * 19))
      } 
      const randomMovie = () => {
        setPreviewMovie(previewMovies[randomNum()]);
      }
      randomMovie();

      interval = setInterval(() => {
        randomMovie();      
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }, [previewMovies]);

  if (!Object.keys(previewMovie).length) {
    return null;
  }

  return (
    <>
      <Preview
        title={previewMovie.title}
        overview={previewMovie.overview}
        backdrop={previewMovie.backdrop_path}
        id={previewMovie.id}
      />
    </>
  )
}
export default Previews;