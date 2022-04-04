import styles from './movie.module.css'
import { Link } from 'react-router-dom'

const Movie = ({
  poster, id
}) => {
  
  return (
    <div>
      <Link 
        to={`movie-description/${id}`}>
          <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          >
          </img>
      </Link>

    </div>
  )
}

export default Movie