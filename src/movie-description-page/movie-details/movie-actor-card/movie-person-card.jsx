import styles from './movie-person-card.module.css'

const MoviePersonCard = ({
  profile_path, 
  name, 
  character, 
  job,
}) => {
  
  return <div className={styles['movie-person-card']}>
    <img 
      className={styles.img}
      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
    />
    <p>{name}</p>
    <p>{character}</p>
    <p>{job}</p>

  </div>
}
export default MoviePersonCard