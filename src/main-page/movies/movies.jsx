import styles from './movies.module.css'
import MovieDescriptionLink from '../../common/movie-description-link/movie-description-link'

const Movies = ({
  title, value
}) => {
  
  return (
  <div>
    <div className={styles.trends}>
      <p>{title}</p>
      <div className={styles.movies}>
        {
          value.map(movie => (
            <MovieDescriptionLink
              key={movie.id}
              poster={movie.poster_path}
              id={movie.id}
            />
          ))
        } 
      </div>
    </div> 
  </div>
  )
}

export default Movies