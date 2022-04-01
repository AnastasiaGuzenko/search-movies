import styles from './preview.module.css'
import { Link } from 'react-router-dom'

const Preview = ({
  title, overview, backdrop
}) => {
  return <div>
    <div 
      className={styles.preview}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop})`
      }}> 
      <h1>{title}</h1>
      <Link to="movie-description">Details</Link>
      <p>{overview}</p>
    </div>

  </div>
}
export default Preview