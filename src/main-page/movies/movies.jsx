import styles from './movies.module.css'
import MovieDescriptionLink from '../../common/movie-description-link/movie-description-link'

const Movies = ({
  title, value
}) => {

  const sliceOfArr = () => {
    return (value.slice(0, 10))
  }

  return (
    <>
      <div className={styles['movie-genre-card']}>
        <p 
          className={styles['movie-genre-title']}>
            {title}
        </p>
        <div className={styles['genre-movies']}>
          {
            sliceOfArr().map(movie => (
              <MovieDescriptionLink
                key={movie.id}
                poster={movie.poster_path}
                id={movie.id}
              />
            ))
          } 
        </div>
      </div> 
    </>
  )
}
export default Movies;