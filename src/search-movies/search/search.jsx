import MovieDescriptionLink from "../../common/movie-description-link/movie-description-link"

const Search = ({
  poster,
  id,
}) => {
  
  if (!poster) {
    return null
  }

  return <>
    <MovieDescriptionLink 
      poster={poster}
      id={id}
    />
  </>
}
export default Search;
