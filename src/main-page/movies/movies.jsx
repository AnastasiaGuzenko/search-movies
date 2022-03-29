import styles from './movies.module.css'
import Movie from './movie/movie'

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
            <Movie
              key={movie.id}
              poster={movie.poster_path}
            />
          ))
        } 
      </div>
    </div> 
  </div>
  )
}

export default Movies