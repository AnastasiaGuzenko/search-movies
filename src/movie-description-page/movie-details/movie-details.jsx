import { MoviePersonCard } from "../../common";
import styles from './movie-details.module.css';
import { v1 as uuidv1 } from 'uuid';
import { MovieDescriptionLink } from "../../common";

const MovieDetails = ({
  results,
  cast,
  crew,
}) => {
  
  return (
    <div className={styles['movie-details-wrapper']}>
      <div>
        <p className={styles.title}>Cast</p>
        <div className={styles['movie-details']}>
          {
            cast.map(person => (
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
            crew.map(person => (
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
            results.map(movie => (
              <MovieDescriptionLink
                key={uuidv1()}
                poster={movie.poster_path}
                id={movie.id}
              />
              
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
