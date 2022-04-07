import styles from './movie-description-link.module.css'
import { Link } from 'react-router-dom'
const MovieDescriptionLink = ({
  poster, 
  id,
}) => {
  if (!poster) {
    return null
  }
  return (
    <div>
      <Link 
        to={`/movie-description/${id}`}>
          <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          >
          </img>
      </Link>

    </div>
  )
}

export default MovieDescriptionLink