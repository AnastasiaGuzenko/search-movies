import Search from "./search/search"
import styles from './search-movies.module.css'

const SearchMovies = ({
  visible,
  moviesSearchValue,
}) => {
  if (!visible) {
    return null
  }
  return <div className={styles.search}>
    {
      moviesSearchValue.map(movie => (
        <Search 
          poster={movie.poster_path}
          id={movie.id}
          key={movie.id}
        />
      ))
    }
  </div>
}
export default SearchMovies