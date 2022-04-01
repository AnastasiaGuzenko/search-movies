import Previews from './previews/previews';
import styles from './main-page.module.css'
import { useEffect, useState} from 'react';
import Movies from './movies/movies';
import {getMoviesURL} from '../utils'

const MOVIE_API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/week?api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_TOP_RATED_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_TOP_COMEDY_MOVIES = 'https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_TOP_ACTION_MOVIES = 'https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_TOP_ROMANTIC_MOVIES = 'https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_CRIME_MOVIES = 'https://api.themoviedb.org/3/discover/movie?with_genres=80&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_HORROR_MOVIES = 'https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';

const MOVIE_API_URL_DOCUMENTARIES = 'https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US';


const MainPage = ({
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
    getMoviesURL(MOVIE_API_URL_TRENDING, setTrendingMovies);
    getMoviesURL(MOVIE_API_URL_POPULAR, setPopularMovies);
    getMoviesURL(MOVIE_API_URL_TOP_RATED_MOVIES, setTopRatedMovies);
    getMoviesURL(MOVIE_API_URL_TOP_COMEDY_MOVIES, setComedyMovies);
    getMoviesURL(MOVIE_API_URL_TOP_ACTION_MOVIES, setActionMovies);
    getMoviesURL(MOVIE_API_URL_TOP_ROMANTIC_MOVIES, setRomanticMovies);
    getMoviesURL(MOVIE_API_URL_CRIME_MOVIES, setCrimeMovies);
    getMoviesURL(MOVIE_API_URL_HORROR_MOVIES, setHorrorMovies);
    getMoviesURL(MOVIE_API_URL_DOCUMENTARIES, setDocumentaries);

  }, [])

  return (
    <div>
      <Previews 
      />
      <div>
        <div className={styles.movies}>
          <Movies
            value={trendingMovies}
            title='Trending Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={popularMovies}
            title='Popular Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={topRatedMovies}
            title='Top Rated Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={comedyMovies}
            title='Comedy Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={actionMovies}
            title='Action Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={romanticMovies}
            title='Romantic Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={crimeMovies}
            title='Crime Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={horrorMovies}
            title='Horror Movies'
          />
        </div>
        <div className={styles.movies}>
          <Movies
            value={documentaries}
            title='Documentaries'
          />
        </div>

      </div>
      
    </div>
  )
}

export default MainPage