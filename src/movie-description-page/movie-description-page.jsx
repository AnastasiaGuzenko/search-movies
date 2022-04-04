import MovieDescription from "./movie-description/movie-description"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieDetails from "./movie-details/movie-details";
import styles from './movie-description-page.module.css'

const MovieDescriptionPage = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos,similar,credits&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US`)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovie(jsonResponse);
        
      });
  }, [id])
  
  if (!Object.keys(movie).length) {
    return null;
  }
  
  return <div className={styles['movie-description-page']}>
    <MovieDescription
      title={movie.title}
      overview={movie.overview}
      runtime={movie.runtime}
      poster={movie.poster_path}
      backdrop_path={movie.backdrop_path}
      release_date={movie.release_date}
      credits={movie.credits}
    />
    <MovieDetails
      credits={movie.credits}
      similar={movie.similar}
    />
  </div>
}
export default MovieDescriptionPage