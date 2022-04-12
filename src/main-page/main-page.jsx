import Previews from './previews';
import styles from './main-page.module.css';
import { useEffect, useState } from 'react';
import Movies from './movies';
import { getMoviesURL } from '../utils';
import { Loading } from '../common';
import {
  MOVIE_API_URL_TRENDING,
  MOVIE_API_URL_POPULAR,
  MOVIE_API_URL_TOP_RATED_MOVIES,
  MOVIE_API_URL_TOP_COMEDY_MOVIES,
  MOVIE_API_URL_TOP_ACTION_MOVIES,
  MOVIE_API_URL_TOP_ROMANTIC_MOVIES,
  MOVIE_API_URL_CRIME_MOVIES,
  MOVIE_API_URL_HORROR_MOVIES,
  MOVIE_API_URL_DOCUMENTARIES,
} from './main-page-constants';

const MainPage = ({
  setLoading,
  loading,
  errorMessageMainPage,
  setErrorMessageMainPage,
}) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [romanticMovies, setRomanticMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    getMoviesURL(MOVIE_API_URL_TRENDING, setTrendingMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_POPULAR, setPopularMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_TOP_RATED_MOVIES, setTopRatedMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_TOP_COMEDY_MOVIES, setComedyMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_TOP_ACTION_MOVIES, setActionMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_TOP_ROMANTIC_MOVIES, setRomanticMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_CRIME_MOVIES, setCrimeMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_HORROR_MOVIES, setHorrorMovies, setLoading, setErrorMessageMainPage);
    getMoviesURL(MOVIE_API_URL_DOCUMENTARIES, setDocumentaries, setLoading, setErrorMessageMainPage);
  }, [])

  if (loading && !errorMessageMainPage) {
    return <Loading />
  }

  if (errorMessageMainPage) {
    return (
      <div 
        className="errorMessage"
      >
        Oops, something went wrong. Try refreshing the page.
      </div>
    )
  }

  const sliceOfArr = (value) => {
    return (value.slice(0, 10))
  }

  return (
    <>
      <Previews/>
      <div className={styles['movies-wrapper']}>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(trendingMovies)}
            title='Trending Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(popularMovies)}
            title='Popular Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(topRatedMovies)}
            title='Top Rated Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(comedyMovies)}
            title='Comedy Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(actionMovies)}
            title='Action Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(romanticMovies)}
            title='Romantic Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(crimeMovies)}
            title='Crime Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(horrorMovies)}
            title='Horror Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={sliceOfArr(documentaries)}
            title='Documentaries'
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
