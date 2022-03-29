import styles from './movie.module.css'

const Movie = ({
  poster,
}) => {
  return (
    <div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${poster}`}
      >
      </img>
    </div>
  )
}

export default Movie