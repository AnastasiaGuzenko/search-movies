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

  return <>
    <div 
      className={styles['background-image']}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${myBackdrop}")`
      }}> 
      <div className={styles.gradient}>
        <div className={styles['content-wrapper']}>
          <div className={styles.content}>
            <h1 
              className={styles.title}>
                {title}
            </h1>
            <button className={styles.btn}>
              <Link 
                to={`movie-description/${id}`}
                className={styles.link}
                >
                  Details
              </Link>
            </button>
            <p 
              className={styles.overview}>
                {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Preview;
