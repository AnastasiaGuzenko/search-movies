import { Link } from 'react-router-dom'
import styles from './movie-similar.module.css'

const MovieSimilar = ({
  poster, 
  id,
}) => {
  return <div className={styles['movie-similar']}>
    <img
      className={styles.poster}
      src={`https://image.tmdb.org/t/p/w500${poster}`}
      >
    </img>


    {/* <Link 
      to={`movie-description/${id}`}>
        <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        >
        </img>
    </Link> */}
  </div>
}
export default MovieSimilar


