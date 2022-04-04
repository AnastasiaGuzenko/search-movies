import styles from './preview.module.css'
import { Link } from 'react-router-dom'

const Preview = ({
  title,
  overview,
  backdrop,
  id,
}) => {
  let myBackdrop = backdrop;
  if (!myBackdrop) {
    myBackdrop = '/xGW2hWSmL92qKsgUQEpzTOdWmmk.jpg';
  }
  return <div>
    <div 
      className={styles.preview}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${myBackdrop})`
      }}> 
      <h1>{title}</h1>
      <Link to={`movie-description/${id}`}>Details</Link>
      <p>{overview}</p>
    </div>

  </div>
}
export default Preview