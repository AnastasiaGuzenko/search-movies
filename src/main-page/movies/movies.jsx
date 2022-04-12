import styles from './movies.module.css';
import { MovieDescriptionLink } from '../../common';

const Movies = ({
  title, 
  value,
}) => {
  return (
    <div 
      className={styles['movie-genre-card']}
    >
      <p 
        className={styles['movie-genre-title']}
      >
        {title}
      </p>
      <div 
        className={styles['genre-movies']}
      >
        {
          value.map(movie => (
            <MovieDescriptionLink
              key={movie.id}
              poster={movie.poster_path}
              id={movie.id}
            />
          ))
        } 
      </div>
    </div> 
  );
};

export default Movies;
