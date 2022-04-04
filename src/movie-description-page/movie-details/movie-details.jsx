import MoviePersonCard from "./movie-actor-card/movie-person-card"
import styles from './movie-details.module.css'
import { v1 as uuidv1 } from 'uuid'
import MovieSimilar from "./movie-similar/movie-similar"

const MovieDetails = ({
  credits,
  similar,
}) => {
  
  const sliceOfArr = (props, max) => {
    return (props.slice(0, max))
  }
  
  return <div>
    <div>
      <p>Cast</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(credits.cast, 9).map(person => (
            <MoviePersonCard
              profile_path={person.profile_path}
              name={person.name}
              character={person.character}
              key={uuidv1()}
            />
          ))
        }
      </div>
    </div>
    <div>
      <p>Crew</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(credits.crew, 9).map(person => (
            <MoviePersonCard
              profile_path={person.profile_path}
              name={person.name}
              key={uuidv1()}
              job={person.job}
            />
          ))
        }
      </div>
    </div>
    <div>
      <p>More Like This</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(similar.results, 4).map(movie => (
            <MovieSimilar
              key={uuidv1()}
              poster={movie.poster_path}
              id={movie.id}
            />
            
          ))
        }
      </div>
    </div>
    
  </div>
}
export default MovieDetails