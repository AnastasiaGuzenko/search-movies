import MovieDescriptionLink from "../../common/movie-description-link/movie-description-link"
import styles from './search.module.css'

const Search = ({
  poster,
  id,
}) => {
  if (!poster) {
    return null
  }
  return <div className={styles.search}>
    <MovieDescriptionLink 
      poster={poster}
      id={id}
    />
  </div>
}
export default Search
