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