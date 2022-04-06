import styles from './movie-description.module.css'

const MovieDescription = ({
  title, 
  poster, 
  overview, 
  runtime,
  backdrop_path,
  release_date,
  crew,
  genres,
  videos
}) => {

  let myBackdrop = backdrop_path;
  if (!myBackdrop) {
    myBackdrop = '/xGW2hWSmL92qKsgUQEpzTOdWmmk.jpg';
  }

  const releaseYear = () => {
    return release_date.substr(0, 4);
  }
  let nameDirector;
  crew.map(person => {
    if (person.known_for_department === 'Directing' && person.job === 'Director') {
      nameDirector = person.name
      return nameDirector
    } 
  })
  const nameGener = genres.map(genre => {
    return genre.name
  })

  const runtimeMovie = () => {
    if (!runtime) {
      return null
    } else {
      let hours = Math.trunc(runtime/60);
      let minutes = runtime % 60;
      return hours + 'h ' + minutes + 'm ';
    } 
  }

  const movieTrailer = videos[0].key

  return (
    <div className={styles['movie-description']}>
      <div 
        className={styles['movie-description-up']}
        style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${myBackdrop})`}}>
          <div className={styles['wrapper']}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              >
            </img>
            <div className={styles.content}>
              <div className={styles['content-up']}>
                <p>{title} ({releaseYear()})</p>
                <p>Directed by {nameDirector}</p>
                <p>{runtimeMovie()}</p>
                <p>
                  {nameGener[0]} | {nameGener[1]} | {nameGener[2]} 
                </p>
                <iframe 
                  width="560" 
                  height="315" 
                  src={`https://www.youtube.com/embed/${movieTrailer}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
              </div>
              <p>{overview}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MovieDescription