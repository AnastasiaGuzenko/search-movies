import MoviePersonCard from "../../common/movie-person-card/movie-person-card"
import styles from './movie-details.module.css'
import { v1 as uuidv1 } from 'uuid'
import MovieDescriptionLink from "../../common/movie-description-link/movie-description-link"

const MovieDetails = ({
  credits,
  similar,
}) => {
  
  const sliceOfArr = (props, max) => {
    return (props.slice(0, max))
  }
  
  return <div className={styles['movie-details-wrapper']}>
    <div>
      <p className={styles.title}>Cast</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(credits.cast, 9).map(person => (
            <MoviePersonCard
              profilePath={person.profile_path}
              name={person.name}
              activity={person.character}
              key={person.id}
            />
          ))
        }
      </div>
    </div>
    <div>
      <p className={styles.title}>Crew</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(credits.crew, 9).map(person => (
            <MoviePersonCard
              profilePath={person.profile_path}
              name={person.name}
              activity={person.job}
              key={uuidv1()}
            />
          ))
        }
      </div>
    </div>
    <div>
      <p className={styles.title}>More Like This</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(similar.results, 4).map(movie => (
            <MovieDescriptionLink
              key={movie.id}
              poster={movie.poster_path}
              id={movie.id}
            />
            
          ))
        }
      </div>
    </div>
  </div>
}
export default MovieDetails;