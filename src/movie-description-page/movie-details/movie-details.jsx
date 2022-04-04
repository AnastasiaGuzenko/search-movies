import MoviePersonCard from "./movie-actor-card/movie-person-card"
import styles from './movie-details.module.css'

const MovieDetails = ({
  credits,
  similar
}) => {

  const sliceOfArr = (props) => {
    return (props.slice(0, 9))
  }
  return <div>
    <div>
      <p>Cast</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(credits.cast).map(person => (
            <MoviePersonCard
              profile_path={person.profile_path}
              name={person.name}
              character={person.character}
              key={person.id}
            />
          ))
        }
      </div>
    </div>
    <div>
      <p>Crew</p>
      <div className={styles['movie-details']}>
        {
          sliceOfArr(credits.crew).map(person => (
            <MoviePersonCard
              profile_path={person.profile_path}
              name={person.name}
              character={person.character}
              key={person.id}
              job={person.job}
            />
          ))
        }
      </div>
    </div>
    
  </div>
}
export default MovieDetails