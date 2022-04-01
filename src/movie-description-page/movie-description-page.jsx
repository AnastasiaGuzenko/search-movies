import MovieDescription from "./movie-description/movie-description"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const MOVIE_API_URL = 'https://api.themoviedb.org/3/movie/508947?api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US'

const MovieDescriptionPage = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US`)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovie(jsonResponse);
        
      });
  }, [id])


  return <div>
    <div>
      <MovieDescription
        title={movie.title}
        overview={movie.overview}
        runtime={movie.runtime}
        poster={movie.poster_path}
      />
    </div>
  </div>
}
export default MovieDescriptionPage