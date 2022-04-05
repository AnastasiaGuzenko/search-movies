import styles from './movie-person-card.module.css'
import defaultProfilePath from '../../assets/i2.239f9100.jpg'

const MoviePersonCard = ({
  profilePath, 
  name, 
  activity,
}) => {

  const imgSRC = profilePath
    ? `https://image.tmdb.org/t/p/w500${profilePath}`
    : defaultProfilePath;

  return <div className={styles['movie-person-card']}>
    <div>
      <img 
        className={styles.img}
        src={imgSRC}
      />
    </div>
    <p>{name}</p>
    <p>{activity}</p>
  </div>
}
export default MoviePersonCard