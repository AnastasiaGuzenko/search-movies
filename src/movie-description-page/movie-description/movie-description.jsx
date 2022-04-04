import styles from './movie-description.module.css'
import { Link } from 'react-router-dom';

const MovieDescription = ({
  title, 
  poster, 
  overview, 
  runtime,
  backdrop_path,
  release_date,
}) => {

  let myBackdrop = backdrop_path;
  if (!myBackdrop) {
    myBackdrop = '/xGW2hWSmL92qKsgUQEpzTOdWmmk.jpg';
  }

  const releaseYear = () => {
    return release_date.substr(0, 4);
  }

  return (
    <div className={styles['movie-description']}>
      <div 
        className={styles['movie-description-up']}
        style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${myBackdrop})`}}>
          <div className={styles['wrapper']}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              >
            </img>
            <div className={styles.content}>
              <div className={styles['content-up']}>
                <p>{title} {releaseYear()}</p>
                Directed by ?
                <p>{runtime} минут</p>
                genre?
                Play Trailer?
              </div>
              <p>{overview}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MovieDescription