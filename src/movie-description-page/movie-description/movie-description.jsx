import styles from './movie-description.module.css'
const MovieDescription = ({
  title, poster, overview, runtime
}) => {
  return (
    <div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        >
      </img>
      <p>{title}</p>
      <p>{overview}</p>
      <span>{runtime} минут</span>

    </div>
  )
}

export default MovieDescription