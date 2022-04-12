import MovieDescription from "./movie-description";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetails from "./movie-details";
import { Loading } from "../common";
import { v1 as uuidv1 } from 'uuid';

const MovieDescriptionPage = ({
  setLoading,
  loading,
  errorMessageDescriptionPage,
  setErrorMessageDescriptionPage,
}) => {

  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos,similar,credits&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse) {
          setMovie(jsonResponse);
          setLoading(false)
        } else {
          setErrorMessageDescriptionPage(jsonResponse.Error);
          setLoading(false)
        }
      });
  }, [id])

  if (!Object.keys(movie).length) {
    return null;
  }

  if (loading && !errorMessageDescriptionPage) {
    return <Loading/>
  }

  if (errorMessageDescriptionPage) {
    return (
      <div 
        className="errorMessage"
      >
        Oops, something went wrong. Try refreshing the page.
      </div>
    )
  }

  const resultsMovie = () => {
    return (movie.similar.results)
  }

  const castMovie = () => {
    return (movie.credits.cast)
  }

  const crewMovie = () => {
    return (movie.credits.crew)
  }

  const sliceArr = (value, max) => {
    return (value().slice(0, max))
  }
  
  return (
    <>
      <MovieDescription
        title={movie.title}
        overview={movie.overview}
        runtime={movie.runtime}
        poster={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        release_date={movie.release_date}
        crew={movie.credits.crew}
        genres={movie.genres}
        videos={movie.videos.results}
        key={uuidv1()}
      />
      <MovieDetails
        cast={sliceArr(castMovie, 9)}
        crew={sliceArr(crewMovie, 9)}
        results={sliceArr(resultsMovie, 4)}
        key={uuidv1()}
      />
    </>
  );
};

export default MovieDescriptionPage;
